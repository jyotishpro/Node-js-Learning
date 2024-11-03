const express = require('express');
const mongoose = require('./config');
const product = require('./product');
const app = express();

app.use(express.json())

app.post('/create',async(req,res)=>{
    let data = new product(req.body)
    let result = await data.save();
    res.send(result);
})

app.get('/list',async(req,res)=>{
    let result = await product.find();
    res.send(result);
})

app.put('/update:_id',async(req,res)=>{
    console.log(req.params);

})

app.listen(3000)