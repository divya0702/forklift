// Usage: mongosh "mongodb://localhost:27017/forklift" query_demo_limited_ids_fixed.js

//use forklift

// 1. Query: Find All Menus
print('--- All Menus ---')
db.menu.find().forEach(printjson)

// 2. Query: Find Menus for Restaurant IDs 1-10
for (let i = 1; i <= 10; i++) {
  print('--- Menu for Restaurant ID ' + i + ' ---');
  db.menu.find({ restaurant_id: i }).forEach(printjson);
}

// 3. Query: Find All Delivery Tracking Records
print('--- All Delivery Tracking Events ---')
db.delivery_tracking.find().forEach(printjson)

// 4. Query: Find Delivery Tracking by Order IDs 1-10
for (let i = 1; i <= 10; i++) {
  print('--- Delivery Tracking for Order ID ' + i + ' ---');
  db.delivery_tracking.find({ order_id: i }).forEach(printjson);
}

// 5. Query: Find All Restaurant Hours
print('--- All Restaurant Hours ---')
db.restaurant_hours.find().forEach(printjson)

// 6. Query: Find Hours for Restaurant IDs 1-10
for (let i = 1; i <= 10; i++) {
  print('--- Hours for Restaurant ID ' + i + ' ---');
  db.restaurant_hours.find({ restaurant_id: i }).forEach(printjson);
}

// 7. Query: Find All Customer Preferences
print('--- All Customer Preferences ---')
db.customer_preferences.find().forEach(printjson)

// 8. Query: Find Preferences for Customer IDs 1-10
for (let i = 1; i <= 10; i++) {
  print('--- Preferences for Customer ID ' + i + ' ---');
  db.customer_preferences.find({ customer_id: i }).forEach(printjson);
}

// 9. Query: Find All Reviews
print('--- All Reviews ---')
db.review.find().forEach(printjson)

// 10. Query: Find Reviews for Restaurant IDs 1-10
for (let i = 1; i <= 10; i++) {
  print('--- Reviews for Restaurant ID ' + i + ' ---');
  db.review.find({ restaurant_id: i }).forEach(printjson);
}

// 11. Query: Find All Notification Events
print('--- All Notification Events ---')
db.notification_events.find().forEach(printjson)

// 12. Query: Find Notification Events for Order IDs 1-10
for (let i = 1; i <= 10; i++) {
  print('--- Notification Events for Order ID ' + i + ' ---');
  db.notification_events.find({ order_id: i }).forEach(printjson);
}

// 13. Query: Find All Ops Event Logs
print('--- All Ops Event Logs ---')
db.ops_event_log.find().forEach(printjson)
