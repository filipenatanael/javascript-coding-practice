module.exports = function(app) {
  app.get('/news/show', function(req, res){
    app.src.controllers.NewsController.show(app, req, res);
  });

  app.post('/news/store', function(req, res){
    app.src.controllers.NewsController.store(app, req, res);
  });

  // app.get('/news', function(req, res){
  //   const connection = app.database.getConnection();
  //   const News = new app.src.models.News(app.database.getConnection());
  //
  //   News.getAll(function(error, result) {
  //     res.render('news/index', { news: result })
  //   });
  //
  //   connection.end();
  // });

}
