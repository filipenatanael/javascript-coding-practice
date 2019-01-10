module.exports = function(app) {

  app.get('/news', function(req, res){
    const connection = app.database.createConnection();
    const News = new app.src.models.News;

    News.getAll(connection, function(error, result) {
      res.render('news/index', { news: result })
    });
  });

  app.post('/news/store', function(req, res){
    const body = req.body;
    const connection = app.database.createConnection();
    const News = new app.src.models.News;
    // body[fields] needs to be equal News[fields] to auto fill works
    News.save(body, connection, function(error, result){
      res.redirect('/news');
      // res.render('/news/index', { news: result });
    });
  });

}
