# Asynchronous Basics in Node js
     in synchronous operations taska are perfomerd one at a time 
     in asynchronous , second task do not wait to finish first task
 # example: 
     console.lgo("start exe......")
     
     setTimeout((=>{
            console.log("logic exe.....")

     }),2000)

     console.log("complete exe.....")

# drawback 
        let a=10;
        let b=10

        setTimeout(()=>{
            b=20;
        },2000)

        console.log(a+b)
# handle asynchronous data in noda js
     let a=10;
     let b=0;

     let waitingdata=new Promise((resolve,reject)=>{

     setTimeout(()=>{
        
        resolve(30)
     },2000) 

     })

     waitingdata.then((data)>{
            b=data;
            console.log(a+b)     
     })
# How node js works
call stack , node api , callback queue, example , interview questions

# call stack node api callbackque  , event loop
     1.  call stack hmesha kam aata hai
# call stack     
     jab function execcute hota hai ti har ek function call stack ke andar register hota hai ki kon sa function
     pahle call hoga . main() function by default hota hai isme wo call hota hai

     main isme sabhi function register hota hai.

     jab ek function ka execution khtm ho jata hai tb isse nikalta hai

     phir call stack khali ho jata hai
# node APIs

      example: 
                console.log("starting up")

                setTimeout(()=>{
                console.log("2 sec log")
                },2000)

                setTimeout(()=>{
                console.log("2 sec log")
                },0)

                console.log("finishing up")

                // sabse phle kon chlega

      setTimeout , ya c++, ya kahi se inherit karte hai wo nodeapi me register ho jata hai
      application programming interface(api)   

      nodeapi se callback queue me jata hai
      phir callback queue se call stack me jata hai tb execute hota hai

# Express js
what is express sj, install express , make example with expressjs , interview question.

# installation
      in terminal: npm i express

       const express=require('express')
       const app = express();
       app.get('',(req,res)=>{
        res.send('hello, this home page')

       })
       app.get('/about',(req,res)=>{
        res.send('hello, this about page')

       })
       app.get('/help',(req,res)=>{
        res.send('hello, this help page')

       })

       app.listen(5000);
# routings 
        req....  client request deta hai
        res..... server response deta hai

        request ko get karna :
                             app.get('',(req,res)=>{
                              console.log("data sent by browser", req.query.name)
                             res.send('hello, this help page'+req.query.name)
                             })
# render html and json
                        app.get('',(req,res)=>{
                        res.send('<h1>hello, this home page</h1>')

                       })                   
                        app.get('/about',(req,res)=>{
                        res.send(`
                        <input tpe="text" placeholder="user name"/>
                        <button>click me</button>
                        `)

                       })      

                       
                        app.get('/help',(req,res)=>{
                        res.send('
                       [ {
                            name: "jyotish",
                            email: "kumarjyotish@gmail.com"
                        },
                        {
                            
                            name: "jyotish",
                            email: "kumarjyotish@gmail.com"
                        }
                        ]
                        )

                       })                
           

                    
                        app.get('',(req,res)=>{
                        res.send('<h1>hello, this home page</h1> <a href="/about">go to about page</a>')

                       })   
# question:
   q. paramete se value kaise get karoge.
                                   
                       