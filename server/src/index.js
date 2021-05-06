// Import NPM
const app = require("express")();
// const app = express();
const session = require("express-session");
const bodyParser = require("body-parser");
const cors = require("cors");

const server = require("http").Server(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    method: ["GET", "POST"],
  },
});

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

// Create session
app.use(
  session({
    secret: uuidV4(),
    resave: false,
    saveUninitialized: true,
  })
);

// Run when client connects
io.on('connection', (socket) => {
  // Welcome current user
  console.log(socket);

  if (socket.result !== undefined  && socket.result.id !== undefined) {
    socket.emit('me', socket.result.id);
  }

  
   // Runs when client disconnects
  socket.on('disconnect', () => {
    socket.broadcast.emit('callEnded');
  });

  // Broadcast when a user connects
  socket.on('callUser', ({ userToCall, signalData, from, name }) => {
    io.to(userToCall).emit('callUser', { signal: signalData, from, name });
  });

  socket.on('answerCall', (data) => {
    io.to(data.to).emit('callAccepted', data.signal);
  });
});

// Morgan Logger
// let accessLogStream = fs.createWriteStream(path.join(__dirname, 'log/access.log'), { flags: 'a'})
// app.use(morgan('tiny', { stream: accessLogStream }));
app.use(morgan("tiny"));

// Default Admin Account
const defaultAccount = require("./middleware/defaultAccount.middleware");
app.use(defaultAccount.adminAccount);

// Import Routes
const postRoutes = require("./config/routes");
// Routes
app.use("/", postRoutes);

// Testing
app.get('/', (req, res) => {
  res.send('Hello to Backend API!')
})

module.exports = server;
