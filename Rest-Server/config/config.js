//==============================================
//  Puerto
//==============================================
process.env.PORT = process.env.PORT || 3000;

//==============================================
//  Entorno
//==============================================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//==============================================
//  Entorno
//==============================================
let urlDB = process.env.NODE_ENV === 'dev' ? 'mongodb+srv://Seba1705:Seba1705@primerbase-qdsue.mongodb.net/usuarios' : process.env.MONGO_URI;

process.env.URLDB = urlDB;