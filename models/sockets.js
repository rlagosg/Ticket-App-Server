const TicketList = require("./ticket-list");

class Sockets {

    constructor( io ) {

        this.io = io;

        this.ticketList = new TicketList();
        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {
            
            console.log("cliente conectado");
            // Escuchar evento: mensaje-to-server
            socket.on('mensaje-to-server', ( data ) => {
                console.log( data );
                
                this.io.emit('mensaje-from-server', data );
            });

            socket.on('solicitar-ticket', (data, callback) => {                 
                const nuevo = this.ticketList.crearTicket();
                callback( nuevo );              
             })

            socket.on('siguiente', ({agente, escritorio}, callback) => {                 
                const siguiente = this.ticketList.asignarTicket(agente, escritorio);
                callback( siguiente );              

                this.io.emit('ticket-asignado', this.ticketList.ultimos13);
             })
             
            
        });
    }
}


module.exports = Sockets;