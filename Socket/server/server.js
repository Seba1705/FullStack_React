const http = require('http'),
      path = require('path'),
      express = require('express'),
      socketIO = require('socket.io');

const app = express(),
      server = http.createServer( app ),
      publicPath = path.resolve( __dirname, '../public' ),
      port = process.env.PORT || 3000;

app.use( express.static( publicPath ));

module.exports.io = socketIO( server );

require( './sockets/socket' );


server.listen( port, err => {
    if( err ) throw new Error( err );
    console.log( `Servidor corriendo en el puerto ${ port }` );
})
      