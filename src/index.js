// Import NPM
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const { v4: uuidv4} = require('uuid');
require('dotenv').config();

// Connect Database
require('./config/database');

// Setting for accepting post form data (body-parser)
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Engine
app.set('view engine', 'ejs');
// Load Static Assets
app.set('views', path.join(__dirname, 'views'));
app.use('/static', express.static(path.join(__dirname, 'public'))); 
app.use('/assets',express.static(path.join(__dirname, 'public/assets')));

// Create random ID
app.use(session({
  secret: uuidv4(),
  resave: false,
  saveUninitialized: true
}));

// Default Admin Account
const defaultAccount = require('./middleware/defaultAccount.middleware');
app.use(defaultAccount.adminAccount);

// Import Routes
const routes = require('./config/routes');
// Routes
app.use('/', routes);

module.exports = app;