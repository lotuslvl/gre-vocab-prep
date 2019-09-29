// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");
const Sequelize = require('sequelize');

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the questions
  app.get("/api/textcompletionq", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.TextCompletionQ.findAll({
      order: Sequelize.literal('rand()'),
      limit: 20,

    }).then(function(textcompletedb) {
      // We have access to the todos as an argument inside of the callback function
      
      res.json(textcompletedb);
    });
  });




  // POST route for saving a new question
  app.post("/api/newquestion", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Player.create({
      loginusername: req.body.username,
      password: req.body.password,
      name: req.body.name,
      email: req.body.email,
      gre_test_date: req.body.gre_test_date,
    }).then(function(dbPlayer) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbPlayer);
    })
      .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });

};
