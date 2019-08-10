var socket = io();

socket.on( 'connect', () => console.log('Conectado al servidor') );

socket.on( 'disconect', () => console.log('Perdimos la coneccion con el servidor') );

//Enviar Info
socket.emit( 'enviarMensaje', {
    usuario : 'Seba',
    mensaje : 'Hola a todos'
}, respuesta => console.log('Respuesta del servidor ', respuesta) );

socket.on( 'enviarMensaje', mensaje => console.log('Servidor ', mensaje))