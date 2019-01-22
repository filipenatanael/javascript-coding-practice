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
    const connection = app.database.getConnection();
    const News = new app.src.models.News(connection);

    const body = req.body;

    req.assert('title', 'Title is required.').notEmpty();
    req.assert('summary', 'Summary is required.').notEmpty();
    req.assert('summary', 'Summary should have between 10 and 100 caracters.').len(10, 100)
    req.assert('author', 'Title is required.').notEmpty();
    // req.assert('published', 'Title is required.').notEmpty().isDate({format: 'DD-MM-YYYY'});
    req.assert('content', 'Title is required.').notEmpty();

    let erros = req.validationErrors();
    if (erros) {
      // go to form add news
      News.getAll(function(error, result) {
        res.render('news/index', { news: result, validation: erros })
      });
      return;
    }

    // body[fields] needs to be equal News[fields] to auto fill works
    News.save(body, function(error, result){
      res.redirect('/news');
      // res.render('/news/index', { news: result });
    });
  });

}
