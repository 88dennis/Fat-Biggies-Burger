DROP DATABASE IF EXISTS burgers_DB;

CREATE DATABASE burgers_DB;
USE burgers_DB;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burgername varchar(255) NOT NULL,
	eaten BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
