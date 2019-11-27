const router = require('express').Router();

router.get('/lista',(req,res)=>{
    //Servizio parcheggio per prendere i posti auto
});

router.get('/',(req,res)=>{
    const id = req.query.id;
    //Servizio per la select di un parcheggio dal suo id
});

router.post('/nuovo',(req,res)=>{
    //Servizio di insert di un nuovo parcheggio
});

module.exports = router;