
const express=require('express')
const app=express();
const mongoose=require('mongoose');
const databasename='e-commerce';
const collectionName='product';



    mongoose.connect(`mongodb://localhost:27017/${databasename}`);
  const productschema= new mongoose.Schema(
    {
        Name: String,
        Price: Number,
        Category: String,
        

    }
  )

  const modelfunction= async ()=>{
  const producModel= mongoose.model(`${collectionName}`,productschema)
  let data= new producModel(
      {
          Name:"karela",
          Price:100,
          Category:"vegetable"
          
      }
  )
  let result= await data.save();
}


// update data 
const updateInDb= async ()=>{
    const productModel=mongoose.model(`${collectionName}`,productschema) 
    const update= await productModel.updateMany(
        {Name:"potato"},
        {$set:{Price:600,Name:"onion"}}
    )
    
}

//delete data 

const deleteInDb= async ()=>{
    const productModel= mongoose.model(`${collectionName}`,productschema)
    const deletedata=await productModel.deleteMany({Name:'onion'});
    console.log(deletedata);
}

//find data

const findInDb=async()=>{
    const productModel= mongoose.model(`${collectionName}`,productschema)
    const finddata=await productModel.find()
    

    app.get('/',(req,res)=>{
        res.send(finddata)
    })

}

findInDb()
deleteInDb();
updateInDb();
modelfunction();
app.listen(3000);