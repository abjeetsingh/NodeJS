/* 
A few Core Modules that we sould know about are

Http - Hyper Text Transfer Protocol --> launch serves or send request
Https - Hyper Text Transfer Protocol Secure
fs- File System
os - operating system
path - Constructing path to file systems as mac , lenux and windows use differnet paths


*/ 


const http = require('http');
function rqListner(req,res) {
  // console.log(req.url,req.method, req.headers);
  // process.exit(); // we generally do not close the server since, if we do so then the server will not be accessible to the user and we want the server to always listen to the requests

  const url = req.url;
  const method = req.method;
  if(url === '/'){
    res.write('<html>');
    res.write('<head><title>MY NODE</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name ="message"><button type = "submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }

  if(url === "/message" && method === "POST" ){
    const fs = require('fs');
    const body = [];
    req.on('data',(chunk)=>{
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end',()=>{
      const parsed = Buffer.concat(body).toString();
      const message = parsed.split('=')[1];
      console.log(message);
      fs.writeFileSync('message.txt',message);
    })
    // fs.write('dummy')
    // res.writeHead(302,{})
    res.statusCode = 302;
    res.setHeader('Location','/');
    return res.end();
  }
  res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>MY NODE</title></head>');
  res.write('<body><h1>This is my JS Node Html</h1></body>');
  res.write('</html>');
  res.end();
}
const server = http.createServer(rqListner);
server.listen(3000);