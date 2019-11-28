const client = require('../pg_session/Client');
const Persona = require('../models/Persona');

const insertPersona = (persona)=>{
    const newPersona = new Persona(persona);
    return  client.query(`  INSERT INTO Persona
                            (nome, cognome, id_macchina)
                            VALUES($1, $2,$3);`,
                            [newPersona.nome,newPersona.cognome,newPersona.idMacchina])
                            .then(()=> 'ok')
                            .catch(error=>{
                                console.log('Error',error);
                                return "Errore nel sistema";
                            });
};

const getListaPersona = ()=>{
    return client.query(`   SELECT id, nome, cognome, id_macchina
                            FROM persona;`)
                            .then(result=> result.rows)
                            .catch(error=>{
                                console.log('Error',error);
                                return "Errore nel sistema";
                            });
}

const getPersonabyId = (id)=>{
    return client.query(`   SELECT id, nome, cognome, id_macchina
                            FROM persona
                            WHERE id = $1;`,
                            [id])
                            .then(result=> result.rows)
                            .catch(error=>{
                                console.log('Error',error);
                                return "Errore nel sistema";
                            });
}

const getPersonaJoinMacchina = (targa)=>{
    return client.query(`   SELECT p.nome, p.cognome, m.targa, m.modello
                            FROM persona as p
                            INNER JOIN macchina as m
                            ON m.id = p.id_macchina
                            WHERE macchine.targa = $1;`,
                            [id])
                            .then(result=> result.rows)
                            .catch(error=>{
                                console.log('Error',error);
                                return "Errore nel sistema";
                            });
}

module.exports = {
    insertPersona,
    getListaPersona,
    getPersonabyId,
    getPersonaJoinMacchina
}