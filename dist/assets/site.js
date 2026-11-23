const BUSINESS = {
  phoneDisplay: "351 995 4908",
  phone: "393519954908",
  address: "Via Ferrarecce 189, 81100 Caserta CE",
  bookingUrl: "https://www.bewelly.it/4290/",
  instagram: "https://www.instagram.com/epilfastbeautycaserta/",
  whatsappIntro: "Ciao Epilfast Beauty, vorrei ricevere informazioni."
};

const SERVICES = [
  ["Laser viso","Epilazione Intercigliare","9,90"],["Laser viso","Epilazione Naso","9,90"],["Laser viso","Epilazione Baffetto","9,90"],["Laser viso","Epilazione Basette","9,90"],["Laser viso","Epilazione Zigomi","9,90"],["Laser viso","Epilazione Orecchie","9,90"],["Laser viso","Epilazione Mento","9,90"],["Laser viso","Epilazione Sottomento","14,90"],["Laser viso","Epilazione Nuca","9,90"],["Laser viso","Epilazione Viso Completo","29,90"],
  ["Laser corpo","Epilazione Spalle","19,90"],["Laser corpo","Epilazione 1/2 Braccia","29,90"],["Laser corpo","Epilazione Braccia Complete","39,90"],["Laser corpo","Epilazione Ascelle","19,90"],["Laser corpo","Epilazione Petto","29,90"],["Laser corpo","Epilazione Addome","29,90"],["Laser corpo","Epilazione Schiena Completa","39,90"],["Laser corpo","Epilazione Lombare","19,90"],["Laser corpo","Epilazione Mani","9,90"],["Laser corpo","Epilazione Gambe Complete","39,90"],["Laser corpo","Epilazione Glutei Completi","19,90"],["Laser corpo","Epilazione Inguine Totale","29,90"],["Laser corpo","Epilazione Intergluteo","9,90"],["Laser corpo","Epilazione Linea Alba","9,90"],["Laser corpo","Epilazione Pube","19,90"],["Laser corpo","Epilazione Piedi","9,90"],["Laser corpo","Epilazione 1/2 Gambe","29,90"],["Laser corpo","Epilazione 1/2 Gluteo","14,90"],
  ["Pacchetti laser","Total Body · 90 minuti","99,90"],["Pacchetti laser","Viso Completo + Ascelle","34,90"],["Pacchetti laser","Petto + Addome","39,90"],["Pacchetti laser","Braccia Complete + Ascelle","44,90"],["Pacchetti laser","Gambe Complete + Ascelle","44,90"],["Pacchetti laser","Gambe Complete + Braccia Complete","64,90"],["Pacchetti laser","Gambe Complete + Glutei","39,90"],["Pacchetti laser","Gambe Complete + Inguine Completo","44,90"],["Pacchetti laser","Gambe Complete + Inguine Completo + Ascelle","54,90"],["Pacchetti laser","Gambe Complete + Viso Completo","49,90"],["Pacchetti laser","Inguine Completo + Ascelle","34,90"],["Pacchetti laser","Inguine Completo + Linea Alba","34,90"],["Pacchetti laser","Inguine Completo + Viso Completo","34,90"],
  ["Viso","Scrub Viso · 30 minuti","19,90"],["Viso","Radiofrequenza Viso · 30 minuti","29,90"],["Viso","Exentia Viso · 30 minuti","39,90"],["Viso","Formula 301 Antiage · 50 minuti","49,90"],["Viso","Formula 301 Acne e Pelli Impure · 50 minuti","49,90"],["Viso","Hisiris Prodermis Pelli Sensibili · 50 minuti","49,90"],["Viso","Hisiris Prorose Pelli Impure · 50 minuti","49,90"],["Viso","Pulizia del Viso Generale · 50 minuti","29,90"],["Viso","Pulizia Viso con Ultrasuoni · 50 minuti","34,90"],
  ["Corpo","Massaggio Decontratturante Schiena · 30 minuti","24,90"],["Corpo","Massaggio Drenante · 30 minuti","24,90"],["Corpo","Massaggio Decontratturante Schiena · 50 minuti","39,90"],["Corpo","Massaggio Drenante · 45 minuti","39,90"],["Corpo","Massaggio Benessere · 50 minuti","39,90"],["Corpo","Massaggio Bamboo · 50 minuti","39,90"],["Corpo","Pressoterapia con Bendaggio · 45 minuti","34,90"],["Corpo","Pressoterapia con Infrarossi · 30 minuti","9,90"],["Corpo","Scrub Corpo · 30 minuti","19,90"],["Corpo","C30 Trattamento anticellulite · 30 minuti","34,90"],["Corpo","Bendaggi Gambe · 40 minuti","34,90"],["Corpo","Trattamento Drenante Drain 02 · 45 minuti","39,90"],["Corpo","Bendaggi Corpo · 50 minuti","49,90"],["Corpo","Radiofrequenza Corpo · 60 minuti","54,90"],["Corpo","Exentia Corpo · 60 minuti","59,90"],["Corpo","Criolipolisi · 75 minuti","149,90"],
  ["Cerette","Ceretta Braccia Parziale · Donna","9,90"],["Cerette","Ceretta Inguine Parziale · Donna","7,00"],["Cerette","Ceretta Inguine Totale · Donna","9,00"],["Cerette","Ceretta Schiena · Donna","14,90"],["Cerette","Ceretta Braccia Complete · Donna","12,00"],["Cerette","Ceretta Gamba Intera · Donna","14,90"],["Cerette","Mezza Gamba + Inguine · Donna","19,90"],["Cerette","Gambe + Inguine + Ascelle · Donna","34,90"],["Cerette","Gamba Intera + Inguine Parziale · Donna","24,90"],["Cerette","Ceretta Sopracciglia · Donna","3,00"],["Cerette","Ceretta Ascelle · Donna","6,00"],["Cerette","Ceretta Labbro Superiore · Donna","3,00"],["Cerette","Gamba Intera + Inguine Totale · Donna","29,90"]
].map(([category,name,price], index) => ({ id: index + 1, category, name, price: `€ ${price}` }));

const navItems = [
  ["index.html","Home"],["chi-siamo.html","Chi siamo"],["listino.html","Listino"],["contatti.html","Contatti"],["legal.html","Privacy"]
];

let lastFocusedBeforeDialog = null;
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
      <div class="nav__links" id="nav-links">${links}<a class="btn btn--small" href="${BUSINESS.bookingUrl}" target="_blank" rel="noopener">Prenota online</a></div>
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
    <div class="footer-bottom"><span>Sito ufficiale Epilfast Beauty Caserta</span><span>© ${new Date().getFullYear()} Epilfast Beauty Caserta</span><span>Creato per <a href="https://coreone.it/" target="_blank" rel="noopener">coreone.it</a></span></div>
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
    meta.textContent = `${filtered.length} trattament${filtered.length === 1 ? "o" : "i"} visibili`;
    grid.innerHTML = filtered.length ? filtered.map(item => `<article class="price-card">
      <div><div class="price-card__category">${item.category}</div><h3>${item.name}</h3></div>
      <div class="price-card__bottom"><span class="price-card__price">${item.price}</span><button class="btn btn--outline btn--small" type="button" data-book="${item.id}">Richiedi</button></div>
    </article>`).join("") : `<div class="empty-state"><h3>Nessun trattamento trovato</h3><p>Prova un'altra parola o torna a tutte le categorie.</p></div>`;
  }
  search.addEventListener("input", render);
  chips.forEach(chip => chip.addEventListener("click", () => {
    active = chip.dataset.category;
    chips.forEach(c => c.setAttribute("aria-pressed", String(c === chip)));
    render();
  }));
  grid.addEventListener("click", event => {
    const button = event.target.closest("[data-book]");
    if (!button) return;
    const service = SERVICES.find(item => item.id === Number(button.dataset.book));
    openBooking(service?.name || "Trattamento", button);
  });
  render();
}

function setDialogBackgroundInert(inert) {
  [document.querySelector("#site-header"), document.querySelector("#main"), document.querySelector(".site-footer"), document.querySelector(".whatsapp-signature"), document.querySelector(".consent-banner")]
    .forEach(element => setElementInert(element, inert));
}

function openBooking(service = "Trattamento da scegliere", trigger = document.activeElement) {
  const modal = document.querySelector("#booking-modal");
  if (!modal) return;
  lastFocusedBeforeDialog = trigger instanceof HTMLElement ? trigger : document.activeElement;
  setDialogBackgroundInert(true);
  modal.setAttribute("open", "");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  const select = modal.querySelector("#booking-service");
  select.innerHTML = SERVICES.map(item => `<option value="${item.name}" ${item.name === service ? "selected" : ""}>${item.name}</option>`).join("");
  modal.querySelector("input").focus();
}

