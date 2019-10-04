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


    // playerdashboard route loads playerdashboard.html
    app.get("/scoreboard", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/scoreboard.html"));
    });

  // sends to real text completion quiz
  app.get("/textcompletionquizreal", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/textcompletionquizreal.html"));
    
  });

  // playerdashboard route loads playerdashboard.html
  app.get("/readingcomprehensionquizpractice", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/readingcomprehensionquizpractice.html"));
  });

  // sends to real text completion quiz
  app.get("/readingcomprehensionreal", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/readingcomprehensionreal.html"));
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
