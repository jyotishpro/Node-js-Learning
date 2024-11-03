const express=require('express');
const app=express();
const {MongoClient}=require('mongodb');
const Url = "mongodb://localhost:27017";
const Client=new MongoClient(Url);
const database='e-commerce';

async function readdb() {
    let result=await Client.connect();
    let db=result.db(database);
    let collection=db.collection('product');
    let response=await collection.find().toArray();
    console.log(response);
    return response;
}

app.get('/',async(req,res)=>{
    res.send(await readdb());
})

app.listen(3000);