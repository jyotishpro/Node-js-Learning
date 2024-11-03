const express=require('express')
const app=express()
const path=require('path')
app.set('view engine','ejs')
const dirpath=path.join(__dirname,'public')
// app.use(express.static(dirpath))
app.get('',(req,res)=>{
    res.render(`home`)
})
app.get('/aboutme',(req,res)=>{
    res.render(`about`)
})
app.get('/contactinfo',(req,res)=>{
    res.render(`contact`)
})
app.listen(3000)