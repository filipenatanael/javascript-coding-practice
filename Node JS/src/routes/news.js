module.exports = function(app) {

  app.get('/news', function(req, res){
    const connection = app.database.getConnection();
    const News = new app.src.models.News(app.database.getConnection());

    News.getAll(function(error, result) {
      res.render('news/index', { news: result })
    });

    connection.end();
  });

  app.post('/news/store', function(req, res){
    const body = req.body;
    const connection = app.database.getConnection();
    const News = new app.src.models.News(connection);
    // body[fields] needs to be equal News[fields] to auto fill works
    News.save(body, function(error, result){
      res.redirect('/news');
      // res.render('/news/index', { news: result });
    });
  });

}
