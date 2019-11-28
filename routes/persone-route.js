const router = require('express').Router();
const personaService = require('../services/persona-service');

router.get('/lista',(req,res)=>{
    //Servizio per prendere la lista delle persone
    personaService.getListaPersona().then(lista=> res.json(lista));
});

router.get('/',(req,res)=>{
    const id = req.query.id;
    //Servizio per la select di una persona dal suo id
    personaService.getPersonabyId(id).then(persona=>res.json(persona));
});

router.get('/personeMacchine',(req,res)=>{
    const id = req.query.targa;
    //Servizio per la innerJoin e ritorno delle persone e macchine
    personaService.getPersonaJoinMacchina(targa).then(personamacchina=> res.json(personamacchina));
})

router.post('/nuovo',(req,res)=>{
    const persona = req.body;
    //Servizio per insert di una nuova persona
    personaService.insertPersona(persona).then(result => res.json(result));
});

module.exports = router;