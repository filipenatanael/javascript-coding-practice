module.exports = function() {

  this.getPost = function(connection, callback) {
    connection.query('select * from news where id_news = 3', callback)
  }

  this.getPosts = function(connection, callback) {
    connection.query('select * from news', callback)
  }

  return this;
}
