# connect node with mongodb
   install mongodb package
   connect mongodb with node js
   show data from mongodb
   interview questions
# connect mongodb with node js
     in terminal: npm i mongodb
     in index.js:     
                    const {MongoClient}=require('mongodb')   
                    const MongoClient=require('mongodb').MongoClient  dono same hai.

                    const url="mongodb://localhost:27017"  phir isko mongoclient me pass karna hai

                    const database='e-comm'
                    const client=new mongoClient(url)
                    

                    async function getData(){

                        let result = await client.connect();
                        let db=result.db(database);
                        let collection = db.collection('products);
                        let response= await collection.find({}).toArray()
                        console.log(response);
                    }

                    getData();
# interview question
 kya hamlog do database ko connect kar skte hai

 # Read data from mongodb:
     read data from mongodb
     make file for db connection
      handle promise 
      interview question.
# read data from mongodb
            const {MongoClient}=require('mongodb');
            const url="mongodb://localhost:27017"
             const database='e-comm'
            const client=new MongoClient(url);

            async function GetData(){
             let result = await client.connect();
             let db=result.db('database')
             let collection=db.collection('products');
             let response=await collection.find({}).toArray() // yadi ek chij search kana hai to 
             let response=await collection.find({name:'nord'}).toArray()  aise kar skte hai 
            
             console.log(response);

            }

      ek alag file bnye mongodb.js
                 fir isme connection ke liye function bnyenge

                 const {MongoClient}=require('mongodb')
                 const url="mongodb://localhost:27017"
                 const client=new MongoClient(url)

                 async dbcollect(){
                    let result= client.connet()
                    let db=result.db('e-comm')
                    return db.collection('products')
                 }
                 
                 console.warn(dbconnect())

                 dbconnect().then((res)=>{
                    res.find({name:'nord' //ye single data ke liye hai//}).toArray().then((data)=>{
                     console.warn(data)
                    })
                 })


                 promises ko handle karna easy tarika se:

                 const main=async ()=>{
                   let data = await dbconnect();
                   data= await data.find().toArray();
                   console.warn(data)
                 }

                 main();
# make a file for db connection name mongodb

       const {MongoClient}=require('mondodb')
       const url= "mongodb://localhost:27017"
       const client=new MongoClient(url);
       const databaseName='e-comm'


       async function dbconnect(){

       let result = client.connect();
       let db=result.db(databaseName);
       return db.collection('products');


       }
       module.exports=dbconnect();

       phir index.js mein import karen:
       const dbconnect=require('./mongodb')

# insert data from mongodb
make new file for insert data
import mongodb cnnection
insert single and muiltiple records
interciew question

# insert data from mongodb
     make new file for insert data:
     make new file naem insert.js:
     in insert.js:  
                   phle isme database connection ko import karte hai
                   const dbconnect=require('./mondodb');

                   const insert=async ()=>{
                     const db=await dbconnect();
                      const result = await db.insert(
                        [{
                           name:'note5', brand:'vivo',price:320,category:'mobile
                        },
                        { name:'max2', brand:'micromax',price:350,category:'phont'},
                        { name:'max2', brand:'micromax',price:350,category:'phont'},
}
                        ]
                      )
                     if(result.acknowledge){
                        console.log("data inserted")
                      }
                   }
                              
                    insert();          
# interview question
how to insert multiple data in mongodb
single data ko access kaise kar skte ha

# update data in mongodb
make new file for update data 
import mongodb connection
update single and multiple records
interview questions

# make file and and update data
    make a file update.js
    in update.js:   
                   const dbconnect=require('./mongodb');
                   const updatedata=async()=>{
                    let data =await dbconnect()

                     let result = await data.updateOne(
                        {name:'max5'},{
                        $set:{name:'max po 5',price:500}
                        }
                     })
                   agar ek se jyda record update karna hai to  updateOne ke jagah update likhen.

                   updatedata();
 interview qs. 

# delete data in mongodb

   make noew file for delete data
   import mongodb connection
   delete single and multiple records
   interview qs.
# make file and delete data

       make file name delete.js
                  in delete.js:
                                 const dbconnect=require('./mongodb')

                                 const deletedata= async()=>{
                                 let result = await data.deleteOne({name:'max pro 7'})
                                  let data = await dbconnect();
                                  if(result.acknowledged){
                                    console.log("record deleted")
                                  }
                                 }  
                                 deletedata(); 

                                 multiple record delete karna ho to deleteOne ke jagah deleteMany likhe
yadi apke database me record nahi hai usko apne delete kar diya to pta kaise chle> to deletedcount zero hoga 
isse error nahi ayga                                 