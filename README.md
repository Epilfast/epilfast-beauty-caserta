# Epilfast Beauty — prototipo locale

Prototipo multipagina buildless del restyling Epilfast Beauty Caserta. Non è pubblicato e non modifica il sito live.

Cliente, impresa individuale e titolare del trattamento associato: **Francesco De Tito**. I dati fiscali riportati nel prototipo sono stati verificati nel CRM autorizzato e autorizzati per footer e policy.

## Avvio

Aprire la cartella con un server statico locale. Esempio, se Node è disponibile:

```powershell
npx --yes serve . -l 4175
```

Quindi visitare `http://127.0.0.1:4175`.

## Pagine e funzioni

- Home con nuova direzione visiva coerente con logo e palette Epilfast.
- Chi siamo/staff predisposto senza inventare identità.
- Listino con 79 voci, ricerca, filtri e richiesta appuntamento WhatsApp.
- Promo/pacchetti con contenuti da confermare e senza riattivare offerte scadute.
- VIP Card concettuale, separata da credito, punti e gift card.
- Shop dimostrativo bloccato finché mancano catalogo e condizioni reali.
- Contatti con mappa, WhatsApp, Bewelly e Instagram.
- Widget WhatsApp brandizzato presente su tutte le pagine: logo Epilfast reale, testo desktop “Parla con noi / WhatsApp”, solo logo su mobile e messaggio iniziale neutro. Il clic apre una bozza verso il numero verificato 351 995 4908 e non invia nulla automaticamente.
- Footer e pagina legale con dati verificati: P. IVA 04366440610, C.F. DTTFNC69H30F839E, REA CE-333349, sede legale e PEC; i recapiti commerciali restano separati.

## Fonti

Contenuti e prezzi derivano dal sito pubblico `epilfastbeauty.it` consultato il 23 novembre 2026. Il metodo funzionale deriva dal progetto Raffaella Cerasuolo, senza copiarne brand, colori o contenuti.

- Associazione cliente/titolare: comunicazione diretta dell'utente del 23 novembre 2026.
- Fonte per P. IVA e dati fiscali: CRM autorizzato; valori comunicati come verificati e autorizzati dall'utente il 23 novembre 2026.

## Assetto privacy iniziale implementato

- Privacy Policy specifica con titolare, finalità, basi giuridiche, dati, destinatari, trasferimenti, conservazione, diritti, Garante, minori, sicurezza e contatti.
- Cookie Policy con inventario delle tecnologie effettive, data di aggiornamento e informative dei fornitori.
- CMP accessibile con Rifiuta, Accetta, Gestisci e Salva preferenze; opzioni funzionali disattivate per default.
- Scelta memorizzata nel solo `localStorage` tecnico `epilfast_consent_v1` per 180 giorni.
- Google Maps bloccata fino al consenso funzionale; WhatsApp, Bewelly e Instagram restano semplici link esterni.
- Nessun analytics, pixel pubblicitario o profilazione nell'assetto iniziale.

Prima del go-live restano prudenti la revisione del titolare/professionista privacy e l'aggiornamento delle policy se cambiano hosting, fornitori, conservazione o flussi. Termini prenotazioni, condizioni promo e l'eventuale disciplina e-commerce restano separati.

## Confini

- Nessun deploy.
- Nessun pagamento o ordine reale.
- Nessun dato staff inventato.
- Il widget WhatsApp si sposta quando CTA, footer o un eventuale banner cookie entrano nella sua area, ha target mobile `56 × 56 CSS px`, nome accessibile ed è nascosto in stampa.
- Prezzi, promo e orari richiedono conferma prima del go-live. I dati fiscali presenti derivano dalla verifica CRM autorizzata; policy e inventario vanno riesaminati se l'assetto tecnico cambia.

## Target WordPress

Il pacchetto statico resta utile per approvazione e confronto visuale. Il target finale preparato è il tema nativo `epilfast-wordpress`, senza page builder: trattamenti, promo e staff sono CPT; recapiti, orari e dati legali sono impostazioni WordPress sanitizzate. L'hosting GoDaddy WordPress non risultava ancora attivo, quindi non sono stati eseguiti installazione o deploy.
