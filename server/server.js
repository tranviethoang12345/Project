const server = require("./src/index");

// Port
const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`Server running successfully at http://localhost:${PORT}`);
});
