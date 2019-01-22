const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

var app = express();

/* Define constants */
const VIEWS_DIRECTORY = 'src/views';
const ROUTES_DIRECTORY = 'src/routes';
const MODALS_DIRECTORY = 'src/models';
const DATABASE_CONFIG = 'database/getConnection.js';

/* <%= EJS %> is a visualization engine, with it we can easily and simply transport data from the backend to the front end,
we basically managed to use javascript codes in the html of our pages. */

app.set('view engine', 'ejs');  // Set express engine to use EJS
app.set('views', VIEWS_DIRECTORY) // Set default directory to express

/* Works like a Middleware */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());


/* Consign makes applications easier to develop with logical file separation and automatic script loading.
Consign can be used to autoload models, routes, schemas, configs, controllers, object maps... etc... */
consign()
    .include(ROUTES_DIRECTORY)
    .then(DATABASE_CONFIG)
    .then(MODALS_DIRECTORY)
    .into(app);

module.exports = app;
