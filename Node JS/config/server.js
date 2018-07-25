var express = require('express');
var consign = require('consign');

var app = express();

/* Define constants */
const VIEWS_DIRECTORY = './app/views';
const ROUTES_DIRECTORY = 'app/routes';
const MODALS_DIRECTORY = 'app/models';
const DATABASE_CONFIG = 'config/database.js';

app.set('view engine', 'ejs');  // Set express engine to use EJS
app.set('views', VIEWS_DIRECTORY) // Set default directory to express

consign()
    .include(ROUTES_DIRECTORY)
    .then(DATABASE_CONFIG)
    .then(MODALS_DIRECTORY)
    .into(app);

module.exports = app;
