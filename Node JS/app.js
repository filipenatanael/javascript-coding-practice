var express = require('express'); // Return a function, i can use also require('express')();
var app = express();

app.get('/', function(req, res){
  res.send('<b>Home Portal!<b>')
});

app.get('/technology', function(req, res){
  res.send('<b>News about technology!<b>')
});

app.listen(3000, function(){
  console.log('Running with express.');
});
