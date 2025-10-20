// Connect to MongoDB and switch to 'forklift' database
// Usage: mongosh "mongodb://localhost:27017" create_collections.js


// 1. menu Collection
db.createCollection("menu", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["restaurant_id", "categories"],
      properties: {
        restaurant_id: { bsonType: "int", description: "FK from SQL" },
        last_sync:     { bsonType: "date" },
        categories: {
          bsonType: "array",
          minItems: 1,
          items: {
            bsonType: "object",
            required: ["name", "items"],
            properties: {
              name:  { bsonType: "string" },
              items: {
                bsonType: "array",
                minItems: 1,
                items: {
                  bsonType: "object",
                  required: ["menu_item_id", "name", "base_price"],
                  properties: {
                    menu_item_id: { bsonType: "string" },
                    name:        { bsonType: "string" },
                    base_price:  { bsonType: "double" },
                    modifiers:   { bsonType: "array" },
                    tags:        { bsonType: "array" },
                    nutrition:   { bsonType: "object" }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
});

// 2. delivery_tracking Collection
db.createCollection("delivery_tracking", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["order_id", "events"],
      properties: {
        order_id: { bsonType: "int" },
        events: {
          bsonType: "array",
          items: {
            bsonType: "object",
            required: ["ts", "status"],
            properties: {
              ts: { bsonType: "date" },
              status: { enum: ["ACCEPTED", "PREPARING", "PICKED_UP", "AT_DOOR", "DELIVERED", "CANCELLED"] },
              location: { bsonType: ["object", "null"] }
            }
          }
        }
      }
    }
  }
});

// 3. restaurant_hours Collection
db.createCollection("restaurant_hours", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["restaurant_id", "regular"],
      properties: {
        restaurant_id: { bsonType: "int", description: "FK from SQL Restaurant.id" },
        regular: {
          bsonType: "array",
          minItems: 7,
          maxItems: 7,
          items: {
            bsonType: "object",
            required: ["day", "open", "close"],
            properties: {
              day:   { bsonType: "int" },
              open:  { bsonType: "string" },
              close: { bsonType: "string" }
            }
          }
        },
        overrides: {
          bsonType: "array",
          items: {
            bsonType: "object",
            required: ["date", "is_closed"],
            properties: {
              date:      { bsonType: "date" },
              is_closed: { bsonType: "bool" },
              open:      { bsonType: "string" },
              close:     { bsonType: "string" }
            }
          }
        }
      }
    }
  }
});

// More validators to be added for customer_preferences, review, notification_events, ops_event_log.


// 4. customer_preferences Collection
db.createCollection("customer_preferences", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["customer_id", "updated_at"],
      properties: {
        customer_id: { bsonType: "int", description: "FK from SQL Customer.id" },
        saved_addresses: { bsonType: "array", items: { bsonType: "int" } },
        favorite_cuisines: { bsonType: "array", items: { bsonType: "string" } },
        dietary_tags: { bsonType: "array", items: { bsonType: "string" } },
        push_tokens: { bsonType: "array", items: { bsonType: "string" } },
        updated_at: { bsonType: "date" }
      }
    }
  }
});

// 5. review Collection
db.createCollection("review", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["customer_id", "restaurant_id", "rating", "comment", "created_at"],
      properties: {
        customer_id: { bsonType: "int", description: "FK from SQL Customer.id" },
        restaurant_id: { bsonType: "int", description: "FK from SQL Restaurant.id" },
        rating: { bsonType: "int", minimum: 1, maximum: 5 },
        comment: { bsonType: "string" },
        photos: { bsonType: "array", items: { bsonType: "string" } },
        created_at: { bsonType: "date" }
      }
    }
  }
});

// 6. notification_events Collection
db.createCollection("notification_events", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["channel", "template", "payload", "status", "attempts", "sent_at"],
      properties: {
        customer_id: { bsonType: ["int", "null"] },
        order_id: { bsonType: ["long", "null"] },
        channel: { bsonType: "string", description: "SMS, PUSH, EMAIL" },
        template: { bsonType: "string" },
        payload: { bsonType: "object" },
        status: { bsonType: "string", enum: ["SENT", "FAILED"] },
        attempts: { bsonType: "int" },
        sent_at: { bsonType: "date" }
      }
    }
  }
});

// 7. ops_event_log Collection
db.createCollection("ops_event_log", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["ts", "component", "level", "message"],
      properties: {
        ts: { bsonType: "date" },
        component: { bsonType: "string" },
        level: { bsonType: "string", enum: ["INFO", "WARN", "ERROR"] },
        message: { bsonType: "string" },
        details: { bsonType: "object" }
      }
    }
  }
});
