module.exports = function(application) {

  application.get('/news/index', function(req, res){
    var connection = application.config.database();
    var news_model = application.app.models.news_model;

    post_model.getAllNews(connection, function(error, result) {
      res.render('news/index', { post: result })
    });
    // connection.query('select * from news', function(error, result){
    //   res.render('news/index', { news: result });
    // });
  });

  application.post('/news/store', function(req, res){
    let connection app.config.database();
    let news_model = application.app.models.news_model;

    news_model.

    let news = req.body;
    res.send(news);
  });

}


module.exports = function(application) {
  application.get('/post', function(req, res) {
    // obj.directory.file -> app.config.database()
    var connection = application.config.database();
    var post_model = application.app.models.post_model;

    post_model.getPost(connection, function(error, result) {
      res.render('post/post', { post: result })
    });

  });
}
