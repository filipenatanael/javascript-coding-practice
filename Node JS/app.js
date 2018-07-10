var express = require('express'); // Return a function, i can use also require('express')();
var app = express();

// Set express engine to use EJS
app.set('view engine', 'ejs');

app.get('/technology', function(req, res){
  res.render('session/technology');
});


app.get('/', function(req, res){
  res.send('<b>Home Portal!<b>');
});

app.listen(3000, function(){
  console.log('Running with express.');
});
