const {MongoClient}=require('mongodb');
const database='databaseName'
const url="mongodb://localhost:27017";
const Client =MongoClient(url);

function dbconnect(){
 let result = Client.connect();
 let db=result.db(database)
 return db.collection('databasedocname');

}

module.exports=dbconnect();