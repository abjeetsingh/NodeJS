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
  console.log(req);
  process.exit();
}
const server = http.createServer(rqListner);
server.listen(3000);