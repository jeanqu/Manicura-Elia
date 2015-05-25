app = require('express')(),
server = require('http').createServer(app);
var cookieParser = require('cookie-parser');
var session = require('client-sessions');
var static = require('node-static');
var file = new static.Server(__dirname + '/app');

var modelos = require(__dirname + '/SQL/conexion.js')

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

app.post('/tryLoggin', function(req, res){
  //
  var _user = req.body.VarIntentaConnexiones.loggin

  modelos.Administrador.findOne({
    where : {
      user : _user
    }
  }).then(function(Administrador) {
    if (Administrador == null){
      req.mySession.isConnected = false;
      console.log('resultado:' + req.mySession.isConnected);
      goodInformations = 'false';
    }
    else {
      req.mySession.isConnected = true;
      console.log('resultado:' + req.mySession.isConnected);
      goodInformations = 'true';
    }
  res.send({ succes: true, goodInformations: goodInformations });
});
    

});
app.post('/deconnectLoggin', function(req, res){
  console.log('en la funccion deconnexia');
  req.mySession.isConnected = false;
  res.send({ succes: true });
})


app.get('/indexAdministration.html', function(req, res){
  console.log('Dans la fonction, la valeur est:' + req.mySession.isConnected);
  if (req.mySession.isConnected == true)
  {
    console.log('dans admin');
    //res.file.serve('/indexAdministration.html', 301, {}, req, res);
    res.sendfile('app/indexAdministration.html');
  }
  else
  {
    console.log('pas dans admin');
    //res.file.serve('/index.html', 301, {}, req, res);
    res.sendfile('app/index.html');
    console.log('servis!');
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
