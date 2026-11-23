const BUSINESS = {
  phoneDisplay: "351 995 4908",
  phone: "393519954908",
  address: "Via Ferrarecce 189, 81100 Caserta CE",
  bookingUrl: "https://www.bewelly.it/4290/",
  bookingAddUrl: "https://www.bewelly.it/store_ajax.php",
  bookingCartUrl: "https://www.bewelly.it/carrello/4290/",
  bewellyDivisionId: "4290",
  instagram: "https://www.instagram.com/epilfastbeautycaserta/",
  whatsappIntro: "Ciao Epilfast Beauty, vorrei ricevere informazioni."
};

const SERVICES = [
  { category: "Corpo", name: "Bendaggi Corpo", price: "da 49,90 €", duration: "50 min", bewellyId: 541121 },
  { category: "Corpo", name: "Bendaggi Gambe", price: "da 34,90 €", duration: "40 min", bewellyId: 541120 },
  { category: "Corpo", name: "Bendaggi drenanti", price: "da 39,90 €", duration: "30 min", bewellyId: 783904 },
  { category: "Corpo", name: "Body Wrap Termo", price: "da 49,90 €", duration: "30 min", bewellyId: 677586 },
  { category: "Corpo", name: "Bodyslimming massage - 30 min massaggio + fasi prodotti", price: "da 60,00 €", duration: "45 min", bewellyId: 686477 },
  { category: "Corpo", name: "Bodyslimming Fast 30 min", price: "da 45,00 €", duration: "30 min", bewellyId: 648359 },
  { category: "Corpo", name: "Bodyslimming Massaggio Parziale", price: "da 49,90 €", duration: "45 min", bewellyId: 648362 },
  { category: "Corpo", name: "Bodyslimming Prima Seduta", price: "da 39,90 €", duration: "30 min", bewellyId: 648363 },
  { category: "Corpo", name: "Bodyslimming Total", price: "da 80,00 €", duration: "1 h 15 min", bewellyId: 648361 },
  { category: "Corpo", name: "C30 - Trattamento anticellulite", price: "da 34,90 €", duration: "30 min", bewellyId: 541123 },
  { category: "Depilazione", name: "Ceretta Ascelle - Donna", price: "da 7,00 €", duration: "5 min", bewellyId: 540867 },
  { category: "Depilazione", name: "Ceretta Braccia Parziale - Donna", price: "da 9,90 €", duration: "10 min", bewellyId: 540852 },
  { category: "Depilazione", name: "Ceretta Gamba Intera", price: "da 19,90 €", duration: "30 min", bewellyId: 540855 },
  { category: "Depilazione", name: "Ceretta Gamba Intera - Donna", price: "da 19,90 €", duration: "30 min", bewellyId: 540853 },
  { category: "Depilazione", name: "Ceretta Gamba Intera e Inguine Parziale - Donna", price: "da 24,90 €", duration: "30 min", bewellyId: 540856 },
  { category: "Depilazione", name: "Ceretta Gambe Inguine e Ascelle - Donna", price: "da 34,90 €", duration: "35 min", bewellyId: 540871 },
  { category: "Depilazione", name: "Ceretta Labbro Superiore baffetto - Donna", price: "da 5,00 €", duration: "5 min", bewellyId: 540873 },
  { category: "Depilazione", name: "Ceretta Mezza Gamba + Inguine - Donna", price: "da 19,90 €", duration: "30 min", bewellyId: 540864 },
  { category: "Depilazione", name: "Ceretta Schiena Donna", price: "da 19,90 €", duration: "20 min", bewellyId: 540876 },
  { category: "Depilazione", name: "Ceretta sopracciglia - Donna", price: "da 5,00 €", duration: "5 min", bewellyId: 540848 },
  { category: "Viso", name: "Colorazione Sopracciglia Hennè - Donna", price: "da 14,90 €", duration: "30 min", bewellyId: 540840 },
  { category: "Viso", name: "Formula 301 Acne e Pelli Impure", price: "da 49,90 €", duration: "50 min", bewellyId: 541108 },
  { category: "Viso", name: "Formula 301 Antiage", price: "da 49,90 €", duration: "50 min", bewellyId: 540851 },
  { category: "Viso", name: "Hisiris Prodermis Viso Pelli Sensibili Couperose", price: "da 49,90 €", duration: "50 min", bewellyId: 541114 },
  { category: "Viso", name: "Hisiris Prorose Pelli Impure Acne", price: "da 49,90 €", duration: "50 min", bewellyId: 541115 },
  { category: "Viso", name: "Pulizia viso con ultrasuoni", price: "da 34,90 €", duration: "50 min", bewellyId: 541117 },
  { category: "Viso", name: "Pulizia viso generale", price: "da 29,90 €", duration: "50 min", bewellyId: 541116 },
  { category: "Viso", name: "Radiofrequenza viso", price: "da 29,90 €", duration: "45 min", bewellyId: 541119 },
  { category: "Viso", name: "Trattamento Viso Vitamina C", price: "da 49,90 €", duration: "50 min", bewellyId: 652358 },
  { category: "T.Modella", name: "Exentia Viso", price: "da 39,90 €", duration: "30 min", bewellyId: 597987 },
  { category: "Combo", name: "Percorso Anticellulite 80 Minuti", price: "da 49,80 €", duration: "", bewellyId: 798106 },
  { category: "Combo", name: "laser topper body", price: "da 124,70 €", duration: "", bewellyId: 786888 },
  { category: "Massaggio", name: "Pressoterapia Con Bendaggio", price: "da 34,90 €", duration: "45 min", bewellyId: 541128 },
  { category: "Massaggio", name: "Pressoterapia Infrarossi", price: "da 9,90 €", duration: "30 min", bewellyId: 541107 },
  { category: "Massaggio", name: "Pressoterapia vacum", price: "da 0,00 €", duration: "30 min", bewellyId: 787522 }
];

const navItems = [
  ["index.html","Home"],["chi-siamo.html","Chi siamo"],["listino.html","Listino"],["contatti.html","Contatti"],["legal.html","Privacy"]
];

const CONSENT_KEY = "epilfast_consent_v1";
const CONSENT_MAX_AGE = 180 * 24 * 60 * 60 * 1000;

function setElementInert(element, inert) {
  if (!element) return;
  element.inert = inert;
  if (inert) {
    element.setAttribute("inert", "");
    element.setAttribute("aria-hidden", "true");
  } else {
    element.removeAttribute("inert");
    element.removeAttribute("aria-hidden");
  }
}

function visibleFocusable(container) {
  return [...container.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')]
    .filter(element => element.getClientRects().length > 0 && getComputedStyle(element).visibility !== "hidden");
}

function currentPage() {
  const file = location.pathname.split("/").pop() || "index.html";
  return file === "" ? "index.html" : file;
}

function headerTemplate() {
  const current = currentPage();
  const links = navItems.map(([href,label]) => `<a href="${href}" ${current === href ? 'aria-current="page"' : ""}>${label}</a>`).join("");
  return `<a class="skip-link" href="#main">Vai al contenuto</a>
    <div class="topline"><div class="container topline__inner"><span>Centro di estetica avanzata · Caserta</span><a href="tel:+${BUSINESS.phone}">${BUSINESS.phoneDisplay}</a></div></div>
    <div class="site-header"><nav class="nav" aria-label="Navigazione principale">
      <a class="brand" href="index.html" aria-label="Epilfast Beauty, home"><img src="assets/epilfast-logo.webp" width="190" height="74" alt="Epilfast Beauty Caserta"></a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="nav-links" aria-label="Apri il menu">Menu</button>
      <div class="nav__links" id="nav-links">${links}<a class="btn btn--small" href="listino.html">Scegli e prenota</a></div>
    </nav></div>`;
}

function footerTemplate() {
  return `<footer class="site-footer"><div class="container">
    <div class="footer-grid">
      <div><img class="footer-brand" src="assets/epilfast-logo.webp" width="230" height="90" alt="Epilfast Beauty Caserta"><p>Estetica avanzata a Caserta. Una nuova esperienza digitale, costruita sui servizi reali del centro.</p></div>
      <div><h3>Esplora</h3><div class="footer-links"><a href="listino.html">Listino e prenotazioni</a><a href="chi-siamo.html">Chi siamo</a><a href="contatti.html">Contatti</a><a href="legal.html">Privacy e cookie</a></div></div>
      <div><h3>Contatti</h3><div class="footer-links"><a href="tel:+${BUSINESS.phone}">${BUSINESS.phoneDisplay}</a><a href="https://maps.google.com/?q=Via+Ferrarecce+189+Caserta" target="_blank" rel="noopener">${BUSINESS.address}</a><a href="${BUSINESS.instagram}" target="_blank" rel="noopener">Instagram</a><a href="legal.html#privacy">Privacy Policy</a><a href="legal.html#cookie">Cookie Policy</a><button class="footer-cookie-button" type="button" data-cookie-settings>Preferenze cookie</button></div></div>
    </div>
    <div class="footer-legal" aria-label="Dati legali dell'impresa"><strong>Francesco De Tito · impresa individuale</strong><span>P. IVA 04366440610 · C.F. DTTFNC69H30F839E · REA CE-333349</span><span>Sede legale: Via Ferrarecce 189, 81100 Caserta (CE)</span><a href="mailto:francesco.detito@legalmail.it">PEC: francesco.detito@legalmail.it</a></div>
    <div class="footer-bottom"><span>Sito ufficiale Epilfast Beauty Caserta</span><span>© ${new Date().getFullYear()} Epilfast Beauty Caserta</span><span class="coreone-credit">Creato per <a href="https://coreone.it/" target="_blank" rel="noopener">coreone.it</a></span></div>
  </div></footer>`;
}

function injectChrome() {
  const header = document.querySelector("#site-header");
  const footer = document.querySelector("#site-footer");
  if (header) header.innerHTML = headerTemplate();
  if (footer) footer.outerHTML = footerTemplate();
  const toggle = document.querySelector(".menu-toggle");
  const menuBackground = () => [document.querySelector("#main"), document.querySelector(".site-footer"), document.querySelector(".topline"), document.querySelector(".brand"), document.querySelector(".whatsapp-signature"), document.querySelector(".consent-banner")];
  const setMenu = open => {
    document.body.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Chiudi il menu" : "Apri il menu");
    toggle.textContent = open ? "Chiudi" : "Menu";
    menuBackground().forEach(element => setElementInert(element, open));
  };
  toggle?.addEventListener("click", () => setMenu(!document.body.classList.contains("menu-open")));
  document.querySelectorAll(".nav__links a").forEach(link => link.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", event => {
    if (!document.body.classList.contains("menu-open")) return;
    if (event.key === "Escape") {
      event.preventDefault();
      setMenu(false);
      toggle.focus();
      return;
    }
    if (event.key !== "Tab") return;
    const focusable = [toggle, ...visibleFocusable(document.querySelector(".nav__links"))];
    const first = focusable[0];
    const last = focusable.at(-1);
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
  window.addEventListener("resize", () => {
    if (innerWidth > 980 && document.body.classList.contains("menu-open")) setMenu(false);
  });
}

function whatsappUrl(message) {
  return `https://wa.me/${BUSINESS.phone}?text=${encodeURIComponent(message)}`;
}

function injectWhatsAppSignature() {
  if (document.querySelector(".whatsapp-signature")) return;
  const signature = document.createElement("a");
  signature.className = "whatsapp-signature";
  signature.href = whatsappUrl(BUSINESS.whatsappIntro);
  signature.target = "_blank";
  signature.rel = "noopener";
  signature.setAttribute("aria-label", "Parla con Epilfast Beauty su WhatsApp");
  signature.innerHTML = `<span class="whatsapp-signature__monogram" aria-hidden="true"></span>
    <span class="whatsapp-signature__copy"><small>Parla con noi</small><strong>WhatsApp</strong></span>`;
  document.body.append(signature);

  let pendingFrame = 0;
  let settleTimer = 0;
  const positionSignature = () => {
    signature.style.setProperty("--whatsapp-lift", "0px");
    const signatureRect = signature.getBoundingClientRect();
    const blockers = [];
    document.querySelectorAll(".cta-band, .site-footer, [data-cookie-banner], .cookie-banner, #cookie-banner").forEach(blocker => {
      if (blocker.hidden || getComputedStyle(blocker).display === "none") return;
      const blockerRect = blocker.getBoundingClientRect();
      const horizontalOverlap = signatureRect.left < blockerRect.right && signatureRect.right > blockerRect.left;
      if (horizontalOverlap) blockers.push(blockerRect);
    });
    let candidateBottom = signatureRect.bottom;
    for (let index = 0; index <= blockers.length; index += 1) {
      const candidateTop = candidateBottom - signatureRect.height;
      const collision = blockers.find(rect => candidateTop < rect.bottom + 14 && candidateBottom > rect.top - 14);
      if (!collision) break;
      candidateBottom = Math.min(candidateBottom, collision.top - 14);
    }
    const lift = Math.max(0, Math.ceil(signatureRect.bottom - candidateBottom));
    signature.style.setProperty("--whatsapp-lift", `${lift}px`);
  };
  const updatePosition = () => {
    cancelAnimationFrame(pendingFrame);
    clearTimeout(settleTimer);
    pendingFrame = requestAnimationFrame(positionSignature);
    settleTimer = setTimeout(positionSignature, 120);
  };

  window.addEventListener("scroll", updatePosition, { passive: true });
  window.addEventListener("resize", updatePosition);
  new MutationObserver(updatePosition).observe(document.body, { childList: true, subtree: true });
  updatePosition();
}

function renderMapPlaceholder(container) {
  container.innerHTML = `<div class="map-placeholder"><p class="eyebrow">Contenuto esterno facoltativo</p><h2>Mappa disattivata</h2><p>Google Maps viene caricato soltanto dopo il consenso ai contenuti funzionali.</p><div class="btn-row"><button class="btn" type="button" data-cookie-settings>Gestisci preferenze</button><a class="btn btn--outline" href="https://maps.google.com/?q=Via+Ferrarecce+189+Caserta" target="_blank" rel="noopener">Apri Google Maps</a></div></div>`;
}

function applyConsentPreferences(preferences) {
  document.documentElement.dataset.functionalConsent = String(Boolean(preferences.functional));
  document.querySelectorAll('[data-consent-service="google-maps"]').forEach(container => {
    if (preferences.functional) {
      if (container.querySelector("iframe")) return;
      const iframe = document.createElement("iframe");
      iframe.className = "map-frame";
      iframe.title = container.dataset.mapTitle || "Mappa Epilfast Beauty Caserta";
      iframe.loading = "lazy";
      iframe.referrerPolicy = "no-referrer-when-downgrade";
      iframe.src = container.dataset.mapSrc;
      container.replaceChildren(iframe);
    } else if (container.querySelector("iframe") || !container.querySelector(".map-placeholder")) {
      renderMapPlaceholder(container);
    }
  });
}

function readConsentPreferences() {
  try {
    const stored = JSON.parse(localStorage.getItem(CONSENT_KEY));
    if (!stored || stored.version !== 1 || Number(stored.expiresAt) <= Date.now()) {
      localStorage.removeItem(CONSENT_KEY);
      return null;
    }
    return { necessary: true, functional: Boolean(stored.functional) };
  } catch {
    return null;
  }
}

function setupConsentManager() {
  if (!document.querySelector(".consent-banner")) {
    document.body.insertAdjacentHTML("beforeend", `<section class="consent-banner" data-cookie-banner role="dialog" aria-modal="false" aria-labelledby="consent-title" hidden>
      <div class="consent-banner__content"><div><p class="eyebrow">Privacy e preferenze</p><h2 id="consent-title">Scegli cosa attivare</h2><p>Usiamo solo la memoria tecnica della tua scelta. Google Maps resta disattivato finché non accetti i contenuti funzionali. Nessun analytics o profilazione.</p><a href="legal.html#cookie">Leggi la Cookie Policy</a></div>
      <div class="consent-banner__actions"><button class="btn btn--outline" type="button" data-consent-reject>Rifiuta</button><button class="btn btn--outline" type="button" data-consent-manage aria-expanded="false">Gestisci</button><button class="btn" type="button" data-consent-accept>Accetta</button></div>
      <div class="consent-preferences" data-consent-preferences hidden><div class="consent-choice"><span><strong>Necessari</strong><small>Memorizzano la scelta per 180 giorni.</small></span><input type="checkbox" checked disabled aria-label="Strumenti necessari sempre attivi"></div><label class="consent-choice"><span><strong>Funzionali</strong><small>Caricano Google Maps nella pagina Contatti.</small></span><input type="checkbox" data-consent-functional></label><button class="btn" type="button" data-consent-save>Salva preferenze</button></div></div>
    </section>`);
  }

  const banner = document.querySelector(".consent-banner");
  const preferencesPanel = banner.querySelector("[data-consent-preferences]");
  const functionalInput = banner.querySelector("[data-consent-functional]");
  const manageButton = banner.querySelector("[data-consent-manage]");
  const save = functional => {
    const now = Date.now();
    const preferences = { version: 1, necessary: true, functional: Boolean(functional), updatedAt: new Date(now).toISOString(), expiresAt: now + CONSENT_MAX_AGE };
    try { localStorage.setItem(CONSENT_KEY, JSON.stringify(preferences)); } catch { /* Il sito resta utilizzabile anche se lo storage è bloccato. */ }
    applyConsentPreferences(preferences);
    banner.hidden = true;
    preferencesPanel.hidden = true;
    manageButton.setAttribute("aria-expanded", "false");
  };
  const openSettings = () => {
    const stored = readConsentPreferences();
    functionalInput.checked = Boolean(stored?.functional);
    banner.hidden = false;
    preferencesPanel.hidden = false;
    manageButton.setAttribute("aria-expanded", "true");
    banner.querySelector("#consent-title").focus({ preventScroll: true });
  };

  banner.querySelector("#consent-title").setAttribute("tabindex", "-1");
  banner.querySelector("[data-consent-reject]").addEventListener("click", () => save(false));
  banner.querySelector("[data-consent-accept]").addEventListener("click", () => save(true));
  banner.querySelector("[data-consent-save]").addEventListener("click", () => save(functionalInput.checked));
  manageButton.addEventListener("click", () => {
    preferencesPanel.hidden = !preferencesPanel.hidden;
    manageButton.setAttribute("aria-expanded", String(!preferencesPanel.hidden));
    if (!preferencesPanel.hidden) functionalInput.focus();
  });
  document.addEventListener("click", event => {
    const settingsButton = event.target.closest("[data-cookie-settings]");
    if (!settingsButton || banner.contains(settingsButton)) return;
    event.preventDefault();
    openSettings();
  });

  const stored = readConsentPreferences();
  applyConsentPreferences(stored || { necessary: true, functional: false });
  banner.hidden = Boolean(stored);
}

function setupPriceList() {
  const grid = document.querySelector("#price-grid");
  if (!grid) return;
  const search = document.querySelector("#service-search");
  const meta = document.querySelector("#results-meta");
  const chips = [...document.querySelectorAll("[data-category]")];
  const requested = new URLSearchParams(location.search).get("categoria");
  let active = SERVICES.some(item => item.category === requested) ? requested : "Tutti";
  chips.forEach(chip => chip.setAttribute("aria-pressed", String(chip.dataset.category === active)));

  function render() {
    const term = search.value.trim().toLocaleLowerCase("it");
    const filtered = SERVICES.filter(item => (active === "Tutti" || item.category === active) && (!term || `${item.name} ${item.category}`.toLocaleLowerCase("it").includes(term)));
    meta.textContent = `${filtered.length} trattament${filtered.length === 1 ? "o visibile" : "i visibili"}`;
    grid.innerHTML = filtered.length ? filtered.map(item => `<article class="price-card">
      <div><div class="price-card__category">${item.category}</div><h3>${item.name}</h3>${item.duration ? `<p class="price-card__duration">Durata: ${item.duration}</p>` : ""}</div>
      <div class="price-card__bottom"><span class="price-card__price">${item.price}</span><div class="price-card__actions"><button class="btn btn--outline btn--small" type="button" data-whatsapp-service="${item.bewellyId}" aria-label="Chiedi informazioni su ${item.name} via WhatsApp">WhatsApp</button><button class="btn btn--small" type="button" data-book="${item.bewellyId}" aria-label="Prenota ${item.name} su Bewelly">Prenota</button></div></div>
    </article>`).join("") : `<div class="empty-state"><h3>Nessun trattamento trovato</h3><p>Prova un'altra parola o torna a tutte le categorie.</p></div>`;
  }
  search.addEventListener("input", render);
  chips.forEach(chip => chip.addEventListener("click", () => {
    active = chip.dataset.category;
    chips.forEach(c => c.setAttribute("aria-pressed", String(c === chip)));
    render();
  }));
  grid.addEventListener("click", event => {
    const bookingButton = event.target.closest("[data-book]");
    if (bookingButton) {
      const service = SERVICES.find(item => item.bewellyId === Number(bookingButton.dataset.book));
      openBooking(service, bookingButton);
      return;
    }
    const whatsappButton = event.target.closest("[data-whatsapp-service]");
    if (!whatsappButton) return;
    const service = SERVICES.find(item => item.bewellyId === Number(whatsappButton.dataset.whatsappService));
    if (!service) return;
    const details = [service.price, service.duration].filter(Boolean).join(" · ");
    const text = `Ciao Epilfast Beauty, vorrei informazioni sul trattamento “${service.name}” (${details}).`;
    window.open(whatsappUrl(text), "_blank", "noopener");
  });
  render();
}

function openBooking(service, trigger) {
  if (!service?.bewellyId) {
    window.open(BUSINESS.bookingUrl, "_blank", "noopener");
    return;
  }

  const popupName = "epilfast-bewelly-booking";
  const popup = window.open("about:blank", popupName);
  if (!popup) {
    window.open(BUSINESS.bookingUrl, "_blank", "noopener");
    return;
  }

  const originalLabel = trigger?.textContent;
  if (trigger) {
    trigger.disabled = true;
    trigger.setAttribute("aria-busy", "true");
    trigger.textContent = "Apro Bewelly…";
  }

  try {
    popup.document.title = "Prenotazione Epilfast su Bewelly";
    popup.document.body.innerHTML = "<p style=\"font:600 16px system-ui;padding:32px;color:#244f50\">Sto aggiungendo il trattamento scelto al carrello Bewelly…</p>";
  } catch {}

  const form = document.createElement("form");
  form.method = "POST";
  form.action = BUSINESS.bookingAddUrl;
  form.target = popupName;
  form.hidden = true;
  const values = {
    service_id: String(service.bewellyId),
    action: "add_service",
    division_id: BUSINESS.bewellyDivisionId
  };
  Object.entries(values).forEach(([name, value]) => {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = name;
    input.value = value;
    form.append(input);
  });
  document.body.append(form);
  form.submit();
  form.remove();

  window.setTimeout(() => {
    try { popup.location.replace(BUSINESS.bookingCartUrl); }
    catch { window.open(BUSINESS.bookingCartUrl, "_blank", "noopener"); }
    if (trigger) {
      trigger.disabled = false;
      trigger.removeAttribute("aria-busy");
      trigger.textContent = originalLabel;
    }
  }, 3000);
}

document.addEventListener("DOMContentLoaded", () => {
  injectChrome();
  injectWhatsAppSignature();
  setupConsentManager();
  setupPriceList();
});
