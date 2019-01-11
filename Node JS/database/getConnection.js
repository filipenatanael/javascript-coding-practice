var mysql = require('mysql');

var connectToMySQL = function() {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'toor',
    database: 'node_js_pratice'
  });
}

module.exports = function() {
  return connectToMySQL;
}
