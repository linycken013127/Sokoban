var http = require('http');

http.createServer((request, response)=>{
  let fs = require('fs')

  fs.readFile('index.html',(err, data)=>{
    response.writeHead(200,{
      'Content-Type' : 'text/html'
    });
    response.write(data);
    response.end();
});
}).listen(8081);

console.log('server running at http://127.0.0.1:8081/');
