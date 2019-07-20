var MongoClient = require('mongodb').MongoClient,
    eUrl = 'mongodb+srv://Seba1705:Seba1705@primerbase-qdsue.mongodb.net/test';

MongoClient.connect(eUrl, { useNewUrlParser: true }, function(err, db){
    if( err ) throw err;
    var dbo = db.db('ITPruebas'),
        alumnos = [
            { nombre : 'Norma', direccion : 'Calle falsa 321' },
            { nombre : 'Claudia', direccion : 'Calle falsa 999' },
            { nombre : 'Rosa', direccion : 'Calle falsa 222' }
        ];

    dbo.collection('alumnos').insertMany(alumnos, function( err, res ){
        if (err ) throw err;
        console.log('Numero de alumnos insertados: ' + res.insertedCount);
        db.close();
    });
})
