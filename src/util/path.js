const express = require("express");
const app = express();
const path = require("path");

app.use("/controllers", express.static(path.join(__dirname, "controllers")));
app.use("/static", express.static(path.join(__dirname, "public")));
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

module.exports = app