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
  "robots.txt",
  "sitemap.xml",
  "404.html",
  "_headers"
];

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

for (const file of files) {
  await cp(join(root, file), join(dist, file));
}
await cp(join(root, "listino.html"), join(dist, "listino-epilazione-laser.html"));
await cp(join(root, "legal.html"), join(dist, "privacy.html"));
await cp(join(root, "legal.html"), join(dist, "privacy-policy.html"));
await cp(join(root, "legal.html"), join(dist, "cookie-policy.html"));
await cp(join(root, "assets"), join(dist, "assets"), { recursive: true });

const hosting = await readFile(join(root, ".openai", "hosting.json"), "utf8");
await mkdir(join(dist, ".openai"), { recursive: true });
await writeFile(join(dist, ".openai", "hosting.json"), hosting, "utf8");

console.log(`Built ${dist}`);
