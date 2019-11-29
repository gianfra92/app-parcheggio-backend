const router = require('express').Router();
const ticketService = require('../services/ticket-service');

router.get('/lista',(req,res)=>{
    //Servizio per prendere la lista dei tickets salvati
    ticketService.getListaTicket().then(result=> res.json(result));
});

router.get('/',(req,res)=>{
    const id = req.query.id;
    //Servizio per prendere un ticket dato il suo id
    ticketService.getTicketbyId(id).then(lista=> res.json(lista));
});

router.post('/nuovo',(req,res)=>{
    const ticket = req.body;
    //Servizio di inserimento di un nuovo ticket
    ticketService.insertTicket(ticket).then(result=> res.json(result));
});

router.get('/emissione',(req,res)=>{
    const targa = req.query.targa;
    const nomePosto = req.query.nomePosto;
    //Servizio che ritorna una join tra tickets macchine postoAuto dati targa e nomePosto
    ticketService.getTicketsJoinMacchine(targa,nomePosto).then(result=> res.json(result));
});

router.post('/chiusura',(req,res)=>{
    const id = req.body.id;
    const oraUscita = req.body.oraUscita;
    //Servizio di chiusura di un ticket con l'aggiornamento del campo ora di uscita
    ticketService.updateTicket(id,oraUscita).then(result => res.json(result));
});

router.get('/delete',(req,res)=>{
    //Servizio di select per la lista di macchine
    ticketService().deleteTable().then(()=> res.json('ok'));
});

module.exports = router;