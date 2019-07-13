const express = require('express'),
      path = require('path'),
      bodyParser = require("body-parser");

let server = express();

server.use( express.static( path.join( __dirname, 'public' )))

server.use(bodyParser.urlencoded({extended : false}))

server.get('/', function (req, res) {
    res.redirect('index.html')
});

server.get('/about', function (req, res) {
    res.redirect('about.html')
});

server.get('/faq', function (req, res) {
    res.redirect('faq.html')
});

server.get('/persona', function (req, res) {
    let persona = [
        {
            nombre : 'Sebastian',
            apellido : 'Aguirre',
            edad : 29,
            sexo : 'masculino'
        },
        {
            nombre : 'David',
            apellido : 'Gomez',
            edad : 25,
            sexo : 'masculino'
        }
    ];
    res.json(persona);
});

server.get('/faq', function (req, res) {
    res.redirect('faq.html')
});

server.post('/suscribe', function(req, res){
    let nombre = req.body.nombre,
        email = req.body.email;
    res.end(nombre + " se suscribio con email " +  email);
})

server.get('/download', function (req, res) {
    res.download(path.join( __dirname, '/download/archivo.pdf'));
});

server.listen('3001', function () { 
    console.log('Servidor escuchando el puerto 3001');
});

