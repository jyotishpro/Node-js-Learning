const dbconnect=require('./mongodb')

const update=async()=>{
    let result = await dbconnect;
    let updatedata=await result.updateMany(
        {name:'vivoY15'},{$set:{name:'samsung s 24 ultra',price:100000}},
        {name:'oppo12'},{$set:{name:'apple',price:140000}}
    )
}
update();