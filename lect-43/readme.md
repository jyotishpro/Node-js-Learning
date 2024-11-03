# search api in node js with mongodb
make simple get route for api
search with single field
search with multiple fields
test api 
interview question

# search api in node js
  
       in index.js:
                      const express = require('express');
                      require("./config");
                      const product = require('./product')
                      const app = express();

                      app.use(express.json());
                       app.get("/search/:key",async(req,res)=>{
                        console.log(req.params.key)
                       let data =await product.find()

                       {
                    
                          "$or":[
                            {"name":{$regex:req.params.key}}
                            {"brand":{$regex:req.params.key}}
                            {"category":{$regex:req.params.key}}
                          ]

                       }

                        resp.send(data)
                       })

                      app.listen(3000)

# upload file in node js
install multer npm package
make router for upload file
write ocde for upload file
inteview question
 
 # upload file in node js
       
       multer ek npm package hai file upload krne ke liye 
       in terminal: 
                    npm i multer

       inindex.js:
                  const express= require('express');
                  const multer= require('multer')

                  const app= express();
                  const upload = multer({
                    storage:multer.diskStorage({
                        destination:function(req,file,cb)
                        {
                            cb(null,"uploads")
                        },
                        filename:function(req,file,cb)
                        {
                            cb(null,"file.fieldname+"+"+Date.now()+".jpg"
                        }
                    })
                  }).single("user_filed")  //phir postman me jakar body me jakr file bnye user_filed phir file choose karke upload kr do us file ko single finction me dalna hai
                  ab send karna hai

                  app.post("/upload",upload,(req,res)=>{
                   res.send("file uploaded")
                  })      

                  app.listen(3000);       


      kya bina multer package ke file upload kar skte hai ya nhi
      to ans hai yes kar skte ahi         

# GET API with mysql
     make config.js file:
                         in config.js:    
                                      const mysql = require('mysql')
                                      const con = mysql.createconnection({
                                        host:'localhost',
                                        user:'root',
                                        passwore:'Jyotish@123',
                                        database:'name'
                                      });
                                      con.connect((err)=>{
                                       if(err) {
                                        console.warn("error in connection")
                                       }
                                      })