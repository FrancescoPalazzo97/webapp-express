# Setup Web App Express

Ciao ragazzi! È ora di mettere alla prova le vostre conoscenze iniziando a costruire la vostra prima app completa! Ecco i primi step per l'esercizio "Setup Web App Express".

## Repository

Il repository per questo esercizio è: [webapp-express](webapp-express)

## Obiettivi dell'Esercizio

1.  **Creazione Database:** Utilizzando il file allegato (si assume sia fornito separatamente), creare un database con MySQL Workbench.
2.  **Nuova Applicazione Express:** Creare una nuova applicazione Express.
3.  **Connessione al Database:** Collegare l'applicazione Express al database appena creato e verificare che la connessione funzioni correttamente.
4.  **Rotta `index` per Film:** Preparare una rotta `/films` (o simile) per ottenere la lista di tutti i film presenti nel database.
5.  **Rotta `show` per Dettagli Film:** Preparare una rotta `/films/:id` (o simile) per ottenere i dettagli di un singolo film e le sue recensioni associate.

## Numero Minimo di Push

Da oggi non verrà più comunicato un numero minimo di push, poiché l'esercizio si estenderà su più giorni sulla stessa repository. L'importante è committare regolarmente i progressi.

## Bonus

Per coloro che desiderano approfondire e migliorare la propria applicazione, ecco alcuni bonus:

* **Immagini nel Progetto:** Inserire delle immagini nel progetto Express e, di conseguenza, nel database (es. copertine dei film).
* **Variabili d'Ambiente:** Inserire i dati di connessione al database come variabili d'ambiente per una maggiore sicurezza e flessibilità.
* **API in Controller:** Organizzare le vostre API all'interno di file controller dedicati.
* **Rotte in Router:** Organizzare le vostre rotte utilizzando un router Express.
* **Middleware per Rotte Inesistenti:** Inserire un middleware per la gestione delle rotte inesistenti (es. errore 404).
* **Middleware per Gestione Errori:** Inserire un middleware globale per la gestione degli errori dell'applicazione.
* **Middleware per Immagini:** Creare un middleware specifico per la gestione o il servizio delle immagini.
* **Media Recensioni:** Mostrare la media delle recensioni nel dettaglio del film (nella rotta `show`).

Buon Lavoro!

---

# 🚀 Setup Web App React

Ciao ragazzi, esercizio di oggi: **Setup Web App React**

**📁 Repo:** `webapp-react` e `webapp-express`

## 🎯 MILESTONE 1

- Configuriamo l'app di backend (repo `webapp-express`) a ricevere chiamate dalla nostra applicazione React, installando e impostando il middleware **CORS** (`npm i cors`)
- Installate **axios** nell'app frontend e provate quindi ad effettuare una chiamata Ajax dalla home del progetto React, per ottenere la lista dei libri

## 🏗️ MILESTONE 2

- In ultimo, effettuiamo una chiamata **AJAX** dalla pagina di dettaglio per ottenere il dettaglio di un singolo film, comprese le sue recensioni

## 🎁 Bonus

- Realizzare una componente **StarsRating** in cui mostrare il voto delle recensioni (magari anche il voto medio, chissà....)
- Curare l'aspetto estetico della vostra applicazione

---

**Buon Lavoro** 💪

---

# 🚀 Esercizio di oggi

Ciao ragazzi, esercizio di oggi:

**📁 Repo:** `webapp-react`

## 📝 Esercizio

Miglioriamo l'esperienza dell'utente inserendo:

## 🎯 MILESTONE 1 (BACKEND)

- Predisponiamo un'API per **salvare nel database** una nuova recensione legata ad un film
- Testiamola su **Postman** e verifichiamo che nel DB venga effettivamente inserita una nuova recensione

## 🏗️ MILESTONE 2 (FRONTEND)

- Creiamo un componente che contenga il **form per le recensioni**
- Inseriamo questo componente nella pagina di dettaglio del film
- All'invio del form, la nuova recensione viene salvata sul database e visualizzata nella pagina, in fondo alle altre

---

**Buon Lavoro e buon divertimento!** 🎉