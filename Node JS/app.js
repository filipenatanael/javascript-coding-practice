var app = require('./config/server');

// Require Routes
// var home = require('./app/routes/home')(app);
// var admin = require('./app/routes/admin')(app);
// var news = require('./app/routes/news')(app);

app.listen(3000, function(){
  console.log('Running with express.');
});
