const fs=require('fs')
const path = require('path')
const dirpath=path.join(__dirname,'crud')
const filepath=`${dirpath}/apple.text`
fs.writeFileSync(filepath,"this is simple apple text path bro")
fs.readFile(filepath,'utf-8',(err,item)=>{
console.log(item)
})