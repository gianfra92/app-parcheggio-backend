const client = require('../pg_session/Client');
const Parcheggio = require('../models/Parcheggio');

const getListaParcheggio = ()=>{
    return client.query(`   SELECT id, id_posto_auto, tariffa, sanzione
                            FROM parcheggio;`)
                            .then(result=> result.rows)
                            .catch(error=>{
                                console.log('Error',error);
                                return "Errore nel sistema";
                            });
};

const insertParcheggio = (parcheggio)=>{
    const newParcheggio = new Parcheggio(parcheggio);
    return client.query(`   INSERT INTO parcheggio
                            (id_posto_auto, tariffa, sanzione)
                            VALUES($1, $2, $3);`,
                            [newParcheggio.idPostoAuto,newParcheggio.tariffa,newParcheggio.sanzione])
                            .then(()=> 'ok')
                            .catch(error=>{
                                console.log('Error',error);
                                return "Errore nel sistema";
                            });
};

const deleteTable = ()=>{
    return client.query(`   DELETE FROM parcheggio;`)
                            .then(result=> result.rows)
                            .catch(error=>{
                                console.log('Error',error);
                                return "Errore nel sistema";
                            });
};

module.exports = {
    getListaParcheggio,
    insertParcheggio,
    deleteTable
}