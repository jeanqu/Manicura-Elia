--sudo -u postgres -i
--psql eliana

-- DROP TABLE Administrador;
CREATE TABLE Administrador
( 
  id_admin SERIAL PRIMARY KEY,
  loggin CHAR(50) NOT NULL,
  password CHAR(50)
);

CREATE TABLE Cliente
(
	id_cliente SERIAL PRIMARY KEY,
	RUT CHAR(15)
);

CREATE TABLE Comprada
(
	id_comprada SERIAL PRIMARY KEY,
	numero_sesiones_quedada INT NOT NULL,
	comprada_fk_comprada_Estado INT,
	comprada_fk_carta INT,
	comprafa_fk_cliente INT
);

CREATE TABLE Comprada_Estado
(
	id_comprada_Estado SERIAL PRIMARY KEY,
	nombre_comprada_Estado CHAR(50) NOT NULL,
	descripcion_comprada_estado CHAR(500)
);
CREATE TABLE Reservacia
(
	id_reservacia SERIAL PRIMARY KEY,
	hora_inicial timestamp,
	hora_final timestamp,
	reservacia_fk_comprada INT,
	reservacia_fk_reservacia_estado INT
);

CREATE TABLE Reservacia_Estado
(
	id_reservacia_estado SERIAL PRIMARY KEY,
	nombre_reservacia_estado CHAR(50) NOT NULL,
	descripcion_reservacia_estado CHAR(500)
);
-- DROP TABLE Carta;
CREATE TABLE Carta
( 
  id_carta SERIAL PRIMARY KEY,
  nombre_carta CHAR(50) NOT NULL,
  precio INT,
  numero_de_sesiones INT NOT NULL,
  tiempo_sesion INTERVAL, 
  descripcion_Carta CHAR(500)
);