var Connection = require('../../config/database');

module.exports = function(app) {
  app.get('/news', function(req, res){

    var connection = Connection();

    connection.query('select * from news', function(error, result){
      res.render('news/news', { news: result });
    });

  });
};
