const router = require('express').Router();

router.get('/lista',(req,res)=>{
    //Servizio per prendere la lista delle persone
});

router.get('/',(req,res)=>{
    const id = req.query.id;
    //Servizio per la select di una persona dal suo id
});

router.get('/personeMacchine',(req,res)=>{
    const targa = req.query.targa;
    //Servizio per la innerJoin e ritorno delle persone e macchine
})

router.post('/nuovo',(req,res)=>{
    const persona = req.body;
    //Servizio per insert di una nuova persona
});

module.exports = router;