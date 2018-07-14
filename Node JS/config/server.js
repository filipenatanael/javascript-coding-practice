var express = require('express');
var app = express();
app.set('view engine', 'ejs');  // Set express engine to use EJS
app.set('views', './app/views') // Set default directory to express

module.exports = app;
