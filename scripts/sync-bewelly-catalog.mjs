import { writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const sourceUrl = "https://www.bewelly.it/4290/";

const response = await fetch(sourceUrl, {
  headers: { "user-agent": "Epilfast catalog sync/1.0" }
});

if (!response.ok) {
  throw new Error(`Bewelly ha risposto ${response.status} ${response.statusText}`);
}

const html = await response.text();

function decodeEntities(value) {
  const named = {
    amp: "&",
    apos: "'",
    gt: ">",
    lt: "<",
    nbsp: " ",
    quot: '"'
  };

  return value
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&([a-z]+);/gi, (match, name) => named[name.toLowerCase()] ?? match);
}

function clean(value = "") {
  return decodeEntities(value.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
}

function first(value, pattern) {
  return value.match(pattern)?.[1] ?? "";
}

const services = [];
const sections = html.match(/<section class="service-category-group[^>]*>[\s\S]*?<\/section>/g) ?? [];

for (const section of sections) {
  const category = clean(first(section, /<div class="service-category-head">[\s\S]*?<h4>([\s\S]*?)<\/h4>/));
  if (!category) continue;

  const cards = section.match(/<article class="service_row service-card[^"]*">[\s\S]*?<\/article>/g) ?? [];
  for (const card of cards) {
    const bewellyId = Number(first(card, /data-service_id="(\d+)"/));
    if (!bewellyId) continue;

    services.push({
      category,
      name: clean(first(card, /<div class="service-card-top">\s*<h4>([\s\S]*?)<\/h4>/)),
      price: clean(first(card, /<div class="service-card-price">([\s\S]*?)<\/div>/)),
      duration: clean(first(card, /<span class="service-card-time">([\s\S]*?)<\/span>/))
        .replace(/(\d)h\s*/g, "$1 h ")
        .replace(/(\d)min/g, "$1 min"),
      bewellyId,
      description: clean(first(card, /<p class="expand_description[^>]*>([\s\S]*?)<\/p>/))
    });
  }
}

const ids = new Set(services.map(service => service.bewellyId));
const categories = Object.groupBy(services, service => service.category);

if (services.length < 100) {
  throw new Error(`Import incompleto: trovati solo ${services.length} servizi (attesi almeno 100)`);
}
if (ids.size !== services.length) {
  throw new Error("Import non valido: sono presenti identificativi Bewelly duplicati");
}
if ((categories.Depilazione?.length ?? 0) < 50 || (categories.Corpo?.length ?? 0) < 20) {
  throw new Error("Import incompleto: mancano servizi estesi Corpo o Depilazione");
}

const payload = `/* Catalogo pubblico Bewelly Epilfast, sincronizzato da ${sourceUrl}.\n` +
  ` * Totale: ${services.length}. Generato: ${new Date().toISOString()}.\n` +
  ` */\n` +
  `globalThis.EPILFAST_SERVICES = Object.freeze(${JSON.stringify(services, null, 2)}.map(Object.freeze));\n`;

await writeFile(join(root, "assets", "services.js"), payload, "utf8");

const counts = Object.entries(categories)
  .map(([category, items]) => `${category}: ${items.length}`)
  .join(", ");
console.log(`Sincronizzati ${services.length} servizi Bewelly (${counts})`);
