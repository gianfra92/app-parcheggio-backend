const client = require('../pg_session/Client');
const Macchina = require('../models/Macchina');

const getListaMacchine = ()=>{
    return client.query(`   SELECT id, targa, modello
                            FROM macchina;`)
                            .catch(error=>{
                                console.log('Error',error);
                                return "Errore nel sistema";
                            });
};

const getMacchina = (id)=>{
    return client.query(`   SELECT id, targa, modello
                            FROM macchina
                            WHERE id = $1;`,
                            [id])
                            .catch(error=>{
                                console.log('Error',error);
                                return "Errore nel sistema";
                            });
};

const insertMacchina = (macchina)=>{
    const newMacchina = new Macchina(macchina);
    return client.query(`   INSERT INTO macchine
                            (targa, modello)
                            VALUES($1, $2);`,
                            [newMacchina.targa,newMacchina.modello])
                            .catch(error=>{
                                console.log('Error',error);
                                return "Errore nel sistema";
                            });
};

module.exports = {
    getListaMacchine,
    getMacchina,
    insertMacchina
}