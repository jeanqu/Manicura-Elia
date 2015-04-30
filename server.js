app = require('express')(),
server = require('http').createServer(app),
io = require('socket.io').listen(server);
var fs = require("fs");
var ejs = require('ejs');
var session = require('cookie-session');
var serveStatic = require("serve-static");

app.use(serveStatic(__dirname + '/app'));

/*app.get('/', function (req, res) {
  res.sendFile(__dirname + 'index/client.html');
});*/

io.sockets.on('connection', function (socket, pseudo) {
    console.log('un client!');
    socket.on('nouveau_client', function(pseudo) {
        
    });

    // Dès qu'on reçoit un message, on récupère le pseudo de son auteur et on le transmet aux autres personnes
    socket.on('message', function (message) {
        
    }); 
});

server.listen(8080);
