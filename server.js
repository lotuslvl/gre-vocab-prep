// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var sendMail = require('./mail.js');
<<<<<<< HEAD
var app = require('express')();
=======
var path = require ('path');
>>>>>>> f7ff4dc1768b92cc2721efd042a5dcb5103471f1

// chat - socket.io

var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '.public/scoreboard.html');
});

io.on('connection', function (socket) {
    socket.on('chat message', function (msg) {

        io.sockets.emit('chat message', msg);
    });
    socket.on('typing', function (data) {
        socket.broadcast.emit('typing', data);
    })
});
http.listen(3000, function () {
    console.log('listening on *:3000');
});


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;
//  api key
require("dotenv").config();


// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
//app.use(express.static("./public"));
app.use(express.static(path.join(__dirname + '/public')));


// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



// Routes
// =============================================================
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);
//require("./routes/admin-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT http://localhost:8080/");
  });

  app.post('/sendMail', function(req, res){
    sendMail(req.body.name, req.body.email, req.body.result, req.body.numberOfQuestions);
  });
});
