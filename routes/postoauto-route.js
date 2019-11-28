const router = require('express').Router();
const postoAutoService = require('../services/postoauto-service');

router.get('/lista',(req,res)=>{
    //Servizio per prendere la lista dei posti auto
    postoAutoService.getListaPostiAuto().then(lista=>res.json(lista));
});

router.get('/',(req,res)=>{
    const id = req.query.id;
    //Servizio per la select di un posto auto dal suo id
    postoAutoService.getPostoAutobyId(id).then(result=> res.json(result));
});

router.get('/listaLiberi', (req,res)=>{
    //Servizio per prendere la lista dei posti liberi
    postoAutoService.getPostiLiberi().then(result=>res.json(result));
});

router.post('/nuovo', (req,res)=>{
    const postoAuto = req.body;
    //Servizio di inserimento di un nuovo posto auto
    postoAutoService.insertPostoAuto(postoAuto).then(result=> res.json(result));
});

router.post('/aggiornaStato',(req,res)=>{
    const id = req.body.id;
    const occupato = req.body.isOccupato;
    //Servizio per liberare un posto dato l'id, setOccupato = 0
    postoAutoService.updatePostoAuto(id,occupato).then(result=>res.json(result));
});

module.exports = router;