module.exports = function() {
  this.getPosts(connection, callback){
    connection.query('select * from news where id_news = 3', callback);
  }
}
