const fs = require('fs');
const requestHandler = (req,res) => {
  const url = req.url;
  const method = req.method;
  if(url === '/'){
    res.write('<html>');
    res.write('<head><title>This is Node</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form></body>');
    res.write('</html>');
    return res.end();
  }

  if(url === '/message' && method === 'POST'){
    const body = []
    req.on('data',(chunks)=>{
      body.push(chunks);
    });
    
    return req.on('end',()=>{
      const parsed = Buffer.concat(body).toString();
      const message = parsed.split('=')[1];
      fs.writeFile('message.txt',message,()=>{
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
      })
    })
  }

  res.write('<html>');
  res.write('<head><title>This is Node</title></head>');
  res.write('<body><h1>This is my node file</h1></body>');
  res.write('</html>');
  res.end();
}

module.exports = requestHandler;