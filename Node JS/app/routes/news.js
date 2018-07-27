module.exports = function(app) {

  app.get('/news/index', function(req, res){
    var connection = app.config.database()
    connection.query('select * from news', function(error, result){
      res.render('news/index', { news: result });
    });
  });

  app.post('/news/store', function(req, res){
    let news = req.body;
    res.send('Chegou aqui....');
  });

}
