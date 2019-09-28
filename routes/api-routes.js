// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the questions
  app.get("/api/textcompletionq", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.TextCompletionQ.findAll({}).then(function(textcompletedb) {
      // We have access to the todos as an argument inside of the callback function
      res.json(textcompletedb);
    });
  });


};