DROP DATABASE IF EXISTS playlistDB;

CREATE DATABASE playlistDB;

USE playlistDB;

CREATE TABLE songs (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(50) NULL,
  artist VARCHAR (50) NULL,
  genre VARCHAR(50) NULL,
  PRIMARY KEY (id)
);

INSERT INTO songs (title, artist, genre)
VALUES ("Bohemian Rhapsody", "Queen", "Rock");

INSERT INTO songs (title, artist, genre)
VALUES ("Yummy", "Justin Bieber", "Pop");

INSERT INTO songs (title, artist, genre)
VALUES ("Blue Seude Shoes", "Elivs", "Blues");
