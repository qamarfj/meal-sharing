CREATE DATABASE  IF NOT EXISTS `reservation-sharing`;
USE `reservation-sharing`;
--
-- Table structure for table `reservations`
--

DROP TABLE IF EXISTS `reservations`;
CREATE TABLE `reservations` (
  `idreservations` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(45) DEFAULT NULL,
  `number_of_guests` int(11) DEFAULT NULL,
  PRIMARY KEY (`idreservations`)
) ENGINE=InnoDB AUTO_INCREMENT=6;

--
-- Dumping data for table `reservations`
--

LOCK TABLES `reservations` WRITE;
/*!40000 ALTER TABLE `reservations` DISABLE KEYS */;
INSERT INTO `reservations` VALUES (1,'bla bla bla',3),(2,'bla bla bla',3),(3,'asdasd',7),(4,'benjamins karry',10),(5,'oooooooooo',1);
/*!40000 ALTER TABLE `reservations` ENABLE KEYS */;
UNLOCK TABLES;
