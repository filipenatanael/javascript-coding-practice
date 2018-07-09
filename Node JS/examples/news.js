var http = require('http');

http.createServer(function (req, res){

  let category =  req.url;

  switch (category) {
    case '/technology':
    res.end("<b>News about technology!<b>");
    break;
    case '/science':
    res.end("<b>News about science!<b>");
    break;
    default:
    res.end("<b>Home Portal!<b>")
  }

}).listen(3000);
