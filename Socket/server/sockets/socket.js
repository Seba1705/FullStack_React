const { io } = require( '../server' );

io.on( 'connection', cliente => {
    console.log( 'Usuario conectado' );
    
    cliente.emit( 'enviarMensaje', {
        usuaio : 'Admin',
        mensaje : 'Bienvenido a la aplicacion'
    });

    cliente.on( 'disconect', () => console.log('Usuario desconectado') );
});