app = require('express')(),
server = require('http').createServer(app),
io = require('socket.io').listen(server);
var fs = require("fs");
var ejs = require('ejs');
var session = require('client-sessions');
var serveStatic = require("serve-static");

var serviceSession = require(__dirname + "/session.js");


app.use(session({
  cookieName: 'session',
  secret: 'balbalouafouafcoucougrrrrrrr',
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000,
}));

app.use(serveStatic(__dirname + '/app'));

app.get('/', function(req, res) {
    console.log('coucou');
    req.session.user = 'blabla';
});

app.post('/connexion', function(req, res) {
  if (serviceSession.verifAdministrator)
  {
    res.writeHead(302, {
  'Location': 'your/404/path.html'
  //add other headers here...
});
  }
})

io.sockets.on('connection', function (socket, pseudo) {
  socket.on('nouveau_client', function(pseudo) {
      
  });

  // Dès qu'on reçoit un message, on récupère le pseudo de son auteur et on le transmet aux autres personnes
  socket.on('message', function (message) {
      
  }); 
});

server.listen(8080);
