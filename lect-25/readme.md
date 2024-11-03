# middleware
  what are middlewares
  how to make a middleware
  apply middleware on routes
  types of middleware
  interview question.
  # middleware
        ye function hota hai . jo ki routes ke sath use hota hai isse reequest aur response ko modify kar skte hai.
        site block karna, age check karna , etc.
        ek bar middleware bnte hai ise sabhi jagah use karte hai

                      const express = require('express')
                      const app =express()
                      // make middleware
                      const reqFilter=(req,res,next)=>{
                        console.log('reqFilter');
                        next()
                      }

                      app.use(reqFilter)

                      app.get('/',(req,res)=>{
                        res.send('welcome to home page')
                      })
                      app.get('users',(req,res)=>{
                        res.send('welcome to users page')
                      })

                      
                     // example of middleware isko upar bnte hai
                     // yadi uska age 18 se kam ho to wo mera website me enter na ho
                    const reqFilter=(req,res,next)=>{
                         if(!req.query.age){
                            res.send('please provide age')
                         }
                          else if(req.query.age<18){
                            res.send('you can not access this page')
                         }
                          
                         else{

                        next();
                         }
                    }

                      app.listen(3000)
# middleware types
  application level middleware
  router level middleware
  error-handling middleware
  built-in middleware
  third-party middleware
                        