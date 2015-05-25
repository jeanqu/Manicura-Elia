-- Table: "Administrador"

-- DROP TABLE "Administrador";

CREATE TABLE "Administrador"
(
  "user" character(50) NOT NULL,
  password character(50),
  CONSTRAINT pk_admin PRIMARY KEY ("user")
)
WITH (
  OIDS=FALSE
);
ALTER TABLE "Administrador"
  OWNER TO postgres;
