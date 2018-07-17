module.exports = function(app) {
  app.get('/news', function(req, res){

    var mysql = require('mysql');

    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'toor',
      database: 'node_js_pratice'
    });

    connection.query('select * from news', function(error, result){
      res.render('news/news', { news: result });
    });

  });
};
