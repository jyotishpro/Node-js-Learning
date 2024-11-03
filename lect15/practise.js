
const express= require('express')
const app =express()

app.get('',(req,res)=>{
    res.send("hello i am jyotish")
})

app.get('/home',(req,res)=>{
    res.send("this is home page")
})
app.get('/about',(req,res)=>{
    res.send("this is home page")
})

app.get('',(req,res)=>{
   const name= req.query.name
   console.log(name)
})

app.get('',(req,res)=>{
    res.send(`"<h1>jyotish kumar</h1> <button>click me</button> <a href="about">go to about page</a>"`)
})

app.listen(3000)


