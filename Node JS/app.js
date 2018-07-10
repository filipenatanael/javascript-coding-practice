var express = require('express'); // Return a function, i can use also require('express')();
var app = express();

// Set express engine to use EJS
app.set('view engine', 'ejs');

// res.send similar to res.end
// app.get('/', function(req, res){
//   res.send('<b>Home Portal!<b>');
// });

app.get('/', function(req, res){
  res.render('home/index');
});

app.get('/form-add-news', function(req, res){
  res.render('admin/form-add-news');
});

app.get('/news', function(req, res){
  res.render('news/news');
});

app.get('/technology', function(req, res){
  res.render('session/technology');
});

app.listen(3000, function(){
  console.log('Running with express.');
});
