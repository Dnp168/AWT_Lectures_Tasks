const express= require('express');
const helmet=require('helmet');
const https= require('https');
const path= require('path');
const fs= require('fs');
const app=express();
app.use(helmet());

app.get('/',(req,res)=>{
    res.send("<h1> Hello from Express server </h1>");
})

app.get('/home',(req,res)=>{
  res.send("<h1> welcome to home page </h1>");
})

//app.get('/html',(req,res)=>{
  //  res.sendFile(_dirname+'/html/index.html');
  //})

//const sslServer=https.createServer({
 // key:fs.readFileSync(path.join(_dirname,'certi','key.pem')),
  //cert:fs.readFileSync(path.join(_dirname,'certi','cert.pem')),
 // },app)


app.listen(3030,()=> console.log('server listening on port number 3030'));

