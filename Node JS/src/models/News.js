class News {
  /* Get a all news available */
  getAll(connection, callback) {
    connection.query('select * from news', callback)
  }

  /* Get a specific news available */
  getSpecific(connection, callback) {
    connection.query('select * from news where id_news = 3', callback)
  }

  /* Save a news on database */
  save(news, connection, callback){
    connection.query('insert into news set ?', news, callback)
  }
}

module.exports = function() {
  return News;
}

// -----------------------------------------------------------------
// Classes based on traditional function
//
// function News() { }
//
// News.prototype.getAll(connection, callback) {
//   connection.query('select * from news', callback)
// }
//
// News.prototype.getSpecific(connection, callback) {
//   connection.query('select * from news where id_news = 3', callback)
// }
//
// News.prototype.save(news, connection, callback){
//   connection.query('insert into news set ?', news, callback)
// }
//
// module.exports = function() {
//   return News;
// }
