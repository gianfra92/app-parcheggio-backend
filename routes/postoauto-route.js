const router = require('express').Router();

router.get('/lista',(req,res)=>{
    //Servizio per prendere la lista dei posti auto
});

router.get('/',(req,res)=>{
    const id = req.query.id;
    //Servizio per la select di un posto auto dal suo id
});

router.get('/listaLiberi', (req,res)=>{
    //Servizio per prendere la lista dei posti liberi
});

router.post('/nuovo', (req,res)=>{
    const postoAuto = req.body;
    //Servizio di inserimento di un nuovo posto auto
});

router.post('/aggiornaStato',(req,res)=>{
    const id = req.body.id;
    const occupato = req.body.isOccupato;
    //Servizio per liberare un posto dato l'id, setOccupato = 0
});

module.exports = router;