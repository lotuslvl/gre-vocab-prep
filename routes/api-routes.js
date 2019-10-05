
// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");
const Sequelize = require('sequelize');
require("dotenv").config();


// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the questions
  app.get("/api/textcompletionq", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.TextCompletionQ.findAll({
      order: Sequelize.literal('rand()'),
      limit: 20,

    }).then(function (textcompletedb) {
      // We have access to the todos as an argument inside of the callback function

      res.json(textcompletedb);
    });
  });

// GET route for getting all of the questions
app.get("/api/readingcompq", function(req, res) {
  // findAll returns all entries for a table when used with no options
  db.ReadingComprehensionQ .findAll({
    order: Sequelize.literal('rand()'),
    limit: 10,

  }).then(function(readingcompdb) {
    // We have access to the todos as an argument inside of the callback function
    
    res.json(readingcompdb);
  });
});

  app.get("/api/login", function (req, res) {
    db.Player.findAll({
      where: {
        loginusername: req.username,
        password: req.password
      }
    })
      .then(function (dbPlayer) {
        res.json(dbPlayer);
      })
      .catch(function (err) {
        res.json(err);
      });
  });



  // POST route for saving a new question
  app.post("/api/newplayer", function (req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Player.create({
      loginusername: req.body.username,
      password: req.body.password,
      name: req.body.name,
      email: req.body.email,
      gre_test_date: req.body.gre_test_date,
    }).then(function (dbPlayer) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbPlayer);
    })
      .catch(function (err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });




  // POST route for saving a new question
  app.post("/api/newscore", function (req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    console.log("sending");
    db.Score.create({
      name: req.body.name,
      email: req.body.email,
      type: req.body.type,
      score: req.body.score,
      percentage: req.body.percentage,
      numright: req.body.numright,
      numwrong: req.body.numwrong,
      timetaken: req.body.timetaken,
    }).then(function (dbScore) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbScore);
    })
      .catch(function (err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
        console.log(err);
      });
  });

  // GET route for getting all of the questions
  app.get("/api/getscores", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.Score.findAll({}).then(function (scoredb) {
      // We have access to the todos as an argument inside of the callback function

      res.json(scoredb);

    });
  });

  app.get("/api/getApiKey", function (req, res) {
    res.json({ apiKey: process.env.WORDNIK_API });
  });

};