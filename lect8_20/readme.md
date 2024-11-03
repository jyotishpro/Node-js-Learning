# what is packae file?
    project ka detail rakhata hai coding se ralated
    start your terminal and write: 
    npm init -y
# Node js single thread hai multithread
    ye single thred hai

# small challange for me
    question no.1.  how will you use node pacae of chalk
# Node module delete ho gya ho to use kaise install karen.
    for this run this command: npm install
# github pe without node module kaise push karen.

      for this you have make file.  .gitinore
      and with this you have to write node_modules folder:  /node_modules
 # Nodemon | time saving modul
      install: npm i nodemon -g
      # ye globally install hota hai
      for linux: sudo npm i nodemon -g
      to run this : npx nodemon main.js
# node js is async or sync
    ye async hai       
    1.run ifrst script 
    2. run second script 
      it willl not wait to finish 2nd script
    3 run third script
    4. continue
# make a simple API
     make a server:
           const http = require('http');
           http.createServer((req,res)=>{
           res.writeHead(200,{'Content-Type':'aplication\json})
           res.write(JSON.stringify({name:'jyotish kumar,email:'jyotish@gmail.com}))
           res.end();
           }).listen(6000) 
     see on postman: 
      step: select method- GET
      step: http:///localhost:5000/
      step: send pe click karen

     alag js file banay:
                       const data=  {name:'jyotish kumar,email:'jyotish@gmail.com} 
                       module.exports=data;
      phir apne main file mein import kare: 
                         const data=require('./data') 
      phir data ko pass kare:   
                 res.write(JSON.stringify({name:'jyotish kumar,email:'jyotish@gmail.com})) 
           isko likhne ke bajay hm ye likh skte hai:

                    res.write(JSON.stringify(data));
       aur ham data ko array ke andar bhi likh skte hai.
# status me 200 ka matlab kya hai.
     500: server me error hai
     ye sab padna hai                    



                