var session = require('client-sessions');

app.use(session({
  cookieName: 'mySession',
  secret: 'balbalouafouafcoucougrrrrrrr',
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000,
}));

exports.isConnected = function(session) {
  if (req.mySession.isConnected) {
    return true;
    console.log('cas 1');
  } else {
    return false
    console.log('cas 2');
  }
  next();
}
