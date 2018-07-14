var app = require('./config/server');

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

// app.get('/', function(req, res){
//   res.send('<b>Home Portal!<b>');
// });

app.listen(3000, function(){
  console.log('Running with express.');
});
