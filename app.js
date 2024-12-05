const express = require("express");
const app = express();

// Define routes
app.get("/", (req, res) => {
  res.send("Hello, World this is the 4th deploy!");
});

module.exports = app; // Export the app, not the server
