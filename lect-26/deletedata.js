const dbconnect=require('./mongodb')

const deltedata=async()=>{
    let result = await dbconnect;
    let delte=await result.deleteMany(
        {name:'vivoY15'},
        {name:'oppo12'}
    );
}
deltedata();