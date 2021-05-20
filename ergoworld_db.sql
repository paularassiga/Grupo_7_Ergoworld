CREATE DATABASE  IF NOT EXISTS `ergoworld_db` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `ergoworld_db`;
-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: localhost    Database: ergoworld_db
-- ------------------------------------------------------
-- Server version	5.7.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `orderNumber` int(11) DEFAULT NULL,
  `total` decimal(10,2) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
INSERT INTO `carts` VALUES (1,1,2000.00,7,'2021-05-20 01:21:12','2021-05-20 01:21:12',NULL);
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categoria_producto`
--

DROP TABLE IF EXISTS `categoria_producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categoria_producto` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `category_id` int(10) unsigned NOT NULL,
  `product_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria_producto`
--

LOCK TABLES `categoria_producto` WRITE;
/*!40000 ALTER TABLE `categoria_producto` DISABLE KEYS */;
/*!40000 ALTER TABLE `categoria_producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categorias` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'Sillas'),(2,'Monitores'),(3,'Escritorios'),(4,'Stands'),(5,'Iluminación'),(6,'Teclados'),(7,'Paneles de separación'),(8,'Organizador de cables'),(9,'Mouses');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detalle_ventas`
--

DROP TABLE IF EXISTS `detalle_ventas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `detalle_ventas` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `price` decimal(10,0) NOT NULL,
  `discount` decimal(10,0) DEFAULT NULL,
  `quantity` decimal(10,0) NOT NULL,
  `total` decimal(10,0) NOT NULL,
  `date` date DEFAULT NULL,
  `product_id` int(10) NOT NULL,
  `payment_method_id` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `detalle_ventas_ibfk_1_idx` (`product_id`),
  CONSTRAINT `detalle_ventas_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `productos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detalle_ventas`
--

