INSERT INTO address (street, city, state, zip, latitude, longitude) VALUES
('123 Maple St','Baltimore','MD','21201',39.29,-76.61),
('456 Oak Ave','College Park','MD','20740',38.99,-76.94),
('789 Pine Rd','Silver Spring','MD','20910',39.00,-77.04),
('1011 Birch Blvd','Rockville','MD','20850',39.08,-77.15),
('1213 Cedar Ln','Bethesda','MD','20814',38.99,-77.10),
('1415 Spruce Ct','Arlington','VA','22201',38.88,-77.10),
('1617 Elm Dr','Washington','DC','20001',38.91,-77.02),
('1819 Aspen Pl','Alexandria','VA','22314',38.81,-77.05),
('2021 Willow Way','Hyattsville','MD','20782',38.96,-76.95),
('2223 Poplar Pkwy','Columbia','MD','21044',39.20,-76.85),
('8125 48th Ave Apt 512', 'College Park', 'MD', '20740', 38.99, -76.94),
('10 Harborview Dr', 'Baltimore','MD','21230',39.28,-76.61),
('500 Technology Dr','College Park','MD','20742',38.99,-76.93),
('1500 East‑West Hwy','Silver Spring','MD','20910',38.99,-77.02),
('200 Research Blvd','Rockville','MD','20850',39.09,-77.19),
('7501 Wisconsin Ave','Bethesda','MD','20814',38.99,-77.10),
('1101 Wilson Blvd', 'Arlington','VA','22209',38.90,-77.07),
('600 F St NW','Washington','DC','20004',38.89,-77.02),
('300 N Washington St','Alexandria','VA','22314',38.81,-77.05),
('6400 America Blvd','Hyattsville','MD','20782',38.95,-76.94),
('10300 Little Patuxent Pkwy','Columbia','MD','21044',39.22,-76.86);


INSERT INTO customer (name,email,phone,stripe_id) VALUES
('Alice Wong','alice@gmail.com','+14435550101','cus_A1'),
('Ben Singh','ben@gmail.com','+14435550102','cus_A2'),
('Carla Diaz','carla@gmail.com','+14435550103','cus_A3'),
('David Kim','david@gmail.com','+14435550104','cus_A4'),
('Ella Nguyen','ella@gmail.com','+14435550105','cus_A5'),
('Frank Jones','frank@gmail.com','+14435550106','cus_A6'),
('Grace Patel','grace@gmail.com','+14435550107','cus_A7'),
('Hugo Rodriguez','hugo@gmail.com','+14435550108','cus_A8'),
('Ivy Chen','ivy@gmail.com','+14435550109','cus_A9'),
('Jake Brown','jake@gmail.com','+14435550110','cus_A10');

INSERT INTO customer_address_detail
(address_id,customer_id,is_primary) VALUES
(1,1,1),
(2,2,1),
(3,3,1),
(4,4,1),
(5,5,1),
(6,6,1),
(7,7,1),
(8,8,1),
(9,9,1),
(10,10,1),
(11, 1, 0);

INSERT INTO restaurant (name,phone,cuisine_type,rating,is_operational) VALUES
('Maple Diner','+14435550201','American',4.5,1),
('Oak Tandoor','+14435550202','Indian',4.3,1),
('Pine Sushi','+14435550203','Japanese',4.7,1),
('Birch Bella Trattoria','+14435550204','Italian',4.2,1),
('Cedar Cantina','+14435550205','Mexican',4.1,1),
('Spruce Kitchen','+14435550206','Thai',4.4,1),
('Elm Eats','+14435550207','Mediterranean',4.0,1),
('Aspen BBQ','+14435550208','Barbecue',4.6,1),
('Willow Veggie Grill','+14435550209','Vegetarian',4.3,1),
('Poplar Poke','+14435550210','Hawaiian',3.9,1);

INSERT INTO restaurant_address_detail (address_id,restaurant_id,site_type) VALUES
(12, 1,'KITCHEN'),
(13, 2,'PICKUP_ONLY'),
(14, 3,'KITCHEN'),
(15, 4,'PICKUP_ONLY'),
(16, 5,'KITCHEN'),
(17, 6,'PICKUP_ONLY'),
(18, 7,'KITCHEN'),
(19, 8,'PICKUP_ONLY'),
(20, 9,'KITCHEN'),
(21,10,'PICKUP_ONLY');

INSERT INTO delivery_partner
(name,vehicle_type,phone,vehicle_number,status) VALUES
('Zara Miller','Car','+14435550301','MD‑2AB‑101','AVAILABLE'),
('Omar Ali','Bike','+14435550302','MD‑2BX‑202','ON_DELIVERY'),
('Nina Scott','Scooter','+14435550303','MD‑3CD‑303','OFFLINE'),
('Leo Green','Car','+14435550304','VA‑1EF‑404','AVAILABLE'),
('Maya Young','Bike','+14435550305','DC‑4GH‑505','AVAILABLE'),
('Ethan Hill','Car','+14435550306','MD‑5IJ‑606','AVAILABLE'),
('Sara King','Scooter','+14435550307','VA‑6KL‑707','OFFLINE'),
('Ryan Lee','Car','+14435550308','MD‑7MN‑808','AVAILABLE'),
('Tara Fox','Bike','+14435550309','DC‑8OP‑909','AVAILABLE'),
('Ivan Shah','Car','+14435550310','MD‑9QR‑010','OFFLINE');

INSERT INTO promo (promocode,discount,is_valid) VALUES
('WELCOME10',0.10,1),
('SPRING15',0.15,1),
('HOT20',0.20,1),
('VEGGIE5',0.05,1),
('BBQ17',0.17,1),
('SUSHI25',0.25,1),
('TACO12',0.12,1),
('PIZZA08',0.08,1),
('PASTA18',0.18,1),
('POKE22',0.22,1);

INSERT INTO `order`
(customer_id,restaurant_id,delivery_partner_id,order_status,
 confirmed_at,delivery_address,pickup_address,placed_at,delivered_at,
 subtotal,delivery_fee,promo_code,promo_discount,tip,tax,platform_fee,total_amount,payment_status,comments)
VALUES
    (1,1,1,'DELIVERED','2025-05-11 18:10:00',1,1,'2025-05-11 18:00:10','2025-05-11 18:30:00',
     47.97,3.99,1,3.25,4.00,2.50,1.00,56.21,'Captured',NULL),
    (2,2,2,'DELIVERED','2025-05-11 19:05:00',2,2,'2025-05-11 18:50:00','2025-05-11 19:25:00',
     14.99,2.99,2,3.60,3.00,1.88,1.00,20.26,'Captured', NULL),
    (3,3,6,'DELIVERED','2025-05-11 20:20:00',3,3,'2025-05-11 20:05:00','2025-05-11 20:40:00',
     7.99,4.99,3,8.35,5.00,3.25,1.00,13.88,'Captured', NULL),
    (4,4,4,'DELIVERED','2025-05-12 11:40:00',4,4,'2025-05-12 11:25:00','2025-05-12 12:00:00',
     12.99,2.49,4,0.93,2.00,1.20,1.00,18.75,'Captured', NULL),
    (5,5,2,'PICKED_UP','2025-05-12 12:10:00',5,5,'2025-05-12 12:00:30',NULL,
     14.49,2.99,NULL,0.00,3.00,1.62,1.00,23.10,'Pending','No onions'),
    (6,6,NULL,'PREPARING','2025-05-12 12:15:40',6,6,'2025-05-12 12:15:40',NULL,
     30.98,0.00,6,5.56,2.00,1.34,1.00,29.76,'Pending','Extra spicy'),
    (7,7,NULL,'PLACED',NULL,7,7,'2025-05-12 12:18:00',NULL,
     14.49,2.49,NULL,0.00,2.00,1.06,1.00,21.04,'Pending', NULL),
    (8,8,NULL,'PLACED',NULL,8,8,'2025-05-12 12:20:15',NULL,
     14.99,3.99,8,2.91,4.00,2.46,1.00,23.53,'Pending','Sauce on side'),
    (9,9,NULL,'PLACED',NULL,9,9,'2025-05-12 12:22:25',NULL,
     35.98,0.00,9,5.40,3.00,1.80,1.00,36.38,'Pending', NULL),
    (10,10,NULL,'PLACED',NULL,10,10,'2025-05-12 12:25:00',NULL,
     14.99,2.49,10,5.74,3.00,1.58,1.00,17.32,'Pending','Poke bowl, add avocado');

INSERT INTO order_item
(order_id, menu_item_id, item_name, quantity, item_price, add_ons) VALUES
(1, 'EN201', 'Grilled Salmon', 2, 18.99, JSON_ARRAY(JSON_OBJECT('type','ADD_ON','name','Lemon Butter Sauce','price',1.50))),
(1, 'ST101', 'Garlic Bread with Cheese', 1, 6.99, NULL),
(2, 'CU102', 'Butter Chicken', 1, 14.99, NULL),
(3, 'ST301', 'Spicy Edamame', 1, 6.99, JSON_ARRAY(JSON_OBJECT('type','ADD_ON','name','Extra Peanuts','price',1.00))),
(4, 'PZ401', 'Margherita Pizza', 1, 12.99, JSON_ARRAY(JSON_OBJECT('type','REQUEST','note','Well done'))),
(5, 'BR501', 'Chicken Burrito', 1, 12.99, JSON_ARRAY(JSON_OBJECT('type','ADD_ON','name','Extra Guacamole','price',1.50))),
(6, 'SU601', 'Salmon Nigiri Set', 2, 14.99, JSON_ARRAY(JSON_OBJECT('type','ADD_ON','name','Extra Wasabi','price',0.50))),
(7, 'BR701', 'Quiche Lorraine', 1, 11.99, JSON_ARRAY(JSON_OBJECT('type','ADD_ON','name','Side Salad','price',2.50))),
(8, 'GR801', 'Gyro Platter', 1, 13.99, JSON_ARRAY(JSON_OBJECT('type','ADD_ON','name','Extra Tzatziki','price',1.00))),
(9, 'BB901', 'Bulgogi Beef', 2, 15.99, JSON_ARRAY(JSON_OBJECT('type','ADD_ON','name','Extra Rice','price',2.00))),
(10, 'VG1001', 'Falafel Bowl', 1, 12.99, JSON_ARRAY(JSON_OBJECT('type','ADD_ON','name','Extra Falafel','price',2.00)));

INSERT INTO order_payment
(order_id, stripe_customer_id, stripe_txn_id, request_json, response_json, payment_status, amount, initiation_date, confirmation_date)
VALUES
(1, 'cus_A1',  'txn_1001', '{"customer_id":"cus_A1","amt":56.21, "method":"card","currency":"USD"}', '{"status":"fail","customer_id":"cus_A1","transaction_id":"txn_1001" ,"reason":"Insufficient Balance"}', 'Failed', 56.21, '2025-05-11 17:45:00','2025-05-11 17:46:05'),
(1, 'cus_A1',  'txn_1012', '{"customer_id":"cus_A1","amt":56.21, "method":"card","currency":"USD"}', '{"status":"cap","customer_id":"cus_A1","transaction_id":"txn_1012"}', 'Captured', 56.21, '2025-05-11 18:01:00','2025-05-11 18:10:05'),
(2, 'cus_A2',  'txn_1002', '{"customer_id":"cus_A2","amt":20.26, "method":"card","currency":"USD"}', '{"status":"cap","customer_id":"cus_A2","transaction_id":"txn_1002"}', 'Captured', 20.26, '2025-05-11 18:51:00','2025-05-11 19:05:10'),
(3, 'cus_A3',  'txn_1003', '{"customer_id":"cus_A3","amt":13.88, "method":"card","currency":"USD"}', '{"status":"cap","customer_id":"cus_A3","transaction_id":"txn_1003"}', 'Captured', 13.88, '2025-05-11 20:06:00','2025-05-11 20:20:20'),
(4, 'cus_A4',  'txn_1004', '{"customer_id":"cus_A4","amt":18.75, "method":"card","currency":"USD"}', '{"status":"cap","customer_id":"cus_A4","transaction_id":"txn_1004"}', 'Captured', 18.75, '2025-05-12 11:26:00','2025-05-12 11:40:05'),
(5, 'cus_A5',  'txn_1005', '{"customer_id":"cus_A5","amt":23.10, "method":"card","currency":"USD"}', '{"status":"pend","customer_id":"cus_A5","transaction_id":"txn_1005"}', 'Pending', 23.10, '2025-05-12 12:01:00', NULL),
(6, 'cus_A6',  'txn_1006', '{"customer_id":"cus_A6","amt":29.76, "method":"card","currency":"USD"}', '{"status":"pend","customer_id":"cus_A6","transaction_id":"txn_1006"}', 'Pending', 29.76, '2025-05-12 12:16:00', NULL),
(7, 'cus_A7',  'txn_1007', '{"customer_id":"cus_A7","amt":21.04, "method":"card","currency":"USD"}', '{"status":"pend","customer_id":"cus_A7","transaction_id":"txn_1007"}', 'Pending', 21.04, '2025-05-12 12:19:00', NULL),
(8, 'cus_A8',  'txn_1008', '{"customer_id":"cus_A8","amt":23.53, "method":"card","currency":"USD"}', '{"status":"pend","customer_id":"cus_A8","transaction_id":"txn_1008"}', 'Pending', 23.53, '2025-05-12 12:21:00', NULL),
(9, 'cus_A9',  'txn_1023', '{"customer_id":"cus_A9","amt":36.38, "method":"card","currency":"USD"}', '{"status":"pend","customer_id":"cus_A9","transaction_id":"txn_1023"}', 'Pending', 36.38, '2025-05-12 12:23:00', NULL),
(10,'cus_A10', 'txn_1011', '{"customer_id":"cus_A10","amt":17.32, "method":"card","currency":"USD"}', '{"status":"pend","customer_id":"cus_A10", "transaction_id":"txn_1011"}', 'Pending', 17.32, '2025-05-12 12:26:00', NULL);
