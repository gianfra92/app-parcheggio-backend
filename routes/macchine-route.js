const router = require('express').Router();
const Macchina = require('../models/Macchina');

//dati mock
const macchina1 = new Macchina('DB888SV','Ford');
const macchina2 = new Macchina('DB888SV','Ford');
macchina1.id = 1;
macchina2.id = 2;
const macchinaList = [macchina1,macchina2];

router.get('/lista',(req,res)=>{
    //Servizio di select per la lista di macchine    
    res.json(macchinaList);
});

router.get('/',(req,res)=>{
    const id = req.query.id;
    let result = macchinaList.find(element => element.id == id);
    if (result)
        res.json(result);
    else
        res.status(400).json({error: "Nessun elemento trovato"});
    //Servizio per la select di una macchina dal suo id
});

router.post('/nuovo',(req,res)=>{
    //Servizio di insert di una nuova macchina
    res.send('Macchina inserita');
});

module.exports = router;