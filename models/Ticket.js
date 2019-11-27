class Ticket{
    constructor(dataEmissione,oraUscita = '',idMacchina,idPostoAuto){
        this.id;
        this.dataEmissione = dataEmissione;
        this.oraUscita = oraUscita;
        this.idMacchina = idMacchina;
        this.idPostoAuto = idPostoAuto;
    }
}

module.exports = Ticket;