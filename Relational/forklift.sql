CREATE DATABASE  IF NOT EXISTS `forklift`;
USE `forklift`;

-- MySQL dump 10.13  Distrib 8.0.41, for macos15 (arm64)
--
-- Host: localhost    Database: forklift
-- ------------------------------------------------------
-- Server version	8.4.4

SET FOREIGN_KEY_CHECKS = 0;

--
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
CREATE TABLE `address` (
  `id` int NOT NULL AUTO_INCREMENT,
  `street` varchar(120) NOT NULL,
  `city` varchar(60) NOT NULL,
  `state` varchar(2) NOT NULL,
  `zip` varchar(10) NOT NULL,
  `latitude` decimal(10,2) DEFAULT NULL,
  `longitude` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
);


--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
CREATE TABLE `customer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  `email` varchar(120) NOT NULL,
  `phone` varchar(45) NOT NULL,
  `stripe_id` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
);

--
-- Table structure for table `customer_address_detail`
--

DROP TABLE IF EXISTS `customer_address_detail`;
CREATE TABLE `customer_address_detail` (
  `id` int NOT NULL AUTO_INCREMENT,
  `address_id` int NOT NULL,
  `customer_id` int NOT NULL,
  `is_primary` tinyint(1) NOT NULL DEFAULT '0',
  `primary_guard` int GENERATED ALWAYS AS ((case when (`is_primary` = 1) then `customer_id` else NULL end)) STORED,
  PRIMARY KEY (`id`),
  UNIQUE KEY `primary_guard_UNIQUE` (`primary_guard`),
  KEY `customer_fk_idx` (`customer_id`),
  KEY `address_customer_fk_idx` (`address_id`),
  CONSTRAINT `address_customer_fk` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`),
  CONSTRAINT `address_fk` FOREIGN KEY (`address_id`) REFERENCES `address` (`id`)
);

--
-- Table structure for table `delivery_partner`
--

DROP TABLE IF EXISTS `delivery_partner`;
CREATE TABLE `delivery_partner` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  `vehicle_type` varchar(45)  NOT NULL,
  `phone` varchar(15) NOT NULL,
  `vehicle_number` varchar(45) NOT NULL,
  `rating` decimal(2,1) default NULL,
  `status` enum('AVAILABLE','ON_DELIVERY','OFFLINE') NOT NULL DEFAULT 'OFFLINE',
  `last_modified_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

--
-- Table structure for table `restaurant`
--

DROP TABLE IF EXISTS `restaurant`;
CREATE TABLE `restaurant` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(120) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `cuisine_type` varchar(45) NOT NULL,
  `rating` decimal(2,1) DEFAULT NULL,
  `is_operational` tinyint DEFAULT '1',
  PRIMARY KEY (`id`)
);

--
-- Table structure for table `restaurant_address_detail`
--

DROP TABLE IF EXISTS `restaurant_address_detail`;
CREATE TABLE `restaurant_address_detail` (
  `id` int NOT NULL AUTO_INCREMENT,
  `address_id` int NOT NULL,
  `restaurant_id` int NOT NULL,
  `site_type` varchar(12) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `address_fk_idx` (`address_id`),
  KEY `restaurant_fk_idx` (`restaurant_id`),
  CONSTRAINT `address_restaurant_fk` FOREIGN KEY (`address_id`) REFERENCES `address` (`id`),
  CONSTRAINT `restaurant_fk` FOREIGN KEY (`restaurant_id`) REFERENCES `restaurant` (`id`)
);

--
-- Table structure for table `promo`
--

DROP TABLE IF EXISTS `promo`;
CREATE TABLE `promo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `promocode` varchar(45) NOT NULL,
  `discount` decimal(2,2) NOT NULL,
  `is_valid` tinyint DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `promocode_UNIQUE` (`promocode`)
);

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
  `id` int NOT NULL AUTO_INCREMENT,
  `customer_id` int NOT NULL,
  `restaurant_id` int NOT NULL,
  `delivery_partner_id` int DEFAULT NULL,
  `order_status` enum('PLACED','PREPARING','PICKED_UP','DELIVERED','CANCELLED') NOT NULL DEFAULT 'PLACED',
  `confirmed_at` timestamp NULL DEFAULT NULL,
  `delivery_address` int NOT NULL,
  `pickup_address` int NOT NULL,
  `placed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `delivered_at` timestamp NULL DEFAULT NULL,
  `subtotal` decimal(10,2) NOT NULL DEFAULT '0.00',
  `delivery_fee` decimal(10,2) NOT NULL DEFAULT '0.00',
  `promo_code` int DEFAULT NULL,
  `promo_discount` decimal(10,2) NOT NULL DEFAULT '0.00',
  `tip` decimal(10,2) NOT NULL DEFAULT '0.00',
  `tax` decimal(10,2) NOT NULL DEFAULT '0.00',
  `platform_fee` decimal(4,2) DEFAULT '1.00',
  `total_amount` decimal(10,2) NOT NULL DEFAULT '0.00',
  `payment_status` varchar(45) NOT NULL DEFAULT 'Pending',
  `comments` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `order_customer_fk_idx` (`customer_id`),
  KEY `order_restaurant_fk_idx` (`restaurant_id`),
  KEY `order_delivery_partner_fk_idx` (`delivery_partner_id`),
  KEY `order_delivery_address_fk` (`delivery_address`),
  KEY `order_promo_fk_idx` (`promo_code`),
  KEY `order_pickup_address_idx` (`pickup_address`),
  KEY `idx_order_customer_date` (`customer_id`,`placed_at`),
  KEY `idx_order_rest_status` (`restaurant_id`,`order_status`),
  KEY `idx_order_placed_at` (`placed_at`),
  CONSTRAINT `order_customer_fk` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`),
  CONSTRAINT `order_delivery_address_fk` FOREIGN KEY (`delivery_address`) REFERENCES `customer_address_detail` (`id`),
  CONSTRAINT `order_delivery_partner_fk` FOREIGN KEY (`delivery_partner_id`) REFERENCES `delivery_partner` (`id`),
  CONSTRAINT `order_pickup_address` FOREIGN KEY (`pickup_address`) REFERENCES `restaurant_address_detail` (`id`),
  CONSTRAINT `order_promo_fk` FOREIGN KEY (`promo_code`) REFERENCES `promo` (`id`),
  CONSTRAINT `order_restaurant_fk` FOREIGN KEY (`restaurant_id`) REFERENCES `restaurant` (`id`)
);

--
-- Table structure for table `order_item`
--

DROP TABLE IF EXISTS `order_item`;
CREATE TABLE `order_item` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` int NOT NULL,
  `menu_item_id` varchar(45) NOT NULL,
  `item_name` varchar(45) NOT NULL,
  `quantity` int NOT NULL,
  `item_price` decimal(10,2) NOT NULL,
  `add_ons` json DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `order_order_item_fk_idx` (`order_id`),
  KEY `idx_item_sales` (`menu_item_id`,`quantity`,`item_price`),
  CONSTRAINT `order_order_item_fk` FOREIGN KEY (`order_id`) REFERENCES `order` (`id`)
);

--
-- Table structure for table `order_payment`
--

DROP TABLE IF EXISTS `order_payment`;
CREATE TABLE `order_payment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` int NOT NULL,
  `stripe_customer_id` varchar(45) NOT NULL,
  `stripe_txn_id` varchar(45) DEFAULT NULL,
  `request_json` varchar(500) NOT NULL,
  `response_json` varchar(500) DEFAULT NULL,
  `payment_status` varchar(10) NOT NULL DEFAULT 'Pending',
  `amount` decimal(10,2) NOT NULL,
  `initiation_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `confirmation_date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `stripe_txn_id_UNIQUE` (`stripe_txn_id`),
  KEY `order_payment_order_fk_idx` (`order_id`),
  CONSTRAINT `order_payment_order_fk` FOREIGN KEY (`order_id`) REFERENCES `order` (`id`)
);

SET FOREIGN_KEY_CHECKS = 1;



