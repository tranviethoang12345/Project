// Import NPM
const express = require("express");
const app = express();
const session = require("express-session");
const bodyParser = require("body-parser");
const cors = require("cors");

const fs = require("fs");
const path = require("path");

const server = require("http").Server(app);
const io = require("socket.io")(server);

const morgan = require("morgan");
const { v4: uuidV4 } = require("uuid");

// Config Env
require("dotenv").config({ path: ".env" });

// Connect Database
require("./config/database");

// Setting for accepting post form data (body-parser)
// parse requests of content-type - application/json
app.use(bodyParser.json({ limit: "30mb", extended: true })); // Limit the Img which are heavy
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Set View Engine
app.set("view engine", "ejs");
// Load Static Assets
app.set("views", path.join(__dirname, "views"));
app.use("/css", express.static(path.join(__dirname, "public/assets/css")));
app.use("/img", express.static(path.join(__dirname, "public/assets/img")));
app.use("/font", express.static(path.join(__dirname, "public/assets/font")));
app.use("/js", express.static(path.join(__dirname, "public/assets/js")));
app.use("/vendor", express.static(path.join(__dirname, "public/assets/vendor")));

// Create session
app.use(
  session({
    secret: uuidV4(),
    resave: false,
    saveUninitialized: true,
  })
);

// Run when client connects
io.on("connection", (socket) => {
  // Welcome current user
  socket.emit("message", "Welcome to ");

  // Broadcast when a user connects
  socket.broadcast.emit("message", "A user has joined the chat");

  // Runs when client disconnects
  socket.on("disconnect", () => {
    io.emit("message", "A user has left");
  });
});

// Morgan Logger
// let accessLogStream = fs.createWriteStream(path.join(__dirname, 'log/access.log'), { flags: 'a'})
// app.use(morgan('tiny', { stream: accessLogStream }));
app.use(morgan('tiny'));


// Default Admin Account
const defaultAccount = require("./middleware/defaultAccount.middleware");
app.use(defaultAccount.adminAccount);

// Import Routes
const postRoutes = require("./config/routes");
// Routes
app.use("/", postRoutes);

// Import Controller
const errorPage = require('./controllers/error/error.controller')
// Error Page
app.use(errorPage.get404);

module.exports = app;
