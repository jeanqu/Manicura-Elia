
var Sequelize = require('sequelize')

var sequelize = new Sequelize ('eliana', 'postgres', { // 'NOMBRE DE LA BASE DE DATOS', 'NOMBRE DEL USUARIO' 'PASSWORD'
	host: 'localhost',
	port: 5432,
	dialect: "postgres",
	define: {
		timestamps: false,
		freezeTablename: true
	}
});

sequelize.authenticate().then(function (){
	console.log('base conectada');
});


//------- MAPEO DE LAS TABLAS

var Administrador = sequelize.define( 'Administrador', {
    user: { type: Sequelize.STRING, primaryKey: true },
    password: { type: Sequelize.STRING },
},{				//NOMBRE DE LA TABLA EN LA BASE DE DATOS/
    tableName: 'Administrador'
});
				//EXPORTACION DEL MODULO
module.exports.Administrador = Administrador;