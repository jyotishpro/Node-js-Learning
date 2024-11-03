
const {MongoClient}=require('mongodb');
const url="mongodb://localhost:27017/";
const Client =new MongoClient(url);
const database='e-commerce';

async function dbconnect() {
    const result =await Client.connect();
    const db=result.db('e-commerce')
    const collection= db.collection('product')
    return collection;

    
}

module.exports=dbconnect();