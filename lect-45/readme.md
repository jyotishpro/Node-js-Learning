# os module
what is os module
important functiosns of os module
interview quetion

# Os module

      kya hai ye : operating system  module : kha use hota hai: jahan os ka information nikalna hota hai.

      const os = require('os');
      console.log(os)
      console.log(os.arch())
      conosle.log(os.freemem())
      conosle.log(os.freemem()/(1024*1024*1024))
      conosle.log(os.totalmem()/(1024*1024*1024))
      console.log(os.hostname())
      console.log(os.platform())
      console.log(os.userInfo())

# events and event emitter in node js
what is events and event emitter
make an event and call it 
interview question

# events and event emitter

    event:  event ek signal send karnsa hota hai ki ek particular code execute  kar do 
    event emitter : jo event generate karta hai.
    button node me nahi hota hai.

    code:  
           const express = require ('express');
           cosnt EventEmitter = require("events")
           ocnst event = new EventEmitter();

           const app = express();

           let count =0 ;

           event.on("countapi",()=>{
            count++;
            console.log("event called",count)
           })

           app.get('/',(req,res)=>{
            res.send("api called);
            event.emit("countapi")

           })

           app.get('/search',(req,res)=>{
            res.send("search api called);
            event.emit("countapi")

           })

           app.get('/update',(req,res)=>{
            res.send("update api called);
         event.emit("countapi")

           })

           app.listen(5000);e
# REPL 
read eval print loop
what is repl 
example of repl 
interview question

# REPL
       what is repl:
                 nodejs ka command line hota hai jisme nodejs aur js ka code bhi run kar skte hai

                 in cmd: 
                      node  :::enter karen

                      phir yahan code likh skte hai

                      editor jaisa open karne ke liye  : .editor 
                      phir editor open ho jyega;

                      phir isme code likhe :
                      execute karne ke liye:  ctrl +  D karen 
                      tb execution ka option ayga. .help (krke help le skte hai.)
# nodejs connect with mysql
  install mysql npm package
  connect node js and mysql
  get data from  mysql
  interview question

  # connect with mysql
         download mysql
         : mysql me users name ka table
         in terminal:  
                      npm i mysql
         in index.js:
                       const mysql = require("mysql");
                       const con = mysql.createConnection({
                        host: `localhost`,
                        user: "root",
                        password: "",
                        database:"databaseName"
                       })                      
                       con.connect((err)=>{
                        if(err)
                        {
                            console.warn("error")
                        }
                        else
                        {
                            console.warn("connected")
                        }
                       })

                       con.query("select * from tableName", (err,result)=>{
                        console.warn("result",result)
                       })
                    