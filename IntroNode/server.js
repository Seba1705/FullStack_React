var http = require('http');

// var server = http.createServer( function( req, res ){
//     res.writeHead('200', { 'content-type' : 'text/plain' });
//     res.end('Hola Mundo');
// }).listen(3000);


// function miPeticion( req, res ){
//     res.writeHead('200', { 'content-type' : 'text/plain' });
//     res.end('Hola a todos');
// }

// var server = http.createServer(miPeticion).listen(9000);

function miPeticion( req, res ){
    res.writeHead('200', { 'content-type' : 'text/plain' });
    if( req.url == '/' ){
        res.end('Hola a todos');
    }
    if (req.url == '/cursos/'){
        res.end('Javascript, NodeJs, React, Mongo, Express');
    }
    if (req.url == '/web/'){
        res.end('Esta es mi pagina web');
    }
}

var server = http.createServer(miPeticion).listen(8000);