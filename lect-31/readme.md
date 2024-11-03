# Api with mongodb
make new file for api
import and use mongo config 
make api for get data
test with postman
interview question

# make file for api
    for mongodb connection ke liye alg file bnye jaise
    in mongodb.js:
                  const {MongoClient}=require('mongodb');
                  const url="mongodb://localhost:27017";
                  const Client= new Mongoclient(url);

                  async dbconnect(){
                    let result = await Client.connect();
                    let db=result.db(database name);
                    let collection=db.collection('collection name')
                    return collection
                  }

                  module.exports=dbconnect();

        make new file name: api.js
          in api.js:  
                      const express=require('express');
                     const dbconnect=require('./mongodb')    
                     const app=express();

                     app.get('/', async (req,res)=>{
                      let data =await dbconnect()  
                      data = await data.find().toArray();
                      console.log(data)
                     res.send(data)
                     })              
                    
                    app.listen(3000);



                    ab postman ke andar method select karna hai 'get' then api ka url ka pasete kana hai phir dend karna hai

# question;
           kya get method ke andar body pass kar skte hai
           ans hai nahi
# node js post api method 
make past methos for api
send data from postman
get data in node js bu request
write code for insert data in mongodb
interview question

# make post for api

       jab database me data ko input karbana hota hai api ke throgh to post method ka use karte hai
       jab read karna hota hai to get method ka use karte hai
       jab update  karbana hota hai api se to put method ka use karte hai

    const express=require('express')
    const dbconnect=require('mongodb')
    const app=express()

    app.get('/',async()=>{
       let data=await dbconnect();
       data=await data.find().toArray();
        res.send(data)
    })

    app.post('/',(req,res)=>{
     resp.send({name:'jyoitsh'})
    })
    app.listen(5000)

    go in postman and select post and send pe click karna

    aur body opiton me jakar and row ke andar json pe select karo
    phir in nodemon:
                  {
                    "name":"jyotish",
                    "brand": "nokia",
                    "price":"260$"
                    

                  }

        ab node se is data ko get karna hai.
        yahan se data ko mongodb me send karna hai
         in index.js : 
                        app.use(express.json());          
                        
                        in post me :
                         app.post('/',async (req,res)=>{
                           console.log(req.body);
                           let data = await dbconnect();
                           let result=await data.insert(req.body)

                         resp.send(result)
                         })
                        app.listen(5000)

                        to is tarike se post api ke help se data send kar skte hai.


                        question.... apko request se body get karne ke liye kya use karoge
                         to ans hai express.json()
# node js put api method
 make put method for api
 send data from postman
 handle data in node js by request 
 write code for update data in mongo db 
 interview questions 

 # make put method for api
       put method kha use hota hai;  jahan par data ko api ke through update karbana hota hai to puth method ka use hota hai

       kya post se nahi karba skte updte:
       ans : ha karba skte hai lakein standard me put method use hota hai

       api.js file me>

                       app.put('/',(req,res)=>{
                        res.send({result:"update"})
                       })                         
        postman se data send karna jo upar likha hua hai.
                       
                       isko get kaise karna hai.

                       app.use(express.json());

                       app.put('',(req,res)=>{
                        console.log(req.body)
                       resp.send({result:"updare})
                       })

                       ab update karna hai
                        app.put('/',async(req,res)=>{
                          let data= await dbconnect();
                          let result = data.updateOne(
                            {name:req.body.name},
                            {$set:req.body}
                          )
                       resp.send({result:"updare})
                       })

                       data url se send kar skte hai

                       app.put('/:name',async(req,res)=>{
                          let data= await dbconnect();
                          let result = data.updateOne(
                            {name:req.params.name},
                            {$set:req.body}
                          )
                       resp.send({result:"updare})
                       })
                       

                       data ko kaise update kar skte ahi
                       query param se data ko kaise update kar skte hai aur kaise le skte hai

# node js delete api method
make delete method for api
send data from postman
handle data in node js by request
write code for delete data in mongodb
interview question

# node js delete api method
        
        const mongodb=require('mongodb')

        app.delete('/:id',async(req,res)=>{
          console.log(req.params.id);
          const data =await dbconnect();
          let result=await data.delteOne({id:new mongodb.ObjectId(req.params.id)})

        res.send(result)
        })

        
