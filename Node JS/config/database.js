var mysql = require('mysql');

module.exports = function() {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'toor',
    database: 'node_js_pratice'
  });
}
