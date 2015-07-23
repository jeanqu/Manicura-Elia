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

INSERT INTO Reservacia (hora_inicial, hora_final, reservacia_fk_comprada, reservacia_fk_reservacia_estado) VALUES ('2015-07-13 09:00', '2015-07-13 11:00', 1, 3);
INSERT INTO Reservacia (hora_inicial, hora_final, reservacia_fk_comprada, reservacia_fk_reservacia_estado) VALUES ('2015-07-14 09:00', '2015-07-14 11:00', 1, 3);
INSERT INTO Reservacia (hora_inicial, hora_final, reservacia_fk_comprada, reservacia_fk_reservacia_estado) VALUES ('2015-07-15 09:00', '2015-07-15 11:00', 1, 3);
INSERT INTO Reservacia (hora_inicial, hora_final, reservacia_fk_comprada, reservacia_fk_reservacia_estado) VALUES ('2015-07-15 14:00', '2015-07-15 17:00', 1, 3);
INSERT INTO Reservacia (hora_inicial, hora_final, reservacia_fk_comprada, reservacia_fk_reservacia_estado) VALUES ('2015-07-17 09:00', '2015-07-17 11:00', 1, 3);
INSERT INTO Reservacia (hora_inicial, hora_final, reservacia_fk_comprada, reservacia_fk_reservacia_estado) VALUES ('2015-07-18 09:00', '2015-07-18 11:00', 1, 3);
INSERT INTO Reservacia (hora_inicial, hora_final, reservacia_fk_comprada, reservacia_fk_reservacia_estado) VALUES ('2015-07-19 09:00', '2015-07-19 11:00', 1, 3);
INSERT INTO Reservacia (hora_inicial, hora_final, reservacia_fk_comprada, reservacia_fk_reservacia_estado) VALUES ('2015-07-20 09:00', '2015-07-20 11:00', 1, 3);
INSERT INTO Reservacia (hora_inicial, hora_final, reservacia_fk_comprada, reservacia_fk_reservacia_estado) VALUES ('2015-07-21 09:00', '2015-07-21 11:00', 1, 3);
