# Route Level middleware
route level
apply middleware on single route
make middleware in deffferernt file
appply middleware in the group of route

# route level middleware
        waise middleware jo single route ke upar kam karegega aur group route ke upar bhi
        sabhi route ke upar ke kam kar skta hai

        phle bala application level middleware
        
                  in index.js: 
                             make route
                             app.get('',(req,res=>{
                            
                             }))
                             app.get('/about',(req,res=>{
                            
                             }))
                             app.get('/contact',(req,res=>{
                            
                             }))
                             app.get('/home',(req,res=>{
                            
                             }))

                   kisi ek ke upar restriction
                   to phle applection middleware ko htna hai
                    jis rout pe laana hai uspar aise kare: 

                                 app.get('about',middlwarename,(req,res)=>{
                                    res.send("this is about page")
                                 })                   

                   middleware ko alag file me bhi rakh skate hai
                   phle ek file bnao 
                   puir usme module.exports karo
                   phir index.js me; const reqfilter=require('file name')     

                      const route = express.Router();
                      route.use(reqfilter)

                      agr apko about aur contact ke upar apply karna hai to

                           route.get('/about',(req,res=>{
                            res.send("this is about page")
                             }))
                             route.get('/contact',(req,res=>{
                            res.send("this is contact page")
                             }))

                    phit last me ye line add karo:  
                              app.use('/',route)    
                   middleware apply nahi karna hai to app.get karenge
# Route lavel middleware kya hota
application level vs route level middleware

application level globally apply hota hai
and middleware localy bhi ho skta hai aur globally bhi

# Install MongoDB
download DB 
install mongodb
set environment for mongo
mogodb compass tool 
interview question

# set enviorment
      in terminal : mongo 
        to check properly
      in terminal : show db
     go enviornment variable and set path of bin file

     GUI: mongo db me : check fill and connect par click karen.
                        connect karne pe 3 database dikhyga
                        delete bhi kar skte hai
                         click karen create database [ database name , collection name]
       in terminal: show db

# inteview qs.
how to set mongo db enviornment.
difference between mogodb and mysql.

# MongoDB Basic
    what is Mongo Db
    mongodb vs sql 
    mongodb basic commands
    interview question

    what is mongodb 
                  mongodb is nosql database
                  the data stored in a collection
                  collection don't have row and columns
                  data is stored in the form of object.
    NOSQL matlb:
                 oracal mysql ye sab structured database hai.
                 mongo database ke pass structure ke pass structure nahhi hai.
     collection:
                 collection ke andar row and columns nahi hota hai.
     sql ke andar sabhi database aaata hai.

     open the mongodb compass:
                             command: show dbs 
                                      use youtube  : isse youtube name ka databasse bnga
                                   youtube> db.createCollection('video')   : isse collection bnga database me
                                   show collections  : isse collection btyga ki kitna hai.
                                   db.video.drop()   : isse collection delete ho jyga 
                                   db.dropDatabase() : isse database delete ho jyga
                                   use admin : isse admin ho jyda
                                   db :  current db dikhyga



     in terminal: show dbs

# CRUD operation in MONGO db.
How to insert data collection 
how to check inserted data.
 how to update data.
  how to delete data
  interview questions.

  # CRUD:
          create database
          data insert karna with command line:   use e-comm
                                                 db.products.insertOne((name:'n43',brand:
                                                 'samsung', price: 250$, catagory:'mobile')) phir enter dbye
                                                 db.products.insertOne((name:'iphone',brand:
                                                 'apple', price: 250$, catagory:'mobile')) phir enter dbye
                                                  
                                                  to two data aa jyga
          Ui se data insert karen: add data pe click karen phir insert document pe click karen
          how to check inserted data : in command line: db.products.find()  phir enter bdyen
          how to update data:  in command line: db.products.updateOne((name: "m43").($set:(brand:"oppo"))) phir enter dbyen
          how to delete data: in command line: db.products.deleteOne((brand:"apple"))phir enter dbyen
# interview qs.
        what is CRUD operation: that means create,read,update aru delete
        How to insert,delete,read update
        what is mongodb?
        sql and mongodb ke bich difference?
                  




