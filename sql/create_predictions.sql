CREATE TABLE IF NOT EXISTS `predictions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` varchar(100) DEFAULT NULL,
  `gameId` varchar(100) DEFAULT NULL,
  `bet` varchar(100) DEFAULT NULL,
  `result` varchar(100) DEFAULT NULL,
  PRIMARY KEY (ID))
