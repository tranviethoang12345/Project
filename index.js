// Import NPM
const app = require('express')();
const bodyParser = require('body-parser');
require('dotenv').config();

// Connect Database
require('./src/config/database');
const defaultAccount = require('./src/middleware/defaultAccount.middleware');

// Import Routes
const routes = require('./src/config/routes');

// Setting for accepting post form data (body-parser)
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Default Admin Account
app.use(defaultAccount.adminAccount);

// Routes
app.use('/', routes);

// Port
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server running successfully on port ${port}`);
})