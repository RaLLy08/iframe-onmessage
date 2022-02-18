const http = require('http');
const fs = require('fs');


const server = http.createServer((request, response) => {
  const fileUri = "." + request.url;

  fs.readFile(fileUri, (error,data) => {

      if(error){
        response.writeHead(302, {
          'Location': '/index.html',
          'Content-type':'text/html'
        });
        response.end()
      } else {
          response.writeHead(202,{"Content-type":"text/html"});
          response.end(data);
      }
  });
});

server.listen(3000, () => {
  console.log('Port: ' + 3000);
});