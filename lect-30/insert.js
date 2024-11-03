const dbconnect=require('./mongodb');

const insert=async()=>{
let db=await dbconnect();
let result =await db.insert([
    {name: 'jyotish',email:"jyotish@gmail.com"},
    {name: 'raghav',email:"jyotish@gmail.com"},
    {name: 'rajesh',email:"jyotish@gmail.com"}
])

}

insert();