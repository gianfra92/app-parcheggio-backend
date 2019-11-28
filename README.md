# app-parcheggio-backend
Backend per la gestione del parcheggio

## API

### Parcheggio
Servizio parcheggio per prendere i posti auto
GET /parcheggio/lista

Servizio di insert di un nuovo parcheggio
POST /parcheggio/nuovo

### Macchina
Servizio per la select di una macchina dal suo id
GET /macchina ?id   

Servizio di select per la lista di macchine
GET /macchina/lista

Servizio di insert di una nuova macchina
POST /macchina/nuovo    <--Macchina

### Persona
Servizio per prendere la lista delle persone
GET /persona/lista 

Servizio per la select di una persona dal suo id
GET /persona ?id 

Servizio per la innerJoin e ritorno delle persone e macchine
GET /persona/personeMacchine  ?targa

Servizio per insert di una nuova persona
POST /persona/nuovo     <-- Persona

### PostoAuto
Servizio per prendere la lista dei posti auto
GET /postoauto/lista

Servizio per la select di un posto auto dal suo id
GET /postoauto ?id

Servizio per prendere la lista dei posti liberi
GET /postoauto/listaLiberi

Servizio di inserimento di un nuovo posto auto
POST /postoauto/nuovo       <--postoauto

Servizio per aggiornare lo stato
POST /postoauto/aggiornaStato ?id ?isOccupato

### Ticket 
Servizio per prendere la lista dei tickets salvati
GET /ticket/lista

Servizio per prendere un ticket dato il suo id
GET /ticket ?id

Servizio di inserimento di un nuovo ticket
POST /ticket/nuovo           <--ticket

Servizio che ritorna una join tra tickets macchine postoAuto dati targa e nomePosto
GET /ticket/emissione ?targa ?nomePosto

Servizio di chiusura di un ticket con l'aggiornamento del campo ora di uscita
POST /ticket/chiusura       <--{id,oraUscita} 