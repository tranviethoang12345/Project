const server = require("./src/index");

// Port
const port = process.env.PORT || 3030;
server.listen(port, () => {
  console.log(`Server running successfully at http://localhost:${port}`);
});
