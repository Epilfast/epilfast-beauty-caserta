"use strict";

const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const ROOT = __dirname;
const PORT = Number(process.env.PORT) || 3000;
const VERSION = "1.0.2";

const routes = new Map([
  ["/", "index.html"], ["/index.html", "index.html"],
  ["/chi-siamo", "chi-siamo.html"], ["/chi-siamo.html", "chi-siamo.html"],
  ["/contatti", "contatti.html"], ["/contatti.html", "contatti.html"],
  ["/listino-epilazione-laser", "listino.html"], ["/listino", "listino.html"], ["/listino.html", "listino.html"],
  ["/privacy", "legal.html"], ["/privacy-policy", "legal.html"], ["/cookie-policy", "legal.html"], ["/legal.html", "legal.html"]
]);

const mimeTypes = new Map([
  [".html", "text/html; charset=utf-8"], [".css", "text/css; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"], [".json", "application/json; charset=utf-8"],
  [".txt", "text/plain; charset=utf-8"], [".xml", "application/xml; charset=utf-8"],
  [".jpg", "image/jpeg"], [".jpeg", "image/jpeg"], [".png", "image/png"],
  [".webp", "image/webp"], [".svg", "image/svg+xml"], [".ico", "image/x-icon"]
]);

function commonHeaders(contentType) {
  return {
    "Content-Type": contentType,
    "Content-Security-Policy": "default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none'; form-action 'self'; img-src 'self' data:; script-src 'self'; style-src 'self' 'unsafe-inline'; frame-src https://www.google.com https://maps.google.com; connect-src 'self'; upgrade-insecure-requests",
    "Referrer-Policy": "strict-origin-when-cross-origin", "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY", "Permissions-Policy": "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
    "Cross-Origin-Opener-Policy": "same-origin", "Strict-Transport-Security": "max-age=31536000; includeSubDomains"
  };
}

function send(res, status, body, contentType, method, extraHeaders = {}) {
  res.writeHead(status, { ...commonHeaders(contentType), "Content-Length": Buffer.byteLength(body), ...extraHeaders });
  if (method === "HEAD") return res.end();
  res.end(body);
}

function serveFile(res, filePath, method) {
  fs.readFile(filePath, (error, body) => {
    if (error) return send(res, 404, "Risorsa non trovata", "text/plain; charset=utf-8", method, { "Cache-Control": "no-store" });
    const extension = path.extname(filePath).toLowerCase();
    const immutableAsset = filePath.startsWith(path.join(ROOT, "assets") + path.sep);
    send(res, 200, body, mimeTypes.get(extension) || "application/octet-stream", method, {
      "Cache-Control": immutableAsset ? "public, max-age=604800" : "public, max-age=300"
    });
  });
}

const server = http.createServer((req, res) => {
  const method = req.method || "GET";
  if (method !== "GET" && method !== "HEAD") {
    return send(res, 405, "Metodo non consentito", "text/plain; charset=utf-8", method, { Allow: "GET, HEAD", "Cache-Control": "no-store" });
  }
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url || "/", "http://localhost").pathname); }
  catch { return send(res, 400, "Richiesta non valida", "text/plain; charset=utf-8", method, { "Cache-Control": "no-store" }); }

  if (pathname === "/health") {
    return send(res, 200, JSON.stringify({ status: "ok", service: "epilfast-beauty", version: VERSION }), "application/json; charset=utf-8", method, { "Cache-Control": "no-store" });
  }
  const mapped = routes.get(pathname);
  if (mapped) return serveFile(res, path.join(ROOT, mapped), method);
  if (pathname === "/robots.txt" || pathname === "/sitemap.xml") return serveFile(res, path.join(ROOT, pathname.slice(1)), method);
  if (pathname.startsWith("/assets/")) {
    const candidate = path.resolve(ROOT, pathname.slice(1).replaceAll("/", path.sep));
    const assetsRoot = path.resolve(ROOT, "assets") + path.sep;
    if (candidate.startsWith(assetsRoot)) return serveFile(res, candidate, method);
  }
  const body = "<!doctype html><html lang=\"it\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><title>Pagina non trovata — Epilfast Beauty</title></head><body><main><h1>Pagina non trovata</h1><p><a href=\"/\">Torna al sito Epilfast Beauty</a></p></main></body></html>";
  return send(res, 404, body, "text/html; charset=utf-8", method, { "Cache-Control": "no-store" });
});

server.listen(PORT, "0.0.0.0", () => console.log(`Epilfast Beauty ${VERSION} in ascolto sulla porta ${PORT}`));
