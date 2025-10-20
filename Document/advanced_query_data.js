// Usage: mongosh "mongodb://localhost:27017/forklift" advanced_query_demo.js

// Switch to the correct database

// 1. Find all menus
//print('--- All Menus ---')
//db.menu.find().forEach(printjson)

// 2. Find menu items tagged 'vegan'
//print('--- Menu Items Tagged Vegan ---')
//db.menu.find({ "categories.items.tags": "vegan" }).forEach(printjson)



// 4. Show only customer_id and rating in reviews
print('--- Review Customer IDs and Ratings Only ---')
db.review.find({}, { customer_id: 1, rating: 1, _id: 0 }).forEach(printjson)

// 5. Sort reviews by most recent
print('--- Reviews Sorted by Most Recent ---')
db.review.find().sort({ created_at: -1 }).forEach(printjson)

// 6. Paginate reviews (Page 2, 5 per page)
print('--- Page 2 of Reviews (5 per page) ---')
db.review.find().skip(5).limit(5).forEach(printjson)

// 7. Regex Search for "delivery" in comments
print('--- Reviews Mentioning Delivery ---')
db.review.find({ comment: /delivery/i }).forEach(printjson)

// 8. Average rating per restaurant
print('--- Average Rating per Restaurant ---')
db.review.aggregate([
  { $group: { _id: "$restaurant_id", avg_rating: { $avg: "$rating" } } }
]).forEach(printjson)

// 9. Top 3 most active customers (most reviews)
print('--- Top 3 Most Active Customers ---')
db.review.aggregate([
  { $group: { _id: "$customer_id", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 3 }
]).forEach(printjson)

// 10. Update a specific review's comment and rating
print('--- Update a Specific Review ---')
db.review.updateOne(
  { customer_id: 1, restaurant_id: 1 },
  { $set: { comment: "Updated review text.", rating: 5 } }
)

// 11. Add reviewed_by_admin flag to all reviews
print('--- Add Reviewed by Admin Flag ---')
db.review.updateMany({}, { $set: { reviewed_by_admin: false } })

// 12. Remove push_tokens from customer_preferences
print('--- Remove Push Tokens from Customer Preferences ---')
db.customer_preferences.updateMany({}, { $unset: { push_tokens: "" } })

// 13. Count all delivery tracking records
print('--- Count of Delivery Tracking Records ---')
print(db.delivery_tracking.countDocuments())

// 14. Delete all reviews with rating less than 3
//print('--- Delete Low Rated Reviews (Below 3) ---')
//db.review.deleteMany({ rating: { $lt: 3 } })
