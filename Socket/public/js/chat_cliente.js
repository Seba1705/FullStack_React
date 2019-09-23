var nombreUsuarioForm = document.querySelector('#FormUsuarios'),
    usuario = document.querySelector('#username'),
    usuarios = document.querySelector('#users'),
    formMensajes = document.querySelector('#FormMensajes'),
    mensaje = document.querySelector('#message'),
    chat = document.querySelector('#Chat');

var socket = io();

nombreUsuarioForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    socket.emit('nuevo usuario', usuario.value, function(data){
        if(data){
            
            document.querySelector('#nombres').style.display = 'none';
            document.querySelector('#main').style.display = 'block';
        }else{
            document.querySelector('#error').innerHTML = 'Usuario ya existente';
        }
    })
});

socket.on('usuarios', function(data){
    // console.log(data);
    var html = '';
    for(var i=0; i < data.length; i++){
        html += data[i] + '<br>';
    }
    usuarios.innerHTML = html;
})

formMensajes.addEventListener('submit', function(evt){
    evt.preventDefault();
    socket.emit('enviar_mensaje', { msj: mensaje.value, usuario: usuario.value });
    mensaje.value = '';
});

socket.on('nuevo_mensaje', function(data){
    chat.innerHTML += '<strong>' + data.usuario + ': </strong>' + data.msj + '<br>';
});