var pg = require('pg');
var conString = "postgres://postgres:12345@localhost/eliana";

exports.getCarta = function(req, res) {
	var Carta = [];
	var i = 0;
	var client = new pg.Client(conString);
	client.connect();

	var request = "SELECT id_carta, nombre_carta, precio, numero_de_sesiones, tiempo_sesion, descripcion_Carta \
	              FROM Carta"

	var query = client.query(request);

	query.on("row", function (row, retour_funcion) {
		Carta.push(row);
	}); 

query.on('end', function(retour_funcion) 
	{
		res.send({ succes: true, Carta: Carta }); 
	});
}