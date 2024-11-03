const express = require('express')
const app= express();

const mongoose = require('mongoose');
const { monitorEventLoopDelay } = require('perf_hooks');
mongoose.connect("mongodb://localhost:27017/databasename");

let productschema = mongoose.Schema({
    name: String,
    email: String,
    contact: Number
});

app.post('',(req,res)=>{
    let product = mongoose.model('collectionname',productschema)
    let data = new product({name:"jyotish",email:"kumarjyotisi7577@gmail.com",contact:74467888});
    let result = data.save();
})

app.put('',(req,res)=>{
    let product = mongoose.model('collectionname',productschema)
let update = product.updateMany({name:'jyotish'},{$set:{name:"jkyadav"}})
})

app.get('',(req,res)=>{
    let product = mongoose.model('collectionname',productschema);
    let data = product.find();
    console.log(data);
    res.send(data)
})

app.delete('',(req,res)=>{
    let product = mongoose.model('collectionname',productschema)
     product.deleteMany({name:"jyotish"});
})

app.listen(3000);
