var MongoClient = require('mongodb').MongoClient,
    url = 'mongodb://localhost:27017/ITPruebas';

MongoClient.connect(url, function(err, db){
    if( err ) throw error;
    var dbo = db.db('ITPruebas');
    dbo.createCollection('cursos', function( err, res ){
        if( err ) throw error;
        console.log('Listo...');
        db.close();
    });
})