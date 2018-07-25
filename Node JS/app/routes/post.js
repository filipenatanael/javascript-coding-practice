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
