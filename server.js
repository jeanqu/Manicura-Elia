app = require('express')(),
server = require('http').createServer(app);
var cookieParser = require('cookie-parser');
var session = require('client-sessions');
var static = require('node-static');
var file = new static.Server(__dirname + '/app');

//var modelos = require(__dirname + '/SQL/conexion.js')

var path = require("path");
var url = require("url");

var cookieParser = cookieParser();
var bodyParser = require('body-parser');
app.use(bodyParser());

app.use(session({
  cookieName: 'mySession',
  secret: 'balbalouafouafcoucougrrrrrrr',
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000,
}));

var connectAdmin = require(__dirname + '/controleur/connectAdmin.js');
var reservaciaControleur = require(__dirname + '/controleur/reservaciaControleur');

app.post('/tryLoggin', connectAdmin.checkIdentityAdministrador);

app.post('/getCartas', reservaciaControleur.getCarta);
app.post('/getReservaciones', reservaciaControleur.getReservaciones);

app.post('/deconnectLoggin', function(req, res){
  console.log('en la funccion deconnexia');
  req.mySession.isConnected = false;
  res.send({ succes: true });
})


app.get('/indexAdministration.html', function(req, res){
  if (req.mySession.isConnected == true)
  {
    //res.file.serve('/indexAdministration.html', 301, {}, req, res);
    res.sendfile('app/indexAdministration.html');
  }
  else
  {
    //res.file.serve('/index.html', 301, {}, req, res);
    res.sendfile('app/index.html');
  }
});


app.use(function(req, res){
  if (req)
    file.serve(req, res);
});
/*
app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.send(404, 'Page introuvable !');
});*/

server.listen(8080);
