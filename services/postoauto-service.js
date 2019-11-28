const client = require('../pg_session/Client');
const PostoAuto = require('../models/PostoAuto');

const getListaPostiAuto = ()=>{
    return client.query(`   SELECT id, nome_posto, is_occupato
                            FROM posto_auto;`)
                            .then(result=> result.rows)
                            .catch(error=>{
                                console.log('Error',error);
                                return "Errore nel sistema";
                            });
}

const getPostoAutobyId = (id)=>{
    return client.query(`   SELECT id, nome_posto, is_occupato
                            FROM posto_auto
                            WHERE id = $1;`,
                            [id])
                            .then(result=> result.rows)
                            .catch(error=>{
                                console.log('Error',error);
                                return "Errore nel sistema";
                            });
}

const getPostiLiberi = ()=>{
    return client.query(`   SELECT id, nome_posto, is_occupato
                            FROM posto_auto
                            WHERE is_occupato = 0;`)
                            .then(result=> result.rows)
                            .catch(error=>{
                                console.log('Error',error);
                                return "Errore nel sistema";
                            });
}

const insertPostoAuto = (postoAuto)=>{
    const newPostoAuto = new PostoAuto(postoAuto);
    return client.query(`   INSERT INTO posto_auto
                            (nome_posto, is_occupato)
                            VALUES($1, $2);`,
                            [newPostoAuto.nomePosto,newPostoAuto.isOccupato])
                            .then(()=> 'ok')
                            .catch(error=>{
                                console.log('Error',error);
                                return "Errore nel sistema";
                            });
};

const updatePostoAuto = (id,occupato)=>{
    return client.query(`   UPDATE posto_auto
                            SET is_occupato=$2
                            WHERE id=$1;`,
                            [id,occupato])
                            .then(()=> 'ok')
                            .catch(error=>{
                                console.log('Error',error);
                                return "Errore nel sistema";
                            });
}

module.exports = {
    getListaPostiAuto,
    getPostiLiberi,
    getPostoAutobyId,
    insertPostoAuto,
    updatePostoAuto

}