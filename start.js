const http = require("http")

http.createServer(function(request, response){
    response.writeHead(200, {'content-type': 'text/html'})
    response.end('<i><b>Hello World, Welcome to NodeJS</b></i>')
}).listen(3001)

