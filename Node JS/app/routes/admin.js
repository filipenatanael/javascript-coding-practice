module.exports = function(app) {

  app.get('/form-add-news', function(req, res){
    res.render('admin/form-add-news');
  });

  app.get('/admin/form-add-users', function(req, res){
    res.render('admin/form-add-news');
  });
};
