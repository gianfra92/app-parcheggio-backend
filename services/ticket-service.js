const client = require('../pg_session/Client');
const Ticket = require('../models/Ticket');

const getListaTicket = () =>{
    return client.query(`   SELECT id, data_emissione, ora_uscita, id_macchina, id_posto_auto
                            FROM ticket;`)
                            .then(result=> result.rows)
                            .catch(error=>{
                                console.log('Error',error);
                                return "Errore nel sistema";
                            });
};

const getTicketbyId = (id)=>{
    return client.query(`   SELECT id, data_emissione, ora_uscita, id_macchina, id_posto_auto
                            FROM ticket
                            WHERE tickets.id = $1;`,
                            [id])
                            .then(result=> result.rows)
                            .catch(error=>{
                                console.log('Error',error);
                                return "Errore nel sistema";
                            });
};

const insertTicket = (ticket)=>{
    const newTicket = new Ticket(ticket);
    return client.query(`   INSERT INTO ticket
                            (data_emissione, ora_uscita, id_macchina, id_posto_auto)
                            VALUES($1, $2, $3, $4);`,
                            [newTicket.dataEmissione,newTicket.oraUscita,newTicket.idMacchina,newTicket.idPostoAuto])
                            .then(()=> 'ok')
                            .catch(error=>{
                                console.log('Error',error);
                                return "Errore nel sistema";
                            });
};

const getTicketsJoinMacchine = (targa,posto)=>{
    return client.query(`   SELECT ticket.data_emissione, ticket.ora_uscita, macchina.targa, posto_auto.nome_posto
                            FROM ticket
                            INNER JOIN macchina
                            ON macchina.id = ticket.id_macchina
                            INNER JOIN posto_auto
                            ON posto_auto.id = ticket.id_posto_auto
                            WHERE macchina.targa = $1, posto_auto.nome_posto = $2;`,
                            [targa,posto])
                            .then(result=> result.rows)
                            .catch(error=>{
                                console.log('Error',error);
                                return "Errore nel sistema";
                            });
};

const updateTicket = (id,oraUscita)=>{
    return client.query(`   UPDATE ticket
                            SET  ora_uscita=$2
                            WHERE id=$1;`,
                            [id,oraUscita])
                            .then(()=> 'ok')
                            .catch(error=>{
                                console.log('Error',error);
                                return "Errore nel sistema";
                            });
};

const deleteTable = ()=>{
    return client.query(`   DELETE FROM ticket;`)
                            .then(result=> result.rows)
                            .catch(error=>{
                                console.log('Error',error);
                                return "Errore nel sistema";
                            });
};

module.exports = {
    getListaTicket,
    getTicketbyId,
    insertTicket,
    getTicketsJoinMacchine,
    updateTicket,
    deleteTable
}