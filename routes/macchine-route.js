const router = require('express').Router();
const macchinaService = require('../services/macchina-service');

router.get('/lista',(req,res)=>{
    //Servizio di select per la lista di macchine
    macchinaService.getListaMacchine().then(lista=> res.json(lista));
});

router.get('/',(req,res)=>{
    const id = req.query.id;
    macchinaService.getMacchina(id).then(macchina => res.json(macchina));
    //Servizio per la select di una macchina dal suo id
});

router.post('/nuovo',(req,res)=>{
    const macchina = req.body;
    //Servizio di insert di una nuova macchina
    macchinaService.insertMacchina(macchina).then((result)=>res.json(result));
});

module.exports = router;