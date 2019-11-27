const router = require('express').Router();

router.get('/lista',(req,res)=>{
    //Servizio di select per la lista di macchine
});

router.get('/',(req,res)=>{
    const id = req.query.id;
    //Servizio per la select di una macchina dal suo id
});

router.post('/nuovo',(req,res)=>{
    //Servizio di insert di una nuova macchina
});

module.exports = router;