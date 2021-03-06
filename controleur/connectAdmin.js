var pg = require('pg');
var conString = "postgres://postgres:12345@localhost/eliana";

exports.checkIdentityAdministrador = function(req, res) {
  var client = new pg.Client(conString);
  client.connect();
  
  var request = "SELECT COUNT(*) AS numero_de_admin \
                  FROM Administrador \
                  WHERE loggin = '" + req.body.VarIntentaConnexiones.loggin + "'";

  var query = client.query(request);

  query.on("row", function (row, retour_funcion) {
    contaNombreAdminConLoggin = row.numero_de_admin 
  }); 
  
  query.on('end', function(retour_funcion) 
  { 
    client.end(); 
    console.log('En el nuevo controler: ' + contaNombreAdminConLoggin);
    if(contaNombreAdminConLoggin > 0)
    {
      req.mySession.isConnected = true;
      goodInformations = true;
    }
    else
    {
      req.mySession.isConnected = false;
      goodInformations = false;
    } 

    console.log('En el controler: ' + contaNombreAdminConLoggin);
    res.send({ succes: true, goodInformations: goodInformations }); 
  });
}

