// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // playerdashboard route loads playerdashboard.html
  app.get("/textcompletionquizpractice", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/textcompletionquizpractice.html"));
  });

  // scoreboard route loads scoreboard.html
  app.get("/scoreboard", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/scoreboard.html"));
  });

  // login route loads login.html
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  //signup route loads signup.html
  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/admin", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/admin.html"));ut
  });

};
