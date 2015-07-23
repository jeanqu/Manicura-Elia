var pg = require('pg');
var conString = "postgres://postgres:12345@localhost/eliana";

exports.getCarta = function(req, res) {
	var Carta = [];
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

exports.getReservaciones = function(req, res) {
	var semana = [];
	var dayOfSemana = [];
	var client = new pg.Client(conString);
	client.connect();

	var request = "SELECT id_reservacia, hora_inicial, hora_final, reservacia_fk_reservacia_estado \
	              FROM Reservacia \
	              WHERE DATE(hora_inicial) >= DATE(now() + interval '" + req.body.numero_semana + " days') \
	              AND DATE(hora_inicial) < DATE(now() + interval '" + (req.body.numero_semana + 1 * 7) + " days') \
	              ORDER BY hora_inicial ASC;";

	var query = client.query(request);

	query.on("row", function (row, retour_funcion) {
		row.hora_inicial = row.hora_inicial.toLocaleString(); 
		row.hora_final = row.hora_final.toLocaleString(); 
		semana.push(row);
	}); 

	query.on('end', function(retour_funcion) 
	{
		var day = new Date();
		for(var i = 0; i < 7; i++)
		{
			dayOfSemana.push(day.toLocaleString().substr(0, 15));
			day.setDate(day.getDate() + 1);
		}
		res.send({ succes: true, semana: semana, dayOfSemana: dayOfSemana}); 
	});
 
}