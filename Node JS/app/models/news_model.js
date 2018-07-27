module.exports = function() {
  /* Get a all news available */
  this.getAll = function(connection, callback) {
    connection.query('select * from news', callback)
  }

  /* Get a specific news available */
  this.getSpecific = function(connection, callback) {
    connection.query('select * from news where id_news = 3', callback)
  }

  /* Save a news on database */
  this.save = function(news, connection, callback){
    connection.query('insert into news set ?', news, callback)
  }

  return this;
}
