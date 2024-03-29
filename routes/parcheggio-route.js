const router = require('express').Router();
const parcheggioService = require('../services/parcheggio-service');
router.get('/lista',(req,res)=>{
    //Servizio parcheggio per prendere i posti auto
    parcheggioService.getListaParcheggio().then(lista=>res.json(lista));
});

router.post('/nuovo',(req,res)=>{
    const parcheggio = req.body;
    //Servizio di insert di un nuovo parcheggio
    parcheggioService.insertParcheggio(parcheggio).then(result => res.json(result));
});

router.get('/delete',(req,res)=>{
    //Servizio di select per la lista di macchine
    parcheggioService().deleteTable().then(()=> res.json('ok'));
});

module.exports = router;