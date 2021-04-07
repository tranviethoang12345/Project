// Import NPM
const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const server = require('http').Server(app);
const io = require('socket.io')(server);
const { v4: uuidV4 } = require('uuid');

// Config Env
require('dotenv').config({ path: '.env' });

// Connect Database
require('./config/database');

// log requests
app.use(morgan('tiny'));

// Setting for accepting post form data (body-parser)
// parse requests of content-type - application/json
app.use(bodyParser.json({ limit: '30mb', extended: true }));
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// Set View Engine
app.set('view engine', 'ejs');
// Load Static Assets
app.set('views', path.join(__dirname, 'views'));
app.use('/css', express.static(path.join(__dirname, 'public/assets/css')));
app.use('/img', express.static(path.join(__dirname, 'public/assets/img')));
app.use('/font', express.static(path.join(__dirname, 'public/assets/font')));
app.use('/js', express.static(path.join(__dirname, 'public/assets/js')));

// Create session
app.use(
  session({
    secret: uuidV4(),
    resave: false,
    saveUninitialized: true,
  })
);

// Run when client connects
io.on('connection', socket => {
  // Welcome current user
  socket.emit('message', 'Welcome to ')

  // Broadcast when a user connects
  socket.broadcast.emit('message', 'A user has joined the chat');

  // Runs when client disconnects
  socket.on('disconnect', () => {
    io.emit('message', 'A user has left')
  })
})

// Morgan Logger
app.get;

// Default Admin Account
const defaultAccount = require('./middleware/defaultAccount.middleware');
app.use(defaultAccount.adminAccount);

// Import Routes
const postRoutes = require('./config/routes');
// Routes
app.use('/', postRoutes);

module.exports = app;
