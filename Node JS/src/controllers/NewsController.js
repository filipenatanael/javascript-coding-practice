
module.exports.show = function(app, req, res) {
  const connection = app.database.getConnection();
  const News = new app.src.models.News(app.database.getConnection());

  News.getAll(function(error, result) {
    res.render('news/index', { news: result })
  });
}

module.exports.store = function(app, req, res) {
  const connection = app.database.getConnection();
  const News = new app.src.models.News(connection);

  const body = req.body;

  req.assert('title', '[String] Title is required.').notEmpty().isAlpha();
  req.assert('summary', '[String] Summary is required.').notEmpty().isAlpha();
  req.assert('summary', 'Summary should have between 10 and 100 caracters.').len(10, 100)
  req.assert('author', '[String] Author is required.').notEmpty().isAlpha();
  req.assert('published', '[Date] Published is required.').notEmpty();
  req.assert('content', '[Text] Content is required.').notEmpty().isAlpha();

  let erros = req.validationErrors();
  if (erros) {
    // go to form add news
    News.getAll(function(error, result) {
      res.render('news/index', { news: body, validation: erros })
    });
    return;
  }

  // body[fields] needs to be equal News[fields] to auto fill works
  News.save(body, function(error, result){
    // res.redirect('/news');
    res.render('/news/index', { news: result });
  });
}
