import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const dist = join(root, "dist");
const files = [
  "index.html",
  "chi-siamo.html",
  "contatti.html",
  "listino.html",
  "legal.html",
  "promo.html",
  "shop.html",
  "vip.html",
  "robots.txt",
  "sitemap.xml",
  "CNAME",
  "404.html",
  "_headers"
];

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

for (const file of files) {
  await cp(join(root, file), join(dist, file));
}
await cp(join(root, "listino.html"), join(dist, "listino-epilazione-laser.html"));
const listinoLegacy = join(dist, "listino-epilazione-laser");
await mkdir(listinoLegacy);
const listino = await readFile(join(root, "listino.html"), "utf8");
await writeFile(join(listinoLegacy, "index.html"), listino.replace("<head>", '<head><base href="../">'), "utf8");
await cp(join(root, "legal.html"), join(dist, "privacy.html"));
await cp(join(root, "legal.html"), join(dist, "privacy-policy.html"));
await cp(join(root, "legal.html"), join(dist, "cookie-policy.html"));
await cp(join(root, "assets"), join(dist, "assets"), { recursive: true });

try {
  const hosting = await readFile(join(root, ".openai", "hosting.json"), "utf8");
  await mkdir(join(dist, ".openai"), { recursive: true });
  await writeFile(join(dist, ".openai", "hosting.json"), hosting, "utf8");
} catch (error) {
  if (error?.code !== "ENOENT") throw error;
  // GoDaddy Airo non usa il manifest Sites: il pacchetto resta compilabile
  // anche quando quella configurazione non fa parte dell'archivio sorgente.
}

console.log(`Built ${dist}`);
