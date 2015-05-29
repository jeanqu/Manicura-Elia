var pg = require('pg');
var conString = "postgres://postgres:12345@localhost/eliana";



//Funcion que conta el nombre de Admninistrador con un loggin
exports.contaNombreAdminConLoggin = function(loggin) {
  var results = [];

  var client = new pg.Client(conString);
  client.connect(function(err) {
    if (err)
    {
      console.log('error connexion database');
      return false;
    }
  }); 
  

  var request = "SELECT COUNT(*) AS numero_de_admin \
                  FROM Administrador \
                  WHERE loggin = '" + loggin + "'";

  var query = client.query(request);

  query.on("row", function (row, retour_funcion) {
    contaNombreAdminConLoggin = row.numero_de_admin 
  }); 
  
  query.on('end', function(retour_funcion) 
  { 
    client.end(); 
    console.log('En el model: ' + contaNombreAdminConLoggin);
  });
  return contaNombreAdminConLoggin;
}

