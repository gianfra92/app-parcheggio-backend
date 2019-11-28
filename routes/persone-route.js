const router = require('express').Router();

router.get('/lista',(req,res)=>{
    //Servizio per prendere la lista delle persone
    res.send('GET LISTA PERSONE');
});

router.get('/',(req,res)=>{
    const id = req.query.id;
    //Servizio per la select di una persona dal suo id
    res.send('GET SINGOLA PERSONA');
});

router.get('/personeMacchine',(req,res)=>{
    const targa = req.query.targa;
    //Servizio per la innerJoin e ritorno delle persone e macchine
    res.send('GET JOIN PERSONe MACCHINe');
})

router.post('/nuovo',(req,res)=>{
    const persona = req.body;
    //Servizio per insert di una nuova persona
    res.send('POST NUOVA PERSONA');
});

module.exports = router;