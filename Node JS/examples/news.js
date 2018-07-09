var http = require('http');

http.createServer(function (req, res){
  res.end("News Portal!");
}).listen(3000);
