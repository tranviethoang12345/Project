// Import NPM
const express = require("express");
const app = express();
const path = require("path");
const morgan = require('morgan');
const bodyParser = require("body-parser");
const session = require("express-session");
const { v4: uuidv4 } = require("uuid");

// Config Env
require("dotenv").config({path:'.env'});

// Connect Database
require("./config/database");

// log requests
app.use(morgan('tiny'));

// Setting for accepting post form data (body-parser)
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Set View Engine
app.set("view engine", "ejs");
// Load Static Assets
app.set("views", path.join(__dirname, "views"));
app.use("/css", express.static(path.join(__dirname, "public/assets/css")));
app.use("/img", express.static(path.join(__dirname, "public/assets/img")));
app.use("/font", express.static(path.join(__dirname, "public/assets/font")));
app.use("/js", express.static(path.join(__dirname, "public/assets/js")));

// Create random ID
app.use(
  session({
    secret: uuidv4(),
    resave: false,
    saveUninitialized: true,
  })
);

// Morgan Logger
app.get

// Default Admin Account
const defaultAccount = require("./middleware/defaultAccount.middleware");
app.use(defaultAccount.adminAccount);

// Import Routes
const routes = require("./config/routes");
// Routes
app.use("/", routes);

module.exports = app;
