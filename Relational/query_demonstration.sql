-- Add a new address to the system for future association with entities like customers or restaurants
INSERT INTO address (street, city, state, zip, latitude, longitude)
VALUES ('999 New St', 'Baltimore', 'MD', '21202', 39.30, -76.60);

-- Retrieve the last inserted address ID to link it with another table
SELECT LAST_INSERT_ID();

-- Sample output:
-- | id | street     | city      | state | zip   | latitude | longitude |
-- | -- | ---------- | --------- | ----- | ----- | -------- | --------- |
-- | 22 | 999 New St | Baltimore | MD    | 21202 | 39.30    | -76.60    |

-- Update the address of a specific restaurant (restaurant_id = 3) to reflect a new location
UPDATE restaurant_address_detail
SET address_id = 22
WHERE restaurant_id = 3;
 
-- Sample output:
-- Before updating the address:
-- | id | restaurant_name | old_address       |
-- | -- | ---------------- | ------------------ |
-- | 3  | Pine Sushi       | 1500 East West Hwy |

-- After updating the address: 
-- | id | restaurant_name | new_address |
-- | -- | ---------------- | ------------ |
-- | 3  | Pine Sushi       | 999 New St   |

-- Update a customer's phone number for contact or verification purposes
Select customer WHERE email = 'alice@gmail.com';
UPDATE customer
SET phone = '+14435559999'
WHERE email = 'alice@gmail.com';

-- Sample output:
-- | id | name        | email            | new_phone     |
-- |----|-------------|------------------|---------------|
-- | 1  | Alice Wong  | alice@gmail.com  | +14435559999  |


-- Mark an order as delivered and record the delivery timestamp
UPDATE `order`
SET order_status = 'DELIVERED',
    delivered_at = NOW()
WHERE id = 5;

-- Sample output:
-- | id | customer_name | restaurant_name | order_status | delivered_at        |
-- |----|---------------|-----------------|--------------|---------------------|
-- | 5  | Ella Nguyen   | Cedar Cantina   | DELIVERED    | 2025-05-12 12:45:00 |

-- Remove a specific promo code from all related orders before deletion to maintain referential integrity
UPDATE `order`
SET promo_code = NULL
WHERE promo_code = 1;

-- Sample output
-- | id | customer_name | previous_promo_code | new_promo_code |
-- | -- | -------------- | ------------------- | -------------- |
-- | 1  | Alice Wong     | 1                   | NULL           |

-- Delete the promo code once it is no longer referenced in the order table
DELETE FROM promo
WHERE id = 1;

-- Sample output:
-- | id | promocode  | discount | is_valid |
-- | -- | ---------- | -------- | -------- |
-- | 2  | SPRING15   | 0.15     | 1        |
-- | 3  | HOT20      | 0.20     | 1        |
-- | 4  | VEGGIE5    | 0.05     | 1        |
-- | 5  | BBQ17      | 0.17     | 1        |
-- | 6  | SUSHI25    | 0.25     | 1        |
-- | 7  | TACO12     | 0.12     | 1        |
-- | 8  | PIZZA08    | 0.08     | 1        |
-- | 9  | PASTA18    | 0.18     | 1        |
-- | 10 | POKE22     | 0.22     | 1        |

-- Delete a customer and all their related records, including orders, order payments, items, and address associations
DELETE FROM order_payment 
WHERE order_id IN (SELECT id FROM `order` WHERE customer_id = 5);

DELETE FROM order_item 
WHERE order_id IN (SELECT id FROM `order` WHERE customer_id = 5);

DELETE FROM `order` 
WHERE customer_id = 5;

DELETE FROM customer_address_detail 
WHERE customer_id = 5;

DELETE FROM customer 
WHERE id = 5;

-- Sample output: -- | id | customer_name | deleted_entities                   |
-- | -- | ------------- | ---------------------------------- |
-- | 5  | Ella Nguyen   | orders, order_items, order_payments, address_association, customer_record |

-- Retrieve all orders along with associated customer and restaurant details for order history analytics
SELECT
    o.id AS order_id,
    c.name AS customer_name,
    r.name AS restaurant_name,
    o.order_status,
    o.total_amount,
    o.placed_at
FROM `order` o
JOIN customer c ON o.customer_id = c.id
JOIN restaurant r ON o.restaurant_id = r.id
ORDER BY o.placed_at DESC;

-- Retrieve delivery-specific orders including the customer and delivery partner details for operational tracking
SELECT
    o.id AS order_id,
    c.name AS customer_name,
    dp.name AS delivery_partner_name,
    dp.vehicle_type,
    o.order_status,
    o.placed_at,
    o.delivered_at
FROM `order` o
JOIN delivery_partner dp ON o.delivery_partner_id = dp.id
JOIN customer c ON o.customer_id = c.id
WHERE o.order_status = 'DELIVERED'
ORDER BY o.delivered_at DESC;

