const { io } = require( '../server' );
let usuarios = [];

io.on( 'connection', cliente => {
    cliente.on('nuevo usuario', (data, callback) => {
        if(usuarios.indexOf(data) != -1){
            callback(false);
        }else{
            callback(true);
            cliente.usuario = data;
            usuarios.push(cliente.usuario);
            actualizarUsuario();
        }
    });

    const actualizarUsuario = () => {
        io.emit('usuarios', usuarios);
    }

    cliente.on('enviar_mensaje', data => {
        io.emit('nuevo_mensaje', { msj: data.msj, usuario: data.usuario });
    });

    cliente.on('disconnect', data => {
        if(!data.usuario) return
        usuarios.splice(usuarios.indexOf(data.usuario), 1);
        actualizarUsuario();
    })
});

