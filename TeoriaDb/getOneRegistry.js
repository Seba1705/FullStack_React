var MongoClient = require('mongodb').MongoClient,
    eUrl = 'mongodb+srv://Seba1705:Seba1705@primerbase-qdsue.mongodb.net/test';

//DEVUELVE EL NOMBRE DE TODOS LOS REGISTROS
// MongoClient.connect(eUrl, { useNewUrlParser: true }, function(err, db){
//     if( err ) throw err;
//     var dbo = db.db('ITPruebas');

//     dbo.collection('alumnos').find({}, { projection: { _id : 0, nombre : 1 } }).toArray( function( err, res ){
//         if (err ) throw err;
//         console.log(res);
//         db.close();
//     });
// });


//DEVUELVE EL PRIMER REGISTRO
// MongoClient.connect(eUrl, { useNewUrlParser: true }, function(err, db) {
//     if(err) throw err;
//     var dbo = db.db("ITPruebas");

//     dbo.collection("alumnos").findOne({}, function( err, res ){
//         if(err) throw err;
//         console.log(res.nombre)
//         db.close()    
//     })
// });


//DEVUELVE TODOS LOS REGISTROS
// MongoClient.connect(eUrl, { useNewUrlParser: true }, function(err, db) {
//     if(err) throw err;
//     var dbo = db.db("ITPruebas");
//     dbo.collection("alumnos").find({}).toArray(function(err, res){
//         if(err) throw err;
//         console.log(res)
//         db.close()    
//     })
// });


MongoClient.connect(eUrl, { useNewUrlParser: true }, function(err, db) {
    if(err) throw err;
    var dbo = db.db("ITPruebas"),
        query = { nombre : 'Juan' };

    dbo.collection("alumnos").find(query).toArray(function(err, res){
        if(err) throw err;
        console.log(res)
        db.close()    
    });
});