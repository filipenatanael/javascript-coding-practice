module.exports = function(application) {

  application.get('/news/index', function(req, res){
    var connection = application.config.database();
    var news_model = application.app.models.news_model;

    news_model.getAll(connection, function(error, result) {
      res.render('news/index', { news: result })
    });
  });

  application.post('/news/store', function(req, res){
    let news = req.body;
    let connection = application.config.database();
    let news_model = application.app.models.news_model;

    news_model.save(news, connection, function(error, result){
      res.redirect('/news/index');
      //res.render('/news/index', { news: result });
    });
  });

}
