INSERT INTO Administrador (loggin, password) VALUES ('admin', 'pass');

INSERT INTO Comprada_Estado (nombre_comprada_Estado) VALUES ('pagado');
INSERT INTO Comprada_Estado (nombre_comprada_Estado) VALUES ('no pagado');
INSERT INTO Comprada_Estado (nombre_comprada_Estado) VALUES ('cancelado');

INSERT INTO Reservacia_Estado (nombre_reservacia_estado) VALUES ('no disponible');
INSERT INTO Reservacia_Estado (nombre_reservacia_estado) VALUES ('antes reservado');
INSERT INTO Reservacia_Estado (nombre_reservacia_estado) VALUES ('reservado');
INSERT INTO Reservacia_Estado (nombre_reservacia_estado) VALUES ('cancelado');

INSERT INTO Carta (nombre_carta, precio, numero_de_sesiones, tiempo_sesion, descripcion_Carta) VALUES ('masaje de pie', 30000, 3, '1 hour 30 minutes', 'Un masage de los pie con 3 sesiones');
INSERT INTO Carta (nombre_carta, precio, numero_de_sesiones, tiempo_sesion, descripcion_Carta) VALUES ('manicura clasica', 10000, 1, '2 hours', 'La basa de la manicura');
INSERT INTO Carta (nombre_carta, precio, numero_de_sesiones, tiempo_sesion, descripcion_Carta) VALUES ('manicura super combo', 75000, 8, '1 hour 5 minutes', '8 sesiones de masaje');

