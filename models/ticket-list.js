const Ticket = require("./ticket");


class TicketList{

    constructor(){
        this.ultimoNumero = 0,
        this.pendientes   = [],
        this.asignados    = []
    }

    get siguienteNumero(){
        this.ultimoNumero ++;
        return this.ultimoNumero;
    }

    //los 3 que se veran en las targetas y 10 en el historial
    get ultimos13(){
        return this.asignados.slice(0,13);
    }

    crearTicket(){
        const nuevo = new Ticket(this.siguienteNumero);
        this.pendientes.push( nuevo );
        return nuevo;
    }

    asignarTicket( agente, escritorio){
        
        if(this.pendientes.length == 0) return null;

        const siguiente = this.pendientes.shift();
        siguiente.agente     = agente;
        siguiente.escritorio = escritorio;
        this.asignados.unshift(siguiente);

        return siguiente;
    }
}

module.exports = TicketList;