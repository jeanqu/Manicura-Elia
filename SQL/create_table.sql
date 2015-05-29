-- DROP TABLE "Administrador";

CREATE TABLE Administrador
( 
  id_admin SERIAL PRIMARY KEY,
  loggin CHAR(50) NOT NULL,
  password CHAR(50)
);