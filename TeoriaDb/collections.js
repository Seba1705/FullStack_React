var MongoClient = require('mongodb').MongoClient,
    // url = 'mongodb://localhost:27017/ITPruebas',
    eUrl = 'mongodb+srv://Seba1705:Seba1705@primerbase-qdsue.mongodb.net/test';


MongoClient.connect(eUrl, { useNewUrlParser: true }, function(err, db){
    if( err ) throw error;
    var dbo = db.db('Coffe');
    dbo.createCollection('cartas', function( err, res ){
        if( err ) throw error;
        console.log('Listo...');
        db.close();
    });
})