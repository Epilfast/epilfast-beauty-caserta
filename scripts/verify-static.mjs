import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));

delete globalThis.EPILFAST_SERVICES;
await import(`${pathToFileURL(join(root, "assets", "services.js")).href}?qa=${Date.now()}`);

const services = globalThis.EPILFAST_SERVICES;
if (!Array.isArray(services) || services.length !== 116) {
  throw new Error(`Catalogo inatteso: ${Array.isArray(services) ? services.length : "non caricato"} servizi`);
}

const ids = new Set(services.map(service => service.bewellyId));
if (ids.size !== services.length) throw new Error("ID Bewelly duplicati");
if (!services.some(service => service.name === "Epilazione laser Total Body")) {
  throw new Error("Servizi laser estesi non presenti");
}

const bookingScript = await readFile(join(root, "assets", "site.js"), "utf8");
for (const expected of [
  'bookingAddUrl: "https://www.bewelly.it/store_ajax.php"',
  'action: "add_service"',
  'trigger.textContent = "Apro Bewelly…"',
  "window.setTimeout(openCart, 2600)",
]) {
  if (!bookingScript.includes(expected)) throw new Error(`Flusso Bewelly incompleto: manca ${expected}`);
}

const pages = ["index.html", "chi-siamo.html", "contatti.html", "listino.html", "legal.html", "promo.html", "shop.html", "vip.html"];
for (const page of pages) {
  const html = await readFile(join(root, page), "utf8");
  const servicesIndex = html.indexOf("assets/services.js?v=20261124-6");
  const siteIndex = html.indexOf("assets/site.js?v=20261125-8");
  if (servicesIndex < 0 || siteIndex < 0 || servicesIndex > siteIndex) {
    throw new Error(`${page}: catalogo mancante o caricato dopo site.js`);
  }
}

console.log(`QA statico superato: ${services.length} servizi, ${ids.size} ID univoci, ${pages.length} pagine versionate`);
