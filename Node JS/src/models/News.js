class News {
  constructor(connection) {
    this.connection = connection;
  }
  /* Get a all news available */
  getAll(callback) {
    this.connection.query('select * from news', callback)
  }

  /* Get a specific news available */
  getSpecific(callback) {
    this.connection.query('select * from news where id_news = 3', callback)
  }

  /* Save a news on database */
  save(news, callback){
    this.connection.query('insert into news set ?', news, callback)
  }
}

module.exports = function() {
  return News;
}

// -----------------------------------------------------------------
// Classes based on traditional function
//
// function News(connection) {
//    this.connection = connection;
// }
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
