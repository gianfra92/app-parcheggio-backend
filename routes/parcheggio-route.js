const router = require('express').Router();
const Parcheggio = require('../models/Parcheggio');

const parcheggio1 = new Parcheggio('','','');
const parcheggio2 = new Parcheggio('','','');
const parcheggioLista = [parcheggio1,parcheggio2];

router.get('/lista',(req,res)=>{
    //Servizio parcheggio per prendere i posti auto
    res.json(parcheggioLista);
});

router.get('/',(req,res)=>{
    const id = req.query.id;
    //Servizio per la select di un parcheggio dal suo id
    res.send('GET ID PARCHEGGIO');
});

router.post('/nuovo',(req,res)=>{
    //Servizio di insert di un nuovo parcheggio
    res.send('POST NUOVO PARCHEGGIO');
});

module.exports = router;