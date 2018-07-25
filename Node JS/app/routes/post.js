module.exports = function(app) {
  app.get('/post', function(req, res) {
    // obj.directory.file -> app.config.database()
    var connection = app.config.database();
    var post_model = app.app.models.post_model;

    post_model.getPosts(connection, function(error, result) {
      res.render('post/post', { post: result })
    });

  });
}
