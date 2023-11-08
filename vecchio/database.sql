DROP DATABASE IF EXISTS `ragesh_sub`;
CREATE DATABASE IF NOT EXISTS `ragesh_sub`;
USE `ragesh_sub`;


CREATE TABLE IF NOT EXISTS `abbonati` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_twitch` INT NOT NULL,
  `id_telegram` INT NOT NULL,
  `sub` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
);

