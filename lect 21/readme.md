# make html pages
make folder for html file and access it 
make html files
load html fiels
interview question

# make folder for html and access it
         firstly make folder public and also make html file
                        
                        const express=require('express')
                    
                       const path = require('path')
                       const app=express();
                       cosnt pblicpath=path.join(__dirname,'public')

                         //use ek middleware function hai express js ka . ye static  file se load karega content ko

                         app.use(express.static(publicpath));

                         // ab chrome me search karna hai /about.html then it will be accessed

                         root page direct index.html ko access karta hai
# path module ksi kam me aata hai
           ye apke project ke folder ko access karne me help karta hai
# static method kya karta hai
           ye static content ko load karta hai
# kya static ke andar directly html ko jiske andar css bagera likhe ho direct aceess kar sakte ho 
                  nahi

# renamove extension from url    
         make 404 page
         apply get method
           
              cosnt express= require('express')
              const path= require('path')

              const app=express();
              const publicpath= path.join(__dirname,'public')

              app.get('',(req,res)=>{
                res.sendFile(`${publicpath}/index.html`)
              })
              app.get('/aboutme',(req,res)=>{
                res.sendFile(`${publicpath}/about.html`)
              })
              app.get('/home',(req,res)=>{
                res.sendFile(`${publicpath}/home.html`)
              })
           
            // koi aisa url type kiya jo hai hi nahi
            app.get('*',(req,res)=>{
                res.sendFile(`${publicpath}/nopage.html`)
            })
                        
# 404 page kya hota hai

# template engine?
what is the template engine?
install ejs template package.
setup dynamic routing 
make dynamic page
interview question.

# dynamin page
        jab data database se aata hai to wo dynamic page

        in terminal:  npm install ejs
        in index.js :   app.set(' view engine','ejs');
                  make a folder name: views and views ke endar ek file bnte hai profile.ejs

                  app.get('/profile',(req,res)=>{
                    const user={
                      name:'jyotish kumar',
                      email: 'jyotishkumar73011@gmai.com'
                      city: 'noida'
                    }
                    res.render('profile',{user})
                  })

                  and profile.ejs me is data ko ger karne ke liye <%= usesr.name %> se kar skte hai
                                                                   <%= usesr.email %>
                                                                   <%= usesr.city %>
# dynamic page
how to make loop in ejs
make header file
show common header file
interview question

# dynamic page
        app.get('/profile',(req,res)=>{
          const user={
            name:'jyotish kumar',
            email:'jyotishkumar73022@gmail.com',
            country:'INDIA',
            skills:['php','html']
            res.render('profile',{user})

          }
        })

        in profile.ejs me:
            
            <% user.skills.forEach((item)=>{ %>
             <li <%= item %>>
            <%= }) %>

              ek file aur bnye login.ejs  

              app.get('/login',(req,res)=>{
                res.render('login')
              })

              ek folder bnye common           
                 isme ek file bnye header.ejs  
      

              phir loginpage ke andar add kare:  <%- include('common/header')%> // - mtlb html ko load kar rhe hai 
                        
                      
