const router = require('express').Router();

router.get('/lista',(req,res)=>{
    //Servizio per prendere la lista dei tickets salvati
});

router.get('/',(req,res)=>{
    const id = req.query.id;
    //Servizio per prendere un ticket dato il suo id
});

router.post('/nuovo',(req,res)=>{
    const ticket = req.body;
    //Servizio di inserimento di un nuovo ticket
});

router.get('/emissione',(req,res)=>{
    const targa = req.query.targa;
    const nomePosto = req.query.nomePosto;
    //Servizio che ritorna una join tra tickets macchine postoAuto dati targa e nomePosto
});

router.post('/chiusura',(req,res)=>{
    const oraUscita = req.body.oraUscita;
    //Servizio di chiusura di un ticket con l'aggiornamento del campo ora di uscita
});

module.exports = router;