const dbconnect=require('./mongodb.js')

const insertdata=async()=>{
    let result=await dbconnect;
    let findd=await result.find().toArray()
    let inserted=await result.insertMany([
        {name:'vivoY15',brand:'vivo',price:10000,category:'mobile'},
        {name:'oppo12',brand:'oppo',price:10000,category:'mobile'}
    ])
    console.log(findd)
    // let diff= await result.insertMany([
    //     {name:'nokia15',brand:'Nokia',price:500},
    //     {name:'vivoy15',brand:'vivo',price:10000},
    //     {name:'moto45',brand:'motoroal',price:5000}
    // ])
    // if(diff.acknowledged){
    //     console.log("data inserted")
    //  }
}

insertdata();