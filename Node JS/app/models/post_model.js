module.exports = function() {

  this.getPosts = function(connection, callback) {
    connection.query('select * from news where id_news = 3', callback);
  }
  return this;
}