-- Sample output:
-- | order_id | customer_name | delivery_partner_name | vehicle_type | order_status | placed_at           | delivered_at         |
-- | -------- | --------------| ---------------------- | -------------| -------------| --------------------| ---------------------|
-- | 5        | Ella Nguyen   | Omar Ali               | Bike         | DELIVERED    | 2025-05-12 12:00:30 | 2025-05-13 12:16:20  |
-- | 4        | David Kim     | Leo Green              | Car          | DELIVERED    | 2025-05-12 11:25:00 | 2025-05-12 12:00:00  |
-- | 3        | Carla Diaz    | Ethan Hill             | Car          | DELIVERED    | 2025-05-11 20:05:00 | 2025-05-11 20:40:00  |
-- | 2        | Ben Singh     | Omar Ali               | Bike         | DELIVERED    | 2025-05-11 18:50:00 | 2025-05-11 19:25:00  |
-- | 1        | Alice Wong    | Zara Miller            | Car          | DELIVERED    | 2025-05-11 18:00:10 | 2025-05-11 18:30:00  |

-- Calculate total orders, total revenue, and average order value per restaurant for performance analysis
SELECT
    r.name AS restaurant_name,
    COUNT(o.id) AS total_orders,
    SUM(o.total_amount) AS total_revenue,
    AVG(o.total_amount) AS avg_order_value
FROM restaurant r
JOIN `order` o ON r.id = o.restaurant_id
GROUP BY r.name
HAVING COUNT(o.id) >= 1 AND AVG(o.total_amount) > 35;

-- Sample output
-- | restaurant_name | total_orders | total_revenue | avg_order_value |
-- | ----------------| -------------| --------------| ----------------|
-- | Maple Diner     | 1            | 40.74         | 40.740000       |
-- | Pine Sushi      | 1            | 47.64         | 47.640000       |
-- | Cedar Cantina   | 1            | 35.61         | 35.610000       |
-- | Aspen BBQ       | 1            | 42.94         | 42.940000       |

-- Identify customers with high total spend, useful for marketing campaigns
SELECT
    c.name AS customer_name,
    COUNT(o.id) AS total_orders,
    SUM(o.total_amount) AS total_spent,
    AVG(o.total_amount) AS avg_order_value
FROM customer c
JOIN `order` o ON c.id = o.customer_id
GROUP BY c.name
HAVING SUM(o.total_amount) > 25
ORDER BY total_spent DESC;

-- Sample output:
-- | customer_name   | total_orders | total_spent | avg_order_value |
-- |-----------------|--------------|-------------|-----------------|
-- | Carla Diaz      | 1            | 47.64       | 47.640000       |
-- | Hugo Rodriguez  | 1            | 42.94       | 42.940000       |
-- | Alice Wong      | 1            | 40.74       | 40.740000       |
-- | Ella Nguyen     | 1            | 35.61       | 35.610000       |
-- | Ivy Chen        | 1            | 29.39       | 29.390000       |
-- | Ben Singh       | 1            | 28.27       | 28.270000       |
-- | Jake Brown      | 1            | 27.43       | 27.430000       |


-- Analyze promo code usage to understand discount impact and customer engagement
SELECT
    p.promocode,
    COUNT(o.id) AS times_used,
    SUM(o.promo_discount) AS total_discount_given,
    AVG(o.promo_discount) AS avg_discount
FROM promo p
JOIN `order` o ON p.id = o.promo_code
GROUP BY p.promocode
HAVING COUNT(o.id) >= 1
ORDER BY total_discount_given DESC;

-- Sample output:
-- | promocode | times_used | total_discount_given | avg_discount |
-- |-----------|------------|----------------------|--------------|
-- | POKE22    | 1          | 5.74                 | 5.740000     |
-- | SUSHI25   | 1          | 5.56                 | 5.560000     |
-- | PASTA18   | 1          | 5.40                 | 5.400000     |
-- | SPRING15  | 1          | 3.60                 | 3.600000     |
-- | PIZZA08   | 1          | 2.91                 | 2.910000     |
-- | VEGGIE5   | 1          | 0.93                 | 0.930000     |

-- Retrieve the most recent 10 orders with customer information for pagination in user dashboard
SELECT
    o.id AS order_id,
    c.name AS customer_name,
    o.total_amount,
    o.order_status,
    o.placed_at
FROM `order` o
JOIN customer c ON o.customer_id = c.id
ORDER BY o.placed_at DESC
LIMIT 10 OFFSET 0;

