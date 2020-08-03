// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// Data========================================================
// create  arrays
var tables = [];
var waitlist = [];
// Create a set of routes for getting and posting table data
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.get("/reserve", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "reserve.html"));
});
app.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "tables.html"));
});
//display
app.get("/api/tables", function (req, res) {
  return res.json(tables);
});
app.get("/api/waitlist", function (req, res) {
  return res.json(waitlist);
});
//POST
app.post("/api/reserve", function (req, res) {
  var newReserve = req.body;
  //tables is available
  if (tables.length <= 5) {
    tables.push(newReserve);
    return res.json(tables);
  }
  //table is full
  else if (tables.length > 5) {
    waiting.push(newReserve);
    return res.json(waitlist);
  }
});
