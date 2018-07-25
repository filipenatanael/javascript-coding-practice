module.exports = function(app) {
  app.get('/post', function(req, res) {
    var connection = app.config.database();
    
    connection.query('select * from news where id_news = 3', function(error, result) {
      res.render('post/post', { post: result })
    });
  });
}
