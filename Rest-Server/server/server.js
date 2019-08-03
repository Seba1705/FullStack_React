require( '../config/config' );

const express = require( 'express' ),
      mongoose = require( 'mongoose');  
      url = process.env.URLDB;


// Coneccion a la base de datos
mongoose.connect( url, { useNewUrlParser: true } )
        .then( db => console.log( 'Base de datos conectada' ))
        .catch( err => console.log( err ))

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded( {extended : false} ));

app.use(bodyParser.json());

app.use( require('./routes/usuario' ));

app.listen(process.env.PORT, () => console.log('Aplicacion corriendo en puerto', process.env.PORT))
     