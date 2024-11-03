# Post API wirh mongoose
 make config file for mngodb
 make psot route 
 get data from the postman and save in db
  interview question

  # POst api with mongoose

        make file confing.js
                             const mongoose= require('mongoose')
                             mongoose.connect("mongodb://localhost:27017/databasename")



        make file product.js: iske andar schema aur models define karenge.
          in product.js:
                        const mongoose= require('mongoose')
                        ocnst productSchema= new mongoose.Schema(
                            {
                                name: string,
                                price: number,
                                brand: string,
                                category: string
                            }
                        );

                       module.exports= mongoose.model('collectionName',productSchema);
                       ab index page me jao

                       in index.js:
                                    const express= require('express');
                                    require('./config');
                                    const product= require('./product');

                                    const app= express();

                                    app.post("/create",async(req,res)=>{
                                        let data = new product(req.body)//yaha data postman se ayga woha se send data karenge
                                        let result =await  data.save();
                                        console.log(req.body)
                                        res.send(result);
                                    })

                                    app.listen(3000);


                                    ab postman me check kare ki chal raha hai ya nahi

                                    phir body pass karo body me jakar json select karo

                                    {
                                      "name":"samsung s35",
                                      "price":8888,
                                      "brand":"samsung",


                                    }

                                    ab isko get kaerna hai to index.js me jao 
                                    aur get kero:
                                                 app.use(express.json())
                                                 req.body


                                               
# get , delete and put api
examples of get mothod api
example of delete mothod api
example of put method api
interview question

# GET , DELETE AND PUT API
      
      const express= require('express');
      require('./config');
      const product= require("./product");
      const app = express();

      app.use(express.json());
      app.post("./create",async(req,res)=>{
        let data = new product(req.body);
        const result= await data.save();
      })
      //read data
      app.get("./list",async (req,res)=>{
       let data = await product.find();
       res.send(data)
      })

      ///delete data
      app.delete("./delete:_id",async (req,res)=>{

        console.log(req.params)
       let data = await product.deleteOne(req.params);
       res.send(data)

      })

      /// updata data

      app.put("./update:_id",async (req,res)=>{

        console.log(req.params)
       let data = await product.updateOne(
        {req.params},//condition
        {
            $set:req.body //body se data bhejna pdgam// id ko select karke url se send karen         //  $set updated dataa
        }
       );
       res.send(data)

      })

      app.listen(3000)