-- Sample output:
-- | order_id | customer_name | total_amount | order_status | placed_at           |
-- |----------|----------------|--------------|--------------|---------------------|
-- | 10       | Jake Brown     | 27.43        | PLACED       | 2025-05-12 12:25:00 |
-- | 9        | Ivy Chen       | 29.39        | PLACED       | 2025-05-12 12:22:25 |
-- | 8        | Hugo Rodriguez | 42.94        | PLACED       | 2025-05-12 12:20:15 |
-- | 7        | Grace Patel    | 20.30        | PLACED       | 2025-05-12 12:18:00 |
-- | 6        | Frank Jones    | 21.03        | PREPARING    | 2025-05-12 12:15:40 |
-- | 5        | Ella Nguyen    | 35.61        | DELIVERED    | 2025-05-12 12:00:30 |
-- | 4        | David Kim      | 22.26        | DELIVERED    | 2025-05-12 11:25:00 |
-- | 3        | Carla Diaz     | 47.64        | DELIVERED    | 2025-05-11 20:05:00 |
-- | 2        | Ben Singh      | 28.27        | DELIVERED    | 2025-05-11 18:50:00 |
-- | 1        | Alice Wong     | 40.74        | DELIVERED    | 2025-05-11 18:00:10 |

-- Retrieve a paginated -- Retrieve item-level order details with customer and restaurant info
SELECT
    oi.id AS item_id,
    c.name AS customer_name,
    r.name AS restaurant_name,
    oi.item_name,
    oi.quantity,
    oi.item_price,
    o.placed_at
FROM order_item oi
JOIN `order` o ON oi.order_id = o.id
JOIN customer c ON o.customer_id = c.id
JOIN restaurant r ON o.restaurant_id = r.id
ORDER BY o.placed_at DESC
LIMIT 10 OFFSET 0;

-- Sample output
-- | item_id | customer_name  | restaurant_name       | item_name          | quantity | item_price | placed_at           |
-- |---------|----------------|------------------------|---------------------|----------|------------|---------------------|
-- | 11      | Jake Brown     | Poplar Poke            | Ahi Poke Bowl       | 1        | 14.10      | 2025-05-12 12:25:00 |
-- | 10      | Ivy Chen       | Willow Veggie Grill    | Portobello Burger   | 2        | 9.99       | 2025-05-12 12:22:25 |
-- | 9       | Hugo Rodriguez | Aspen BBQ              | Brisket Sandwich    | 2        | 11.00      | 2025-05-12 12:20:15 |
-- | 8       | Grace Patel    | Elm Eats               | Falafel Wrap        | 1        | 7.75       | 2025-05-12 12:18:00 |
-- | 7       | Frank Jones    | Spruce Kitchen         | Green Curry         | 2        | 8.50       | 2025-05-12 12:15:40 |
-- | 6       | Ella Nguyen    | Cedar Cantina          | Al Pastor Tacos     | 3        | 3.00       | 2025-05-12 12:00:30 |
-- | 5       | David Kim      | Birch Bella Trattoria  | Margherita Pizza    | 1        | 14.00      | 2025-05-12 11:25:00 |
-- | 4       | Carla Diaz     | Pine Sushi             | Dragon Roll         | 3        | 12.50      | 2025-05-11 20:05:00 |
-- | 3       | Ben Singh      | Oak Tandoor            | Chicken Tikka Masala| 1        | 12.00      | 2025-05-11 18:50:00 |
-- | 1       | Alice Wong     | Maple Diner            | Classic Burger      | 2        | 8.00       | 2025-05-11 18:00:10 |

-- Retreive order_details of an order
SELECT 
    c.name AS customer_name,
    c.phone AS customer_phone,
    r.name AS restraunt_name,
    CONCAT_WS(', ', a.street, a.city, a.state, a.zip) AS delivery_address,
    dp.name AS delivery_partner_name,
    dp.phone AS delivery_partner_phone,
    GROUP_CONCAT(oi.item_name
        SEPARATOR ', ') AS order_items,
    o.order_status,
    o.total_amount
FROM
    `order` o
        INNER JOIN
    customer c ON c.id = o.customer_id
        INNER JOIN
    order_item oi ON oi.order_id = o.id
        INNER JOIN
    restaurant r ON r.id = o.restaurant_id
        INNER JOIN
    customer_address_detail ca ON ca.id = o.delivery_address
        INNER JOIN
    address a ON a.id = ca.address_id
        INNER JOIN
    delivery_partner dp ON dp.id = o.delivery_partner_id
WHERE
    o.id = 1;
    
-- Sample output
-- | customer_name | customer_phone | restraunt_name | delivery_address                        | delivery_partner_name | delivery_partner_phone  | order_items                   | order_status  | total_amount |
-- |---------------|----------------|----------------|-----------------------------------------|------------------------|------------------------|-------------------------------|---------------|--------------|
-- | Alice Wong    | +14435550101   | Maple Diner    | 123 Maple St, Baltimore, MD, 21201      | Zara Miller            | +14435550301           | Classic Burger, Classic Fries | DELIVERED     | 40.74        |    