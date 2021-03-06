DROP DATABASE IF EXISTS fantasyPlayers_db;
CREATE DATABASE fantasyPlayers_db;

USE fantasyPlayers_db;

CREATE TABLE qbs(
  id INT NOT NULL AUTO_INCREMENT,
  player_name VARCHAR(100) NOT NULL,
  player_position VARCHAR(50) NOT NULL,
  yards_gained INT default 0,
  touchdowns INT default 0,
  createdAt DATE,
  updatedAt DATE,
  PRIMARY KEY (id)
);

INSERT INTO qbs (player_name,player_position,yards_gained,touchdowns)
VALUES('Tom Brady', 'QB',300,4),
      ('Jared Goff','QB',275,3),
      ('Kirk Cousins','QB',225,2);
      
CREATE TABLE wrs(
  id INT NOT NULL AUTO_INCREMENT,
  player_name VARCHAR(100) NOT NULL,
  player_position VARCHAR(50) NOT NULL,
  yards_gained INT default 0,
  touchdowns INT default 0,
  createdAt DATE,
  updatedAt DATE,
  PRIMARY KEY (id)
);

INSERT INTO wrs (player_name,player_position,yards_gained,touchdowns)
VALUES('Brandon Cooks','WR',150,2),
      ('Stefon Diggs','WR',100,1),
	  ('Robert Woods','WR',125,2);
      
CREATE TABLE rbs(
  id INT NOT NULL AUTO_INCREMENT,
  player_name VARCHAR(100) NOT NULL,
  player_position VARCHAR(50) NOT NULL,
  yards_gained INT default 0,
  touchdowns INT default 0,
  createdAt DATE,
  updatedAt DATE,
  PRIMARY KEY (id)
 ); 

INSERT INTO rbs (player_name,player_position,yards_gained,touchdowns)
VALUES('Todd Gurley','RB',200,2),
      ('Dalvin Cook','RB',120,1),
	  ('Latavius Murray','RB',50,0);

  CREATE TABLE zuser(
  id int  not NULL AUTO_INCREMENT,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  user_password VARCHAR(50) NOT NULL,
  user_passconfirm VARCHAR(50) NOT NULL,
  agree boolean DEFAULT TRUE,
  team_name VARCHAR(50) NULL,
  currency INT default 0,
  PRIMARY KEY (id)
);
INSERT INTO zuser (first_name,last_name,email,user_password,user_passconfirm,agree,team_name,currency)
VALUES ('Jerry', 'P','jpangeli514@gmail.com','ffjer','ffjer',true,'da bears',350);











