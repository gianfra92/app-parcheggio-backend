class Ticket{
    constructor({dataEmissione,oraUscita = null,idMacchina,idPostoAuto}){
        this.id;
        this.dataEmissione = new Date(dataEmissione);
        this.oraUscita = new Date(oraUscita);
        this.idMacchina = idMacchina;
        this.idPostoAuto = idPostoAuto;
    }
}

module.exports = Ticket;