# Epilfast Beauty — sorgente del sito

Sorgente multipagina del restyling Epilfast Beauty Caserta, pubblicato su `epilfastbeauty.it` tramite il progetto Sites dedicato.

Cliente, impresa individuale e titolare del trattamento associato: **Francesco De Tito**. I dati fiscali presenti nel pacchetto provengono dal record CRM indicato per il cliente e devono restare soggetti alla conferma amministrativa del titolare.

## Avvio

Aprire la cartella con un server statico locale. Esempio, se Node è disponibile:

```powershell
npx --yes serve . -l 4175
```

Quindi visitare `http://127.0.0.1:4175`.

## Pagine e funzioni

- Home con nuova direzione visiva coerente con logo e palette Epilfast.
- Chi siamo/staff predisposto senza inventare identità.
- Listino con tutti i 116 trattamenti e pacchetti pubblicati da Bewelly il 24 novembre 2026, comprese le voci dietro “Mostra tutti”, con ricerca e filtri per categoria.
- Due azioni per ogni trattamento: richiesta WhatsApp precompilata oppure prenotazione con servizio preselezionato nel carrello Bewelly ufficiale.
- Pagina pacchetti allineata alle voci Combo realmente presenti su Bewelly, senza riattivare offerte scadute.
- VIP Card concettuale, separata da credito, punti e gift card.
- Shop dimostrativo bloccato finché mancano catalogo e condizioni reali.
- Contatti con mappa, WhatsApp, listino guidato, Bewelly e Instagram.
- Widget WhatsApp brandizzato presente su tutte le pagine: logo Epilfast reale, testo desktop “Parla con noi / WhatsApp”, solo logo su mobile e messaggio iniziale neutro. Il clic apre una bozza verso il numero verificato 351 995 4908 e non invia nulla automaticamente.
- Footer e pagina legale con dati verificati: P. IVA 04366440610, C.F. DTTFNC69H30F839E, REA CE-333349, sede legale e PEC; i recapiti commerciali restano separati.

## Fonti

Trattamenti, prezzi, durate e identificativi di prenotazione derivano dal catalogo pubblico Bewelly del centro (`division_id` 4290), consultato il 24 novembre 2026. L'importatore include anche le schede inizialmente compresse da Bewelly e verifica conteggio minimo, categorie estese e unicità degli identificativi. La direzione progettuale riprende la completezza funzionale raggiunta nel progetto Raffaella Cerasuolo senza copiarne brand, colori o contenuti.

- Associazione cliente/titolare: comunicazione diretta dell'utente del 23 novembre 2026.
- Fonte per P. IVA e dati fiscali: record CRM autorizzato indicato dall'utente il 23 novembre 2026; conferma amministrativa finale ancora prudente.

## Assetto privacy iniziale implementato

- Privacy Policy specifica con titolare, finalità, basi giuridiche, dati, destinatari, trasferimenti, conservazione, diritti, Garante, minori, sicurezza e contatti.
- Cookie Policy con inventario delle tecnologie effettive, data di aggiornamento e informative dei fornitori.
- CMP accessibile con Rifiuta, Accetta, Gestisci e Salva preferenze; opzioni funzionali disattivate per default.
- Scelta memorizzata nel solo `localStorage` tecnico `epilfast_consent_v1` per 180 giorni.
- Google Maps bloccata fino al consenso funzionale; WhatsApp e Instagram restano link esterni. Bewelly viene contattato soltanto dopo il clic esplicito su “Prenota” per preselezionare il servizio.
- Nessun analytics, pixel pubblicitario o profilazione nell'assetto iniziale.

Resta prudente una revisione periodica del titolare/professionista privacy e l'aggiornamento delle policy se cambiano hosting, fornitori, conservazione o flussi. Termini prenotazioni, condizioni promo e l'eventuale disciplina e-commerce restano separati.

## Confini

- Nessun pagamento o ordine reale.
- Nessun dato staff inventato.
- Il widget WhatsApp si sposta quando CTA, footer o un eventuale banner cookie entrano nella sua area, ha target mobile `56 × 56 CSS px`, nome accessibile ed è nascosto in stampa.
- Il catalogo è una fotografia verificata il 24 novembre 2026. Per riallinearlo eseguire `npm run sync:bewelly`, poi `npm run check` e `npm run build`; la pubblicazione resta un passaggio separato.
- Il livello natalizio è attivo dal 23 novembre 2026 fino al 6 gennaio 2027 incluso e viene rimosso automaticamente dal 7 gennaio 2027, senza cookie o storage aggiuntivo.
- I dati fiscali presenti derivano dal record CRM autorizzato; resta opportuna la conferma amministrativa finale del titolare. Policy e inventario vanno riesaminati se cambia l'assetto tecnico.

## Prenotazione Bewelly

Il pulsante “Prenota” apre un ponte di caricamento Epilfast, invia a Bewelly soltanto `service_id`, `action=add_service` e `division_id=4290` in una scheda rimasta in secondo piano, quindi apre il carrello ufficiale nella scheda visibile. La pagina Epilfast originale viene ripristinata automaticamente: la risposta tecnica JSON di Bewelly non viene più mostrata al visitatore. Nome, recapiti, disponibilità e conferma vengono gestiti direttamente su Bewelly. La CSP autorizza esclusivamente il form verso `https://www.bewelly.it` e non abilita script o iframe Bewelly nel sito.