LOCK TABLES `detalle_ventas` WRITE;
/*!40000 ALTER TABLE `detalle_ventas` DISABLE KEYS */;
INSERT INTO `detalle_ventas` VALUES (1,100,0,1,100,NULL,1,1);
/*!40000 ALTER TABLE `detalle_ventas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `salePrice` decimal(10,2) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `subtotal` decimal(10,2) DEFAULT NULL,
  `state` tinyint(4) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `productId` int(11) DEFAULT NULL,
  `cartId` int(11) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `items`
--

LOCK TABLES `items` WRITE;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
INSERT INTO `items` VALUES (1,2000.00,1,2000.00,0,7,1,1,'2021-05-20 01:21:09','2021-05-20 01:21:12',NULL);
/*!40000 ALTER TABLE `items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medios_de_pago`
--

DROP TABLE IF EXISTS `medios_de_pago`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `medios_de_pago` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medios_de_pago`
--

LOCK TABLES `medios_de_pago` WRITE;
/*!40000 ALTER TABLE `medios_de_pago` DISABLE KEYS */;
INSERT INTO `medios_de_pago` VALUES (1,'Debito'),(2,'Credito'),(3,'Efectivo'),(4,'Mercado Pago'),(5,'Transferencia');
/*!40000 ALTER TABLE `medios_de_pago` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productos` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `shortDescription` varchar(255) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `stock` decimal(10,0) NOT NULL,
  `discount` decimal(10,0) DEFAULT NULL,
  `characteristic1` varchar(255) NOT NULL,
  `characteristic2` varchar(255) NOT NULL,
  `characteristic3` varchar(255) NOT NULL,
  `characteristic4` varchar(255) NOT NULL,
  `titleDescription1` varchar(255) NOT NULL,
  `description1` varchar(255) NOT NULL,
  `titleDescription2` varchar(255) NOT NULL,
  `description2` varchar(255) NOT NULL,
  `titleDescription3` varchar(255) NOT NULL,
  `description3` varchar(255) NOT NULL,
  `category_id` int(10) NOT NULL,
  `image_1` varchar(100) NOT NULL,
  `image_2` varchar(100) NOT NULL,
  `image_3` varchar(100) NOT NULL,
  `image_4` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `productos_ibfk_1_idx` (`category_id`),
  CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categorias` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'ROOST LAPTOP STAND','Eleva la pantalla entre 15 y 25 centímetros por encima de la mesa. Fácil de usar y extremadamente portátil. Se adapta a casi todas las computadoras portátiles. Se abre y cierra con un sólo movimiento',2000,10000,0,'Garantía por 2 años','Hecho con plástico reciclado','Libre de BPA','La mejor calidad del mercado.','Altura ajustable','Ajustar la altura de la pantalla de su computadora portátil es fundamental para lograr la máxima comodidad y productividad','Fácil de usar y extremadamente portátil','Un simple movimiento abre y cierra el Roost Stand. Peso: 6 onzas (170 g) Cerrado: 1,30 x 1,17 x 13 pulgadas (3,3 x 3,0 x 33,0 cm)','Se adapta a casi todas las computadoras portátiles','Este fantástico stand se ajusta automáticamente para adaptarse a tu computadora portátil.',4,'1615153011712_img_.jpg','1615072824548_img_.jpg','1615072824557_img_.jpg','1615072824561_img_.jpg'),(2,'PRO CLICK ERGONOMIC MOUSE','Mouse de computadora ergonómico inalámbrico de última generación diseñado para brindar comodidad y productividad.',5000,3445,0,'Garantía por 2 años','Hecho con plástico reciclado','Libre de BPA','La mejor calidad del mercado.','Un diseño, miles de usos','Se adapta a la palma del usuario, eliminando cualquier contacto entre la mano y la superficie de trabajo.','Diseñado por expertos','Diseñado con una inclinación de 30 grados','Brinda comodidad durante todo el día.','Promueve una postura ergonómica natural del brazo para aliviar la tensión no deseada de la muñeca',9,'1615129389918_img_.jpg','1615129389924_img_.JPG','1615129389926_img_.jpg','	1615129389939_img_.jpg'),(3,'FREEDOM HEADREST','Silla de oficina que se adapta automáticamente al usuario, permitiéndote moverte libremente de una postura a otra.',10000,10000,0,'Garantía por 2 años','Hecho con plástico reciclado','Libre de BPA','La mejor calidad del mercado.','Diseño único e innovador','Usa inteligentemente el peso corporal de cada usuario para ajustar perfectamente la posición de tensión y reclinación de la silla.','Cuida de tu espalda','El respaldo se mueve automáticamente a lo largo el día y ofrece una comodidad lumbar perfecta en todas las posiciones.','Se adapta a tu cuerpo','Los cojines siguen la forma del cuerpo para ofrecer comodidad a largo plazo, reducir los puntos de presión y proporcionar una distribución de peso excepcional.',1,'1615132406182_img_.jpg','image2\": \"1615132406187_img_.jpg','image3\": \"1615132406192_img_.jpg','image4\": \"1615132406195_img_.jpg'),(4,'QUICKSTAND ECO','Simple, portable y fácil de ajustar, transformando computadoras de escritorio comunes en espacios de trabajo activos y saludables.',10000,10000,0,'Garantía por 2 años','Hecho con plástico reciclado','Libre de BPA','La mejor calidad del mercado.','Mejorá tu salud','Llevá comodidad y  bienestar ergonómicos a tus espacios de trabajo.','Diseño adaptable','Diseñado para adaptarse a usuarios de distintas alturas con 18,6\" de ajuste de la superficie de trabajo.','No dejes de moverte','La funcionalidad sin esfuerzo fomenta más movimiento y permite al usuario pasar de estar sentado a estar de pie al instante.',4,'1615132807912_img_.jpeg','1615132807916_img_.jpeg','1615132807922_img_.jpeg','	1615132807924_img_.jpeg');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roles` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Owner'),(2,'Admin'),(3,'Viewer'),(4,'Analist'),(5,'Customer');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `status`
--

DROP TABLE IF EXISTS `status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `status` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status`
--

LOCK TABLES `status` WRITE;
/*!40000 ALTER TABLE `status` DISABLE KEYS */;
INSERT INTO `status` VALUES (1,'Recibido'),(2,'En Proceso'),(3,'Procesado'),(4,'En Camino'),(5,'Enviado');
/*!40000 ALTER TABLE `status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `rol_id` int(10) DEFAULT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(29) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `last_name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `usuarios_ibfk_1_idx` (`rol_id`),
  CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`rol_id`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,2,'Paula','paularassiga@gmail.com','$2a$10$1NPM0h.8mdEMg6uazDw4LOW2aMiCn0iAIyBpHxQj8yLtdUyG.pGwe','1616457547249_img_.png',''),(7,3,'Viewer','viewer@viewer.com','$2a$10$.Z8ITv9GSvE1Jh.2cGsE1.X1Ml8I7J6Jwg9QU/QcLe7I8/IDMgQ8a','1618234134765_img_.png','Viewer'),(8,1,'Admin','admin@admin.com','$2a$10$3ZuqvJxv8H/i4X5s6LPmwOkbjiJB3YHHKQr.2Hg0Q.vBWL2uC6UIC','1618234192963_img_.jpeg','Admin'),(9,3,'RYAN','RYANDEBELL@GMAIL.COM','$2a$10$jJSIrVeeyBu.Xt1v8hLjReL6dw/NqTW8Q33ytyNm47PH.ESoWj4vi','1621046095023_img_.jpg','DEBELL'),(10,3,'r3452','paularassia@gmail.com','$2a$10$BiEAL/kn5yQgJkCYPUd8T.9puLNU7j/72q5qsEk/ure3rCdXu4qje','1621046220045_img_.jpg','f525');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ventas`
--

DROP TABLE IF EXISTS `ventas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ventas` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `total` decimal(10,0) NOT NULL,
  `address` varchar(29) DEFAULT NULL,
  `country` varchar(29) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `user_id` int(10) NOT NULL,
  `detail_id` int(10) NOT NULL,
  `status_id` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `ventas_ibfk_2_idx` (`detail_id`),
  KEY `ventas_ibfk_3_idx` (`status_id`),
  CONSTRAINT `ventas_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `usuarios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `ventas_ibfk_2` FOREIGN KEY (`detail_id`) REFERENCES `detalle_ventas` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `ventas_ibfk_3` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ventas`
--

LOCK TABLES `ventas` WRITE;
/*!40000 ALTER TABLE `ventas` DISABLE KEYS */;
INSERT INTO `ventas` VALUES (1,100,'Arabe Siria 3026','Argentina',NULL,1,1,1);
/*!40000 ALTER TABLE `ventas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-19 22:22:02
