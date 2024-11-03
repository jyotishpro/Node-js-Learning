# Take input from command line
     in terminal : node index.js 100 anil 
     enter karne par (100, anil ) input hona chahiye
# create file with input

# input ko get karna
    run this : console.log(process.argv)
    in terminal: node index.js hello
    then hello ko bhi print karega

    to get this ====  console.log(process.argv[2])
# create file with input
      in index.js:   const fs= require('fs');
                    const input= process.argv;
                    if(input[2]=='add'){
                     fs.writeFileSync(input[3],input[4]);
                    }
                    else if(input[2]=='remove'){
                        fs.unlinkSync(input[3])
                    }
                    else{
                        console.lgo("invalid input)
                    }
      in terminal:  node index.js apple.txt `this is a fruit`   
                   node index.js add orange.txt 'this is a clor and fruit'
                   node index.js remove orange.txt   
                   node index.js remove apple.txt   
# show file list
make files in a folder, 
use path moduel,
get file names and print ,
interview question   

# create files in folder
       in index.js:    const fs=require('fs')
                       fs.writeFileSync('apple.txt','this is a apple file) //remove

                       const path=require('path')
                       const dirPath=path.join(__dirname,'files');
                       console.warn(dirPath)
     loop ke through file create karna 
     hme 5 file create karna hai.
                       
                       for(i=0;i<5;i++){
                        fs.writeFileSunc('hello'+i+'.txt'," a simple text file")//remove
                        fs.writeFileSunc(dirpath+`hello${i}.txt`," a simple text file")

                       }
# get files
                       fs.readdir(dirPath,(err,files)=>{
                       files.forEach((item)=>{
                        console.log("file name is:",item)
                       })
                       })
# interview question
question. kya mai kisi aur drive se access kar skte hai 
ans:  nahi ,kyuni node js web server pe kam karta hai to folder bhi as a server kam karne lgta        hai                       
                                          
# crud with file system
 make file, read file , update file , rename file , delete file , interview question

 # cRUd
              ek file banana hai curd name ka
       in index.js : const fs = require('fs')
                     const path = require('path')
                     const dirPath= path.join(__dirname,'curd')
                     const filePath=`${path}/apple.txt`;
                     fs.writeFileSync(filePath,'this is a simple text file')
 # read karna file ko
            inindex.js:  fs.readFile(filePath,'utf8,(err,item)=>{
             console.log(item)
            })  
# file update karna ho
            inindex.js:  fs.appendFile(filePath,'and file naem is apple.txt',(err)=>{
            if(!err)  console.log("file is uupdated")
            }) 
# rename file karna hai
           in index.js:  fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
            if(!err) console.lgo("file name is updated")
           })   
# delete file
            fs.unlinkSync(`${dirPath}/fruit.txt`)
# inteview qs.
      buffer kya hota hai: 
              temporary memory location
               node js ko thida memory chahiye apne operation ko perform karne ke liye to usi ko buffer bola jata hai.                                
                                                              