function closeBooking() {
  const modal = document.querySelector("#booking-modal");
  if (!modal) return;
  setDialogBackgroundInert(false);
  if (lastFocusedBeforeDialog?.isConnected) lastFocusedBeforeDialog.focus();
  lastFocusedBeforeDialog = null;
  modal.removeAttribute("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function setupBooking() {
  const modal = document.querySelector("#booking-modal");
  if (!modal) return;
  document.querySelectorAll("[data-open-booking]").forEach(button => button.addEventListener("click", () => openBooking(button.dataset.service || undefined, button)));
  modal.querySelector("[data-close]").addEventListener("click", closeBooking);
  modal.addEventListener("click", event => { if (event.target === modal) closeBooking(); });
  document.addEventListener("keydown", event => {
    if (!modal.hasAttribute("open")) return;
    if (event.key === "Escape") {
      event.preventDefault();
      closeBooking();
      return;
    }
    if (event.key !== "Tab") return;
    const focusable = visibleFocusable(modal);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable.at(-1);
    if (!modal.contains(document.activeElement)) {
      event.preventDefault();
      first.focus();
    } else if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
  const form = modal.querySelector("form");
  const clearInvalid = field => {
    if (!field) return;
    const valid = field.type === "checkbox" ? field.checked : Boolean(String(field.value || "").trim());
    if (valid) {
      field.removeAttribute("aria-invalid");
      field.removeAttribute("aria-describedby");
    }
  };
  form.addEventListener("input", event => clearInvalid(event.target));
  form.addEventListener("change", event => clearInvalid(event.target));
  form.addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const required = ["name","phone","service","date"];
    const fields = required.map(key => event.currentTarget.elements.namedItem(key));
    fields.push(event.currentTarget.elements.namedItem("consent"));
    const invalidFields = fields.filter(field => field && (field.type === "checkbox" ? !field.checked : !String(field.value || "").trim()));
    const message = modal.querySelector(".form-message");
    fields.forEach(field => {
      const invalid = invalidFields.includes(field);
      if (invalid) {
        field.setAttribute("aria-invalid", "true");
        field.setAttribute("aria-describedby", "booking-errors");
      } else {
        field.removeAttribute("aria-invalid");
        field.removeAttribute("aria-describedby");
      }
    });
    if (invalidFields.length) {
      message.textContent = "Completa i campi obbligatori e accetta il contatto su WhatsApp.";
      invalidFields[0].focus();
      return;
    }
    const text = `Ciao Epilfast Beauty, vorrei richiedere un appuntamento.\n\nNome: ${data.get("name")}\nTelefono: ${data.get("phone")}\nTrattamento: ${data.get("service")}\nData/fascia preferita: ${data.get("date")}\nNote: ${data.get("notes") || "Nessuna"}\n\nAttendo conferma dal centro.`;
    window.open(whatsappUrl(text), "_blank", "noopener");
    message.textContent = "Si è aperta la richiesta WhatsApp. L'appuntamento sarà valido solo dopo conferma del centro.";
    message.style.color = "#245b43";
  });
}

function bookingModalTemplate() {
  const target = document.querySelector("#booking-modal");
  if (!target) return;
  target.innerHTML = `<div class="modal__panel" role="dialog" aria-modal="true" aria-labelledby="booking-title">
    <div class="modal__head"><div><p class="eyebrow">Richiesta appuntamento</p><h2 id="booking-title">Scegli quando sentirci</h2></div><button class="modal__close" type="button" data-close aria-label="Chiudi">×</button></div>
    <p class="muted">La richiesta apre WhatsApp. La data è confermata soltanto dopo la risposta del centro.</p>
    <form class="form-grid" novalidate>
      <div class="field"><label for="booking-name">Nome e cognome *</label><input id="booking-name" name="name" autocomplete="name" required></div>
      <div class="field"><label for="booking-phone">Telefono *</label><input id="booking-phone" name="phone" inputmode="tel" autocomplete="tel" required></div>
      <div class="field field--full"><label for="booking-service">Trattamento *</label><select id="booking-service" name="service" required></select></div>
      <div class="field field--full"><label for="booking-date">Data o fascia preferita *</label><input id="booking-date" name="date" placeholder="Es. martedì mattina oppure giovedì dopo le 16" required></div>
      <div class="field field--full"><label for="booking-notes">Note</label><textarea id="booking-notes" name="notes" placeholder="Aggiungi una seconda preferenza o una domanda"></textarea></div>
      <label class="consent" for="booking-consent"><input id="booking-consent" type="checkbox" name="consent" value="yes" required><span>Autorizzo l'apertura di WhatsApp con i dati inseriti per essere ricontattato/a dal centro.</span></label>
      <div class="field--full"><button class="btn" type="submit">Prepara richiesta WhatsApp</button><p id="booking-errors" class="form-message" aria-live="polite"></p></div>
    </form>
  </div>`;
}

document.addEventListener("DOMContentLoaded", () => {
  injectChrome();
  injectWhatsAppSignature();
  setupConsentManager();
  bookingModalTemplate();
  setupBooking();
  setupPriceList();
});
