# Socket Server

Este backend contiene todo lo necesario para configurar un servidor de express + socket.io.

Cualquier conexión adicional de sockets, se puede hacer en el archivo ```models/sockets.js``` y cualquier middleware adicional de express, se puede realizar en el archivo ```models/server.js```

En este caso usamos este servidor para montar la aplicación de TicketsApp.

### Tópicos del Server:
- Eventos de sockets necesarios
- Consumir servicios REST en nuestro SocketServer
- Crear un nuevo ticket y enviarlo
- Enviar la cola de tickets
- Enviar un ticket para trabajar
