# start with mongoose
what is mongoose 
difference between mongoose vs mongodb package
install mongooose 
what is schemas
what is model
connect node js and mongodb with mongoose

# start with mongoose

     mongoose ek npm ka package hai 
     mongoose kya karta hai: ye thoda advance chije deta hai as compare mongodb
                             mongodb e andar schema aur model nahi hota hai.

          ham jo field set kare wohi ho aur koi dusra aakar add na kar de to yah mongoose ke andar schema bnakar rok skte hai. but mongodb ke andar nahi rok skte.

          ham iska type define kar skte hai isme. mongodb ke andar nahi kar skte hai
          isme kar skte hai different type value int, string etc.

          validations bgera apply kar skte hai, field bagera kar skte hai.

          schema aur model kya hota hai...

          for installation :
           in terminal:   npm i mongoose
           the mongoose package install ho jyga 

           in index.js: 
            
            phle isme extra field ko insert karne se rokunga:
                    
                            const mongoose=require('mongoose')
                            
                            const main= async ()=>{
                             await mongoose.connect("mongodb://localhost:27017/e-comm")

                             const productschema= new mongoose.Schema({
                                name:string,
                                price:Number
                             });
                            const productsmodel = mongoose.model('products',productschema);
                            let data = new productmodel({name:"m7",price:1000});
                            let result =await data.save()
                             console.log(result)
                            }

                            main();

                            
            schema kya hota hai:
               ye database ke field ko validate karta hai .
               mai five field banuga aur use sschema ke andar validation lganyenge
                
                jitne bhi field hota hai use schema kahte hai
                aur model un schema ko use karke nodejs aur mongodb ko connect karta hai.

           model kya hota hai:
             model basically apke node js ko mongodb se connect karta hai.
             yahan structure hota hai pura ke pura 
# CRUD operation with mongoose
update record
delete record
find and read result

# CURD OPERATION
     
     In index.js:
          
          const mongoose=require('mongoose');

             await mongoose.connect("mongodb://localhost:27017/e-comm);
             const productschema= new Schema({
                name: string,
                price: number,
                brand: string,
                category: string
             })
             jb tak schema ke andar usko define nahi karenge tab tk data add nahi kar skte hai
          const saveindb= async ()=>{
           const product= mongoose.model('product',productschema);
           let data= new product({
            name:'max19', 
            price:200,
            brand:"apple",
            category:"mobile"
            })
           const result = await data.save();
           console.result();   
          }

          saveindb()
         
         how to update data with mongoose

          const updateindb=async()=>{
            const product= mongoose.model('product',productschema)
            let data = await product.updateOne(
                {name:'max19"},
                {
                    $set:{price:700,name:'max 8'}
                }
            )
            cosnole.log(data);

          }
          updateindb();


          delete operation:

          const deleteindb=async()=>{
            const product= mongoose.model('product',productschema)
            let data = await product.deleteOne({name:'max 8'})
            console.log(data);

          }

          deleteindb();

          how to read data with mongoose

          const findindb=()=>{
           const product= mongoose.model('product',productschema)
           let data = await product.find({name:'max 19'})

          }