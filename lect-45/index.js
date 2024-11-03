const mysql = require('mysql');
const con = mysql.createConnection(
    {
        host: `localhost`,
        user: "root",
        password: "Jyotish@123",
        database: "jyotish"
    }
);

con.connect((err)=>{
    if(err){
        console.warn("error")
    } else {
        console.warn("connected successfully")
    }
})

con.query("select * from jyotish ", (err,result)=>{
console.warn("result",result)
})