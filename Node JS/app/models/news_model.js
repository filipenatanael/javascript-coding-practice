module.exports = function() {
  /* get a all news available */
  this.getAllNews = function(connection, callback) {
    connection.query('select * from news', callback)
  }

  /* get a specific news available */
  this.getSpecificNews = function(connection, callback) {
    connection.query('select * from news where id_news = 3', callback)
  }

  return this;
}
