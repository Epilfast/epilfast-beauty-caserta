(() => {
  "use strict";

  const ROOT_CLASS = "epilfast-christmas";
  const CLOSED_CLASS = "epilfast-christmas-banner-closed";
  const BANNER_ID = "seasonal-christmas-banner";
  const START_AT = Date.parse("2026-11-23T00:00:00+01:00");
  const END_AT = Date.parse("2027-01-07T00:00:00+01:00");
  const MAX_TIMER_DELAY = 2147483647;

  const removeSeasonalLayer = () => {
    document.documentElement.classList.remove(ROOT_CLASS);
    document.documentElement.classList.remove(CLOSED_CLASS);
    document.getElementById(BANNER_ID)?.remove();
  };

  const isSeasonActive = (now = Date.now()) => now >= START_AT && now < END_AT;

  if (isSeasonActive()) {
    document.documentElement.classList.add(ROOT_CLASS);
  }

  const scheduleExpiry = () => {
    const remaining = END_AT - Date.now();

    if (remaining <= 0) {
      removeSeasonalLayer();
      return;
    }

    window.setTimeout(() => {
      if (isSeasonActive()) {
        scheduleExpiry();
      } else {
        removeSeasonalLayer();
      }
    }, Math.min(remaining, MAX_TIMER_DELAY));
  };

  const createBanner = () => {
    const banner = document.createElement("aside");
    banner.id = BANNER_ID;
    banner.className = "christmas-banner";
    banner.setAttribute("role", "region");
    banner.setAttribute("aria-labelledby", `${BANNER_ID}-message`);

    const inner = document.createElement("div");
    inner.className = "christmas-banner__inner";

    const mark = document.createElement("span");
    mark.className = "christmas-banner__mark";
    mark.setAttribute("aria-hidden", "true");
    mark.textContent = "✦";

    const message = document.createElement("p");
    message.id = `${BANNER_ID}-message`;
    message.className = "christmas-banner__message";

    const emphasis = document.createElement("strong");
    emphasis.textContent = "Le feste, con la cura di sempre. ";
    message.append(emphasis, "Scopri i trattamenti Epilfast e richiedi il tuo appuntamento.");

    const link = document.createElement("a");
    link.className = "christmas-banner__link";
    link.href = "listino.html";
    link.textContent = "Scopri il listino";

    const close = document.createElement("button");
    close.className = "christmas-banner__close";
    close.type = "button";
    close.setAttribute("aria-label", "Chiudi il messaggio delle feste");
    close.textContent = "×";
    close.addEventListener("click", () => {
      document.documentElement.classList.add(CLOSED_CLASS);
      banner.remove();
    }, { once: true });

    inner.append(mark, message, link, close);
    banner.append(inner);
    return banner;
  };

  const activateSeason = () => {
    if (!isSeasonActive()) {
      removeSeasonalLayer();
      return;
    }

    document.documentElement.classList.add(ROOT_CLASS);

    if (!document.getElementById(BANNER_ID)) {
      const banner = createBanner();
      const header = document.getElementById("site-header") || document.querySelector("header");

      if (header?.parentNode) {
        header.parentNode.insertBefore(banner, header);
      } else {
        document.body.prepend(banner);
      }
    }

    scheduleExpiry();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", activateSeason, { once: true });
  } else {
    activateSeason();
  }
})();
