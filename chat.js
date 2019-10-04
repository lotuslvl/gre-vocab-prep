var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendFile(__dirname + 'public/chat.html');
});

io.on('connection', function (socket) {
    socket.on('chat message', function (msg) {

        io.sockets.emit('chat message', msg);
    });
    socket.on('typing', function (data) {
        socket.broadcast.emit('typing', data);
    })
});
http.listen(4000, function () {
    console.log('listening on *:3000');
});




