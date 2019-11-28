const client = require('../pg_session/Client');
const Parcheggio = require('../models/Parcheggio');

const getListaParcheggio = ()=>{
    return client.query(`   SELECT id, id_posto_auto, tariffa, sanzione
                            FROM parcheggi;`)
                            .catch(error=>{
                                console.log('Error',error);
                                return "Errore nel sistema";
                            });
};

const insertParcheggio = (parcheggio)=>{
    const newParcheggio = new Parcheggio(parcheggio);
    return client.query(`   INSERT INTO parcheggioschema.parcheggi
                            (id_posto_auto, tariffa, sanzione)
                            VALUES($1, $2, $3);`,
                            [newParcheggio.idPostoAuto,newParcheggio.tariffa,newParcheggio.sanzione])
                            .catch(error=>{
                                console.log('Error',error);
                                return "Errore nel sistema";
                            });
};

module.exports = {
    getListaParcheggio,
    insertParcheggio
}