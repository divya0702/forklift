// Usage: mongosh "mongodb://localhost:27017" seed_menus.js

//use forklift;

db.menu.insertOne({
  "restaurant_id": 1,
  "last_sync": "new Date(\"2025-05-12T19:23:35.917868Z\")",
  "categories": [
    {
      "name": "Starters",
      "items": [
        {
          "menu_item_id": "ST101",
          "name": "Garlic Bread with Cheese",
          "base_price": 6.99,
          "modifiers": [
            {
              "name": "Extra Cheese",
              "price": 1.5
            },
            {
              "name": "Truffle Oil",
              "price": 2.0
            }
          ],
          "tags": [
            "vegetarian"
          ],
          "nutrition": {
            "calories": 400,
            "protein": 10,
            "fat": 18,
            "carbs": 40
          }
        },
        {
          "menu_item_id": "ST102",
          "name": "Buffalo Chicken Wings",
          "base_price": 10.99,
          "modifiers": [
            {
              "name": "Mild",
              "price": 0
            },
            {
              "name": "Hot",
              "price": 0
            },
            {
              "name": "Extra Dip",
              "price": 1.0
            }
          ],
          "tags": [
            "chicken",
            "spicy"
          ],
          "nutrition": {
            "calories": 750,
            "protein": 35,
            "fat": 50,
            "carbs": 12
          }
        }
      ]
    },
    {
      "name": "Entrees",
      "items": [
        {
          "menu_item_id": "EN201",
          "name": "Grilled Salmon",
          "base_price": 18.99,
          "modifiers": [
            {
              "name": "Lemon Butter Sauce",
              "price": 1.5
            },
            {
              "name": "Extra Veggies",
              "price": 2.0
            }
          ],
          "tags": [
            "seafood",
            "gluten-free"
          ],
          "nutrition": {
            "calories": 650,
            "protein": 40,
            "fat": 30,
            "carbs": 15
          }
        },
        {
          "menu_item_id": "EN202",
          "name": "Ribeye Steak",
          "base_price": 24.99,
          "modifiers": [
            {
              "name": "Medium Rare",
              "price": 0
            },
            {
              "name": "Well Done",
              "price": 0
            },
            {
              "name": "Peppercorn Sauce",
              "price": 2.0
            }
          ],
          "tags": [
            "beef"
          ],
          "nutrition": {
            "calories": 850,
            "protein": 45,
            "fat": 60,
            "carbs": 5
          }
        }
      ]
    },
    {
      "name": "Desserts",
      "items": [
        {
          "menu_item_id": "DS301",
          "name": "Molten Lava Cake",
          "base_price": 7.5,
          "modifiers": [],
          "tags": [
            "dessert",
            "contains-dairy"
          ],
          "nutrition": {
            "calories": 500,
            "protein": 6,
            "fat": 28,
            "carbs": 58
          }
        },
        {
          "menu_item_id": "DS302",
          "name": "Vegan Coconut Ice Cream",
          "base_price": 6.25,
          "modifiers": [],
          "tags": [
            "dessert",
            "vegan"
          ],
          "nutrition": {
            "calories": 320,
            "protein": 2,
            "fat": 20,
            "carbs": 28
          }
        }
      ]
    },
    {
      "name": "Beverages",
      "items": [
        {
          "menu_item_id": "BV401",
          "name": "Cold Brew Coffee",
          "base_price": 3.99,
          "modifiers": [
            {
              "name": "Oat Milk",
              "price": 0.5
            },
            {
              "name": "Sugar-Free Vanilla",
              "price": 0.5
            }
          ],
          "tags": [
            "drink",
            "caffeine"
          ],
          "nutrition": {
            "calories": 70
          }
        },
        {
          "menu_item_id": "BV402",
          "name": "Sparkling Mineral Water",
          "base_price": 2.75,
          "modifiers": [],
          "tags": [
            "drink"
          ],
          "nutrition": {
            "calories": 0
          }
        }
      ]
    }
  ]
});

db.menu.insertOne({
  "restaurant_id": 2,
  "last_sync": "new Date(\"2025-05-12T19:23:35.918316Z\")",
  "categories": [
    {
      "name": "Starters",
      "items": [
        {
          "menu_item_id": "ST201",
          "name": "Paneer Tikka",
          "base_price": 8.99,
          "modifiers": [
            {
              "name": "Extra Spices",
              "price": 1.0
            }
          ],
          "tags": [
            "vegetarian"
          ],
          "nutrition": {
            "calories": 300,
            "protein": 20,
            "fat": 15,
            "carbs": 10
          }
        },
        {
          "menu_item_id": "ST202",
          "name": "Chicken Pakora",
          "base_price": 7.99,
          "modifiers": [
            {
              "name": "Mint Chutney",
              "price": 0.5
            }
          ],
          "tags": [
            "chicken"
          ],
          "nutrition": {
            "calories": 400,
            "protein": 25,
            "fat": 22,
            "carbs": 18
          }
        }
      ]
    },
    {
      "name": "Entrees",
      "items": [
        {
          "menu_item_id": "EN301",
          "name": "Butter Chicken",
          "base_price": 14.99,
          "modifiers": [
            {
              "name": "Extra Cream",
              "price": 1.5
            }
          ],
          "tags": [
            "chicken"
          ],
          "nutrition": {
            "calories": 700,
            "protein": 35,
            "fat": 40,
            "carbs": 30
          }
        },
        {
          "menu_item_id": "EN302",
          "name": "Chana Masala",
          "base_price": 11.99,
          "modifiers": [
            {
              "name": "Extra Chickpeas",
              "price": 1.0
            }
          ],
          "tags": [
            "vegan"
          ],
          "nutrition": {
            "calories": 500,
            "protein": 18,
            "fat": 10,
            "carbs": 45
          }
        }
      ]
    },
    {
      "name": "Desserts",
      "items": [
        {
          "menu_item_id": "DS401",
          "name": "Gulab Jamun",
          "base_price": 5.5,
          "modifiers": [],
          "tags": [
            "dessert"
          ],
          "nutrition": {
            "calories": 350,
            "protein": 5,
            "fat": 12,
            "carbs": 55
          }
        },
        {
          "menu_item_id": "DS402",
          "name": "Kheer (Rice Pudding)",
          "base_price": 4.99,
          "modifiers": [],
          "tags": [
            "dessert",
            "contains-dairy"
          ],
          "nutrition": {
            "calories": 250,
            "protein": 6,
            "fat": 8,
            "carbs": 35
          }
        }
      ]
    },
    {
      "name": "Beverages",
      "items": [
        {
          "menu_item_id": "BV501",
          "name": "Masala Chai",
          "base_price": 3.5,
          "modifiers": [
            {
              "name": "Extra Ginger",
              "price": 0.5
            }
          ],
          "tags": [
            "drink",
            "caffeine"
          ],
          "nutrition": {
            "calories": 100
          }
        },
        {
          "menu_item_id": "BV502",
          "name": "Lassi (Sweet/Salty)",
          "base_price": 4.0,
          "modifiers": [
            {
              "name": "Sweet",
              "price": 0
            },
            {
              "name": "Salty",
              "price": 0
            }
          ],
          "tags": [
            "drink"
          ],
          "nutrition": {
            "calories": 150
          }
        }
      ]
    }
  ]
});

db.menu.insertOne({
  "restaurant_id": 3,
  "last_sync": "new Date(\"2025-05-12T19:23:35.918620Z\")",
  "categories": [
    {
      "name": "Starters",
      "items": [
        {
          "menu_item_id": "ST301",
          "name": "Spring Rolls",
          "base_price": 5.99,
          "modifiers": [],
          "tags": [
            "vegetarian"
          ],
          "nutrition": {
            "calories": 300,
            "protein": 5,
            "fat": 15,
            "carbs": 30
          }
        },
        {
          "menu_item_id": "ST302",
          "name": "Chicken Dumplings",
          "base_price": 7.99,
          "modifiers": [
            {
              "name": "Extra Soy Sauce",
              "price": 0.5
            }
          ],
          "tags": [
            "chicken"
          ],
          "nutrition": {
            "calories": 400,
            "protein": 20,
            "fat": 10,
            "carbs": 35
          }
        }
      ]
    },
    {
      "name": "Entrees",
      "items": [
        {
          "menu_item_id": "EN401",
          "name": "Kung Pao Chicken",
          "base_price": 13.99,
          "modifiers": [
            {
              "name": "Extra Peanuts",
              "price": 1.0
            }
          ],
          "tags": [
            "chicken",
            "spicy"
          ],
          "nutrition": {
            "calories": 600,
            "protein": 35,
            "fat": 25,
            "carbs": 40
          }
        },
        {
          "menu_item_id": "EN402",
          "name": "Vegetable Fried Rice",
          "base_price": 10.99,
          "modifiers": [
            {
              "name": "Add Egg",
              "price": 1.5
            }
          ],
          "tags": [
            "vegetarian"
          ],
          "nutrition": {
            "calories": 550,
            "protein": 15,
            "fat": 18,
            "carbs": 60
          }
        }
      ]
    },
    {
      "name": "Desserts",
      "items": [
        {
          "menu_item_id": "DS501",
          "name": "Mango Pudding",
          "base_price": 4.99,
          "modifiers": [],
          "tags": [
            "dessert"
          ],
          "nutrition": {
            "calories": 200,
            "protein": 3,
            "fat": 5,
            "carbs": 35
          }
        },
        {
          "menu_item_id": "DS502",
          "name": "Sesame Balls",
          "base_price": 5.25,
          "modifiers": [],
          "tags": [
            "dessert"
          ],
          "nutrition": {
            "calories": 300,
            "protein": 4,
            "fat": 15,
            "carbs": 40
          }
        }
      ]
    },
    {
      "name": "Beverages",
      "items": [
        {
          "menu_item_id": "BV601",
          "name": "Jasmine Tea",
          "base_price": 2.99,
          "modifiers": [
            {
              "name": "Honey",
              "price": 0.5
            }
          ],
          "tags": [
            "drink"
          ],
          "nutrition": {
            "calories": 30
          }
        },
        {
          "menu_item_id": "BV602",
          "name": "Lychee Juice",
          "base_price": 3.99,
          "modifiers": [],
          "tags": [
            "drink"
          ],
          "nutrition": {
            "calories": 120
          }
        }
      ]
    }
  ]
});

db.menu.insertOne({
  "restaurant_id": 4,
  "last_sync": "new Date(\"2025-05-12T19:23:35.919279Z\")",
  "categories": [
    {
      "name": "Starters",
      "items": [
        {
          "menu_item_id": "ST401",
          "name": "Bruschetta",
          "base_price": 6.99,
          "modifiers": [
            {
              "name": "Extra Tomato",
              "price": 0.5
            }
          ],
          "tags": [
            "vegetarian"
          ],
          "nutrition": {
            "calories": 250,
            "protein": 5,
            "fat": 10,
            "carbs": 30
          }
        },
        {
          "menu_item_id": "ST402",
          "name": "Calamari Fritti",
          "base_price": 9.99,
          "modifiers": [
            {
              "name": "Spicy Marinara",
              "price": 1.0
            }
          ],
          "tags": [
            "seafood"
          ],
          "nutrition": {
            "calories": 400,
            "protein": 20,
            "fat": 25,
            "carbs": 20
          }
        }
      ]
    },
    {
      "name": "Entrees",
      "items": [
        {
          "menu_item_id": "EN501",
          "name": "Margherita Pizza",
          "base_price": 12.99,
          "modifiers": [
            {
              "name": "Extra Cheese",
              "price": 2.0
            }
          ],
          "tags": [
            "vegetarian"
          ],
          "nutrition": {
            "calories": 800,
            "protein": 25,
            "fat": 30,
            "carbs": 90
          }
        },
        {
          "menu_item_id": "EN502",
          "name": "Spaghetti Carbonara",
          "base_price": 13.99,
          "modifiers": [
            {
              "name": "Extra Bacon",
              "price": 1.5
            }
          ],
          "tags": [
            "pork"
          ],
          "nutrition": {
            "calories": 950,
            "protein": 35,
            "fat": 45,
            "carbs": 75
          }
        }
      ]
    },
    {
      "name": "Desserts",
      "items": [
        {
          "menu_item_id": "DS601",
          "name": "Tiramisu",
          "base_price": 6.5,
          "modifiers": [],
          "tags": [
            "dessert",
            "contains-dairy"
          ],
          "nutrition": {
            "calories": 450,
            "protein": 6,
            "fat": 28,
            "carbs": 35
          }
        },
        {
          "menu_item_id": "DS602",
          "name": "Gelato",
          "base_price": 5.25,
          "modifiers": [
            {
              "name": "Chocolate",
              "price": 0
            },
            {
              "name": "Vanilla",
              "price": 0
            }
          ],
          "tags": [
            "dessert",
            "contains-dairy"
          ],
          "nutrition": {
            "calories": 300,
            "protein": 4,
            "fat": 15,
            "carbs": 25
          }
        }
      ]
    },
    {
      "name": "Beverages",
      "items": [
        {
          "menu_item_id": "BV701",
          "name": "Espresso",
          "base_price": 2.99,
          "modifiers": [],
          "tags": [
            "drink",
            "caffeine"
          ],
          "nutrition": {
            "calories": 10
          }
        },
        {
          "menu_item_id": "BV702",
          "name": "San Pellegrino",
          "base_price": 3.99,
          "modifiers": [],
          "tags": [
            "drink"
          ],
          "nutrition": {
            "calories": 0
          }
        }
      ]
    }
  ]
});

db.menu.insertOne({
  "restaurant_id": 5,
  "last_sync": "new Date(\"2025-05-12T19:23:35.919825Z\")",
  "categories": [
    {
      "name": "Starters",
      "items": [
        {
          "menu_item_id": "ST501",
          "name": "Nachos with Queso",
          "base_price": 7.99,
          "modifiers": [
            {
              "name": "Add Jalape\u00f1os",
              "price": 0.5
            }
          ],
          "tags": [
            "vegetarian"
          ],
          "nutrition": {
            "calories": 450,
            "protein": 12,
            "fat": 28,
            "carbs": 40
          }
        },
        {
          "menu_item_id": "ST502",
          "name": "Chicken Taquitos",
          "base_price": 8.5,
          "modifiers": [
            {
              "name": "Sour Cream",
              "price": 1.0
            }
          ],
          "tags": [
            "chicken"
          ],
          "nutrition": {
            "calories": 500,
            "protein": 22,
            "fat": 30,
            "carbs": 35
          }
        }
      ]
    },
    {
      "name": "Entrees",
      "items": [
        {
          "menu_item_id": "EN601",
          "name": "Chicken Burrito",
          "base_price": 12.99,
          "modifiers": [
            {
              "name": "Extra Guacamole",
              "price": 1.5
            }
          ],
          "tags": [
            "chicken"
          ],
          "nutrition": {
            "calories": 950,
            "protein": 35,
            "fat": 45,
            "carbs": 75
          }
        },
        {
          "menu_item_id": "EN602",
          "name": "Vegetarian Enchiladas",
          "base_price": 11.99,
          "modifiers": [
            {
              "name": "Extra Cheese",
              "price": 1.0
            }
          ],
          "tags": [
            "vegetarian"
          ],
          "nutrition": {
            "calories": 800,
            "protein": 20,
            "fat": 35,
            "carbs": 60
          }
        }
      ]
    },
    {
      "name": "Desserts",
      "items": [
        {
          "menu_item_id": "DS701",
          "name": "Churros with Chocolate",
          "base_price": 5.99,
          "modifiers": [],
          "tags": [
            "dessert"
          ],
          "nutrition": {
            "calories": 420,
            "protein": 6,
            "fat": 20,
            "carbs": 50
          }
        },
        {
          "menu_item_id": "DS702",
          "name": "Flan",
          "base_price": 5.5,
          "modifiers": [],
          "tags": [
            "dessert",
            "contains-dairy"
          ],
          "nutrition": {
            "calories": 300,
            "protein": 5,
            "fat": 18,
            "carbs": 30
          }
        }
      ]
    },
    {
      "name": "Beverages",
      "items": [
        {
          "menu_item_id": "BV801",
          "name": "Horchata",
          "base_price": 3.99,
          "modifiers": [],
          "tags": [
            "drink"
          ],
          "nutrition": {
            "calories": 150
          }
        },
        {
          "menu_item_id": "BV802",
          "name": "Agua de Jamaica",
          "base_price": 3.5,
          "modifiers": [],
          "tags": [
            "drink"
          ],
          "nutrition": {
            "calories": 100
          }
        }
      ]
    }
  ]
});

db.menu.insertOne({
  "restaurant_id": 6,
  "last_sync": "new Date(\"2025-05-12T19:23:35.920351Z\")",
  "categories": [
    {
      "name": "Starters",
      "items": [
        {
          "menu_item_id": "ST601",
          "name": "Miso Soup",
          "base_price": 3.99,
          "modifiers": [],
          "tags": [
            "vegetarian",
            "soup"
          ],
          "nutrition": {
            "calories": 90,
            "protein": 6,
            "fat": 3,
            "carbs": 8
          }
        },
        {
          "menu_item_id": "ST602",
          "name": "Edamame",
          "base_price": 5.5,
          "modifiers": [
            {
              "name": "Spicy",
              "price": 0.5
            }
          ],
          "tags": [
            "vegetarian"
          ],
          "nutrition": {
            "calories": 150,
            "protein": 12,
            "fat": 5,
            "carbs": 12
          }
        }
      ]
    },
    {
      "name": "Entrees",
      "items": [
        {
          "menu_item_id": "EN701",
          "name": "Salmon Nigiri Set",
          "base_price": 14.99,
          "modifiers": [
            {
              "name": "Extra Wasabi",
              "price": 0.5
            }
          ],
          "tags": [
            "seafood",
            "gluten-free"
          ],
          "nutrition": {
            "calories": 400,
            "protein": 30,
            "fat": 10,
            "carbs": 40
          }
        },
        {
          "menu_item_id": "EN702",
          "name": "Veggie Sushi Roll",
          "base_price": 12.99,
          "modifiers": [
            {
              "name": "Add Avocado",
              "price": 1.0
            }
          ],
          "tags": [
            "vegetarian"
          ],
          "nutrition": {
            "calories": 350,
            "protein": 10,
            "fat": 8,
            "carbs": 50
          }
        }
      ]
    },
    {
      "name": "Desserts",
      "items": [
        {
          "menu_item_id": "DS801",
          "name": "Mochi Ice Cream",
          "base_price": 5.99,
          "modifiers": [
            {
              "name": "Green Tea",
              "price": 0
            },
            {
              "name": "Mango",
              "price": 0
            }
          ],
          "tags": [
            "dessert"
          ],
          "nutrition": {
            "calories": 200,
            "protein": 3,
            "fat": 5,
            "carbs": 30
          }
        },
        {
          "menu_item_id": "DS802",
          "name": "Dorayaki (Sweet Pancake)",
          "base_price": 4.99,
          "modifiers": [],
          "tags": [
            "dessert"
          ],
          "nutrition": {
            "calories": 350,
            "protein": 5,
            "fat": 12,
            "carbs": 45
          }
        }
      ]
    },
    {
      "name": "Beverages",
      "items": [
        {
          "menu_item_id": "BV901",
          "name": "Matcha Latte",
          "base_price": 4.99,
          "modifiers": [
            {
              "name": "Oat Milk",
              "price": 0.5
            }
          ],
          "tags": [
            "drink",
            "caffeine"
          ],
          "nutrition": {
            "calories": 120
          }
        },
        {
          "menu_item_id": "BV902",
          "name": "Ramune Soda",
          "base_price": 3.5,
          "modifiers": [],
          "tags": [
            "drink"
          ],
          "nutrition": {
            "calories": 110
          }
        }
      ]
    }
  ]
});

db.menu.insertOne({
  "restaurant_id": 7,
  "last_sync": "new Date(\"2025-05-12T19:23:35.920662Z\")",
  "categories": [
    {
      "name": "Starters",
      "items": [
        {
          "menu_item_id": "ST701",
          "name": "French Onion Soup",
          "base_price": 7.99,
          "modifiers": [
            {
              "name": "Extra Cheese",
              "price": 1.5
            }
          ],
          "tags": [
            "vegetarian"
          ],
          "nutrition": {
            "calories": 250,
            "protein": 8,
            "fat": 15,
            "carbs": 20
          }
        }
      ]
    },
    {
      "name": "Entrees",
      "items": [
        {
          "menu_item_id": "EN801",
          "name": "Quiche Lorraine",
          "base_price": 11.99,
          "modifiers": [
            {
              "name": "Side Salad",
              "price": 2.5
            }
          ],
          "tags": [
            "egg",
            "pork"
          ],
          "nutrition": {
            "calories": 500,
            "protein": 20,
            "fat": 35,
            "carbs": 25
          }
        }
      ]
    },
    {
      "name": "Desserts",
      "items": [
        {
          "menu_item_id": "DS901",
          "name": "Macarons",
          "base_price": 8.99,
          "modifiers": [
            {
              "name": "Assorted Flavors",
              "price": 0
            }
          ],
          "tags": [
            "dessert"
          ],
          "nutrition": {
            "calories": 300,
            "protein": 4,
            "fat": 10,
            "carbs": 35
          }
        },
        {
          "menu_item_id": "DS902",
          "name": "Cr\u00e8me Br\u00fbl\u00e9e",
          "base_price": 7.5,
          "modifiers": [],
          "tags": [
            "dessert",
            "contains-dairy"
          ],
          "nutrition": {
            "calories": 450,
            "protein": 6,
            "fat": 28,
            "carbs": 35
          }
        }
      ]
    },
    {
      "name": "Beverages",
      "items": [
        {
          "menu_item_id": "BV1001",
          "name": "Caf\u00e9 au Lait",
          "base_price": 4.5,
          "modifiers": [],
          "tags": [
            "drink",
            "caffeine"
          ],
          "nutrition": {
            "calories": 120
          }
        },
        {
          "menu_item_id": "BV1002",
          "name": "Sparkling Water",
          "base_price": 2.99,
          "modifiers": [],
          "tags": [
            "drink"
          ],
          "nutrition": {
            "calories": 0
          }
        }
      ]
    }
  ]
});

db.menu.insertOne({
  "restaurant_id": 8,
  "last_sync": "new Date(\"2025-05-12T19:23:35.920881Z\")",
  "categories": [
    {
      "name": "Starters",
      "items": [
        {
          "menu_item_id": "ST801",
          "name": "Dolmades",
          "base_price": 6.99,
          "modifiers": [],
          "tags": [
            "vegetarian"
          ],
          "nutrition": {
            "calories": 150,
            "protein": 3,
            "fat": 5,
            "carbs": 25
          }
        }
      ]
    },
    {
      "name": "Entrees",
      "items": [
        {
          "menu_item_id": "EN901",
          "name": "Gyro Platter",
          "base_price": 13.99,
          "modifiers": [
            {
              "name": "Extra Tzatziki",
              "price": 1.0
            }
          ],
          "tags": [
            "lamb"
          ],
          "nutrition": {
            "calories": 850,
            "protein": 35,
            "fat": 50,
            "carbs": 45
          }
        }
      ]
    },
    {
      "name": "Desserts",
      "items": [
        {
          "menu_item_id": "DS1001",
          "name": "Baklava",
          "base_price": 5.99,
          "modifiers": [],
          "tags": [
            "dessert"
          ],
          "nutrition": {
            "calories": 400,
            "protein": 5,
            "fat": 25,
            "carbs": 40
          }
        }
      ]
    },
    {
      "name": "Beverages",
      "items": [
        {
          "menu_item_id": "BV1101",
          "name": "Greek Coffee",
          "base_price": 3.99,
          "modifiers": [],
          "tags": [
            "drink",
            "caffeine"
          ],
          "nutrition": {
            "calories": 50
          }
        }
      ]
    }
  ]
});

db.menu.insertOne({
  "restaurant_id": 9,
  "last_sync": "new Date(\"2025-05-12T19:23:35.921036Z\")",
  "categories": [
    {
      "name": "Starters",
      "items": [
        {
          "menu_item_id": "ST901",
          "name": "Kimchi Pancake",
          "base_price": 7.99,
          "modifiers": [],
          "tags": [
            "vegetarian",
            "spicy"
          ],
          "nutrition": {
            "calories": 350,
            "protein": 8,
            "fat": 15,
            "carbs": 40
          }
        }
      ]
    },
    {
      "name": "Entrees",
      "items": [
        {
          "menu_item_id": "EN1001",
          "name": "Bulgogi Beef",
          "base_price": 15.99,
          "modifiers": [
            {
              "name": "Extra Rice",
              "price": 2.0
            }
          ],
          "tags": [
            "beef"
          ],
          "nutrition": {
            "calories": 750,
            "protein": 40,
            "fat": 35,
            "carbs": 50
          }
        }
      ]
    },
    {
      "name": "Desserts",
      "items": [
        {
          "menu_item_id": "DS1101",
          "name": "Hotteok (Sweet Pancake)",
          "base_price": 4.99,
          "modifiers": [],
          "tags": [
            "dessert"
          ],
          "nutrition": {
            "calories": 400,
            "protein": 5,
            "fat": 20,
            "carbs": 45
          }
        }
      ]
    },
    {
      "name": "Beverages",
      "items": [
        {
          "menu_item_id": "BV1201",
          "name": "Sikhye (Rice Drink)",
          "base_price": 3.5,
          "modifiers": [],
          "tags": [
            "drink"
          ],
          "nutrition": {
            "calories": 150
          }
        }
      ]
    }
  ]
});

db.menu.insertOne({
  "restaurant_id": 10,
  "last_sync": "new Date(\"2025-05-12T19:23:35.921185Z\")",
  "categories": [
    {
      "name": "Starters",
      "items": [
        {
          "menu_item_id": "ST1001",
          "name": "Hummus with Pita",
          "base_price": 6.99,
          "modifiers": [
            {
              "name": "Extra Olive Oil",
              "price": 0.5
            }
          ],
          "tags": [
            "vegan"
          ],
          "nutrition": {
            "calories": 300,
            "protein": 8,
            "fat": 15,
            "carbs": 35
          }
        }
      ]
    },
    {
      "name": "Entrees",
      "items": [
        {
          "menu_item_id": "EN1101",
          "name": "Falafel Bowl",
          "base_price": 12.99,
          "modifiers": [
            {
              "name": "Extra Falafel",
              "price": 2.0
            }
          ],
          "tags": [
            "vegan"
          ],
          "nutrition": {
            "calories": 600,
            "protein": 20,
            "fat": 25,
            "carbs": 60
          }
        }
      ]
    },
    {
      "name": "Desserts",
      "items": [
        {
          "menu_item_id": "DS1201",
          "name": "Date Energy Balls",
          "base_price": 4.99,
          "modifiers": [],
          "tags": [
            "dessert",
            "vegan"
          ],
          "nutrition": {
            "calories": 250,
            "protein": 4,
            "fat": 10,
            "carbs": 30
          }
        }
      ]
    },
    {
      "name": "Beverages",
      "items": [
        {
          "menu_item_id": "BV1301",
          "name": "Mint Lemonade",
          "base_price": 3.99,
          "modifiers": [],
          "tags": [
            "drink"
          ],
          "nutrition": {
            "calories": 120
          }
        }
      ]
    }
  ]
});







// 2. delivery_tracking Collection
// Delivery Tracking for Order ID 1
db.delivery_tracking.insertOne({
  order_id: 1,
  events: [
    { ts: new Date("2025-06-01T12:00:00Z"), status: "ACCEPTED" },
    { ts: new Date("2025-06-01T12:05:00Z"), status: "PREPARING" },
    { ts: new Date("2025-06-01T12:15:00Z"), status: "PICKED_UP", location: { type: "Point", coordinates: [-76.91, 38.91] } },
    { ts: new Date("2025-06-01T12:40:00Z"), status: "AT_DOOR", location: { type: "Point", coordinates: [-76.95, 38.98] } },
    { ts: new Date("2025-06-01T12:42:00Z"), status: "DELIVERED" }
  ]
});

// Delivery Tracking for Order ID 2
db.delivery_tracking.insertOne({
  order_id: 2,
  events: [
    { ts: new Date("2025-06-01T12:00:00Z"), status: "ACCEPTED" },
    { ts: new Date("2025-06-01T12:05:00Z"), status: "PREPARING" },
    { ts: new Date("2025-06-01T12:15:00Z"), status: "PICKED_UP", location: { type: "Point", coordinates: [-76.92, 38.92] } },
    { ts: new Date("2025-06-01T12:40:00Z"), status: "AT_DOOR", location: { type: "Point", coordinates: [-76.95, 38.98] } },
    { ts: new Date("2025-06-01T12:42:00Z"), status: "DELIVERED" }
  ]
});

// Delivery Tracking for Order ID 3
db.delivery_tracking.insertOne({
  order_id: 3,
  events: [
    { ts: new Date("2025-06-01T12:00:00Z"), status: "ACCEPTED" },
    { ts: new Date("2025-06-01T12:05:00Z"), status: "PREPARING" },
    { ts: new Date("2025-06-01T12:15:00Z"), status: "PICKED_UP", location: { type: "Point", coordinates: [-76.93, 38.93] } },
    { ts: new Date("2025-06-01T12:40:00Z"), status: "AT_DOOR", location: { type: "Point", coordinates: [-76.95, 38.98] } },
    { ts: new Date("2025-06-01T12:42:00Z"), status: "DELIVERED" }
  ]
});

// Delivery Tracking for Order ID 4


db.delivery_tracking.insertOne({
  order_id: 4,
  events: [
    { ts: new Date("2025-06-01T12:00:00Z"), status: "ACCEPTED" },
    { ts: new Date("2025-06-01T12:05:00Z"), status: "PREPARING" },
    { ts: new Date("2025-06-01T12:15:00Z"), status: "PICKED_UP", location: { type: "Point", coordinates: [-76.94, 38.99] } },
    { ts: new Date("2025-06-01T12:40:00Z"), status: "AT_DOOR", location: { type: "Point", coordinates: [-76.95, 38.98] } },
    { ts: new Date("2025-06-01T12:42:00Z"), status: "DELIVERED" }
  ]
});

// Tracking for Order ID 5
db.delivery_tracking.insertOne({
  order_id: 5,
  events: [
    { ts: new Date("2025-06-02T13:00:00Z"), status: "ACCEPTED" },
    { ts: new Date("2025-06-02T13:10:00Z"), status: "PREPARING" },
    { ts: new Date("2025-06-02T13:25:00Z"), status: "PICKED_UP", location: { type: "Point", coordinates: [-77.00, 39.00] } },
    { ts: new Date("2025-06-02T13:50:00Z"), status: "DELIVERED" }
  ]
});

// Tracking for Order ID 6
db.delivery_tracking.insertOne({
  order_id: 6,
  events: [
    { ts: new Date("2025-06-03T14:00:00Z"), status: "ACCEPTED" },
    { ts: new Date("2025-06-03T14:05:00Z"), status: "CANCELLED" }
  ]
});

// Tracking for Order ID 7
db.delivery_tracking.insertOne({
  order_id: 7,
  events: [
    { ts: new Date("2025-06-04T15:00:00Z"), status: "ACCEPTED" },
    { ts: new Date("2025-06-04T15:15:00Z"), status: "PREPARING" },
    { ts: new Date("2025-06-04T15:30:00Z"), status: "PICKED_UP", location: { type: "Point", coordinates: [-77.01, 39.01] } },
    { ts: new Date("2025-06-04T15:55:00Z"), status: "DELIVERED" }
  ]
});

// Tracking for Order ID 8
db.delivery_tracking.insertOne({
  order_id: 8,
  events: [
    { ts: new Date("2025-06-05T16:00:00Z"), status: "ACCEPTED" },
    { ts: new Date("2025-06-05T16:10:00Z"), status: "PREPARING" },
    { ts: new Date("2025-06-05T16:25:00Z"), status: "PICKED_UP", location: { type: "Point", coordinates: [-77.02, 39.02] } },
    { ts: new Date("2025-06-05T16:50:00Z"), status: "DELIVERED" }
  ]
});

// Tracking for Order ID 9
db.delivery_tracking.insertOne({
  order_id: 9,
  events: [
    { ts: new Date("2025-06-06T17:00:00Z"), status: "ACCEPTED" },
    { ts: new Date("2025-06-06T17:15:00Z"), status: "PREPARING" },
    { ts: new Date("2025-06-06T17:35:00Z"), status: "PICKED_UP", location: { type: "Point", coordinates: [-77.03, 39.03] } },
    { ts: new Date("2025-06-06T18:00:00Z"), status: "DELIVERED" }
  ]
});

// Tracking for Order ID 10
db.delivery_tracking.insertOne({
  order_id: 10,
  events: [
    { ts: new Date("2025-06-07T18:00:00Z"), status: "ACCEPTED" },
    { ts: new Date("2025-06-07T18:10:00Z"), status: "PREPARING" },
    { ts: new Date("2025-06-07T18:25:00Z"), status: "PICKED_UP", location: { type: "Point", coordinates: [-77.04, 39.04] } },
    { ts: new Date("2025-06-07T18:50:00Z"), status: "DELIVERED" }
  ]
});


// 3. restaurant_hours Collection
db.restaurant_hours.insertOne({
  restaurant_id: 1,
  regular: [
    { day: 1, open: "11:00", close: "23:00" },
    { day: 2, open: "11:00", close: "23:00" },
    { day: 3, open: "11:00", close: "23:00" },
    { day: 4, open: "11:00", close: "00:00" },
    { day: 5, open: "11:00", close: "00:00" },
    { day: 6, open: "10:00", close: "00:00" },
    { day: 7, open: "10:00", close: "22:00" }
  ],
  overrides: [
    { date: new Date("2025-11-24"), is_closed: true },
    { date: new Date("2025-12-31"), is_closed: false, open: "18:00", close: "02:00" }
  ]
});
// Hours for Restaurant 2
db.restaurant_hours.insertOne({
  restaurant_id: 2,
  regular: [
    { day: 1, open: "10:00", close: "22:00" },
    { day: 2, open: "10:00", close: "22:00" },
    { day: 3, open: "10:00", close: "22:00" },
    { day: 4, open: "10:00", close: "23:00" },
    { day: 5, open: "10:00", close: "23:00" },
    { day: 6, open: "09:00", close: "23:59" },
    { day: 7, open: "09:00", close: "21:00" }
  ],
  overrides: [
    { date: new Date("2025-12-25"), is_closed: true },
    { date: new Date("2025-12-31"), is_closed: false, open: "17:00", close: "01:00" }
  ]
});

// Hours for Restaurant 3
db.restaurant_hours.insertOne({
  restaurant_id: 3,
  regular: [
    { day: 1, open: "10:00", close: "22:00" },
    { day: 2, open: "10:00", close: "22:00" },
    { day: 3, open: "10:00", close: "22:00" },
    { day: 4, open: "10:00", close: "23:00" },
    { day: 5, open: "10:00", close: "23:00" },
    { day: 6, open: "09:00", close: "23:59" },
    { day: 7, open: "09:00", close: "21:00" }
  ],
  overrides: [
    { date: new Date("2025-12-25"), is_closed: true },
    { date: new Date("2025-12-31"), is_closed: false, open: "17:00", close: "01:00" }
  ]
});

// Hours for Restaurant 4
db.restaurant_hours.insertOne({
  restaurant_id: 4,
  regular: [
    { day: 1, open: "10:00", close: "22:00" },
    { day: 2, open: "10:00", close: "22:00" },
    { day: 3, open: "10:00", close: "22:00" },
    { day: 4, open: "10:00", close: "23:00" },
    { day: 5, open: "10:00", close: "23:00" },
    { day: 6, open: "09:00", close: "23:59" },
    { day: 7, open: "09:00", close: "21:00" }
  ],
  overrides: [
    { date: new Date("2025-12-25"), is_closed: true },
    { date: new Date("2025-12-31"), is_closed: false, open: "17:00", close: "01:00" }
  ]
});

// Hours for Restaurant 5
db.restaurant_hours.insertOne({
  restaurant_id: 5,
  regular: [
    { day: 1, open: "10:00", close: "22:00" },
    { day: 2, open: "10:00", close: "22:00" },
    { day: 3, open: "10:00", close: "22:00" },
    { day: 4, open: "10:00", close: "23:00" },
    { day: 5, open: "10:00", close: "23:00" },
    { day: 6, open: "09:00", close: "23:59" },
    { day: 7, open: "09:00", close: "21:00" }
  ],
  overrides: [
    { date: new Date("2025-12-25"), is_closed: true },
    { date: new Date("2025-12-31"), is_closed: false, open: "17:00", close: "01:00" }
  ]
});

// Hours for Restaurant 6
db.restaurant_hours.insertOne({
  restaurant_id: 6,
  regular: [
    { day: 1, open: "10:00", close: "22:00" },
    { day: 2, open: "10:00", close: "22:00" },
    { day: 3, open: "10:00", close: "22:00" },
    { day: 4, open: "10:00", close: "23:00" },
    { day: 5, open: "10:00", close: "23:00" },
    { day: 6, open: "09:00", close: "23:59" },
    { day: 7, open: "09:00", close: "21:00" }
  ],
  overrides: [
    { date: new Date("2025-12-25"), is_closed: true },
    { date: new Date("2025-12-31"), is_closed: false, open: "17:00", close: "01:00" }
  ]
});

// Hours for Restaurant 7
db.restaurant_hours.insertOne({
  restaurant_id: 7,
  regular: [
    { day: 1, open: "10:00", close: "22:00" },
    { day: 2, open: "10:00", close: "22:00" },
    { day: 3, open: "10:00", close: "22:00" },
    { day: 4, open: "10:00", close: "23:00" },
    { day: 5, open: "10:00", close: "23:00" },
    { day: 6, open: "09:00", close: "23:59" },
    { day: 7, open: "09:00", close: "21:00" }
  ],
  overrides: [
    { date: new Date("2025-12-25"), is_closed: true },
    { date: new Date("2025-12-31"), is_closed: false, open: "17:00", close: "01:00" }
  ]
});

// Hours for Restaurant 8
db.restaurant_hours.insertOne({
  restaurant_id: 8,
  regular: [
    { day: 1, open: "10:00", close: "22:00" },
    { day: 2, open: "10:00", close: "22:00" },
    { day: 3, open: "10:00", close: "22:00" },
    { day: 4, open: "10:00", close: "23:00" },
    { day: 5, open: "10:00", close: "23:00" },
    { day: 6, open: "09:00", close: "23:59" },
    { day: 7, open: "09:00", close: "21:00" }
  ],
  overrides: [
    { date: new Date("2025-12-25"), is_closed: true },
    { date: new Date("2025-12-31"), is_closed: false, open: "17:00", close: "01:00" }
  ]
});

// Hours for Restaurant 9
db.restaurant_hours.insertOne({
  restaurant_id: 9,
  regular: [
    { day: 1, open: "10:00", close: "22:00" },
    { day: 2, open: "10:00", close: "22:00" },
    { day: 3, open: "10:00", close: "22:00" },
    { day: 4, open: "10:00", close: "23:00" },
    { day: 5, open: "10:00", close: "23:00" },
    { day: 6, open: "09:00", close: "23:59" },
    { day: 7, open: "09:00", close: "21:00" }
  ],
  overrides: [
    { date: new Date("2025-12-25"), is_closed: true },
    { date: new Date("2025-12-31"), is_closed: false, open: "17:00", close: "01:00" }
  ]
});

// Hours for Restaurant 10
db.restaurant_hours.insertOne({
  restaurant_id: 10,
  regular: [
    { day: 1, open: "10:00", close: "22:00" },
    { day: 2, open: "10:00", close: "22:00" },
    { day: 3, open: "10:00", close: "22:00" },
    { day: 4, open: "10:00", close: "23:00" },
    { day: 5, open: "10:00", close: "23:00" },
    { day: 6, open: "09:00", close: "23:59" },
    { day: 7, open: "09:00", close: "21:00" }
  ],
  overrides: [
    { date: new Date("2025-12-25"), is_closed: true },
    { date: new Date("2025-12-31"), is_closed: false, open: "17:00", close: "01:00" }
  ]
});



// 4. customer_preferences Collection
// Preferences for Customer ID 1
db.customer_preferences.insertOne({
  customer_id: 1,
  saved_addresses: [710, 711],
  favorite_cuisines: ["Cuisine_1A", "Cuisine_1B"],
  dietary_tags: ["tag_1A", "tag_1B"],
  push_tokens: ["token_1a", "token_1b"],
  updated_at: new Date()
});

// Preferences for Customer ID 2
db.customer_preferences.insertOne({
  customer_id: 2,
  saved_addresses: [720, 721],
  favorite_cuisines: ["Cuisine_2A", "Cuisine_2B"],
  dietary_tags: ["tag_2A", "tag_2B"],
  push_tokens: ["token_2a", "token_2b"],
  updated_at: new Date()
});

// Preferences for Customer ID 3
db.customer_preferences.insertOne({
  customer_id: 3,
  saved_addresses: [730, 731],
  favorite_cuisines: ["Cuisine_3A", "Cuisine_3B"],
  dietary_tags: ["tag_3A", "tag_3B"],
  push_tokens: ["token_3a", "token_3b"],
  updated_at: new Date()
});

// Preferences for Customer ID 4
db.customer_preferences.insertOne({
  customer_id: 4,
  saved_addresses: [740, 741],
  favorite_cuisines: ["Cuisine_4A", "Cuisine_4B"],
  dietary_tags: ["tag_4A", "tag_4B"],
  push_tokens: ["token_4a", "token_4b"],
  updated_at: new Date()
});

// Preferences for Customer ID 5

db.customer_preferences.insertOne({
  customer_id: 5,
  saved_addresses: [701, 702, 703],
  favorite_cuisines: ["Korean", "Italian", "Mediterranean"],
  dietary_tags: ["gluten-free", "low-carb", "nut-free"],
  push_tokens: ["token_xyz", "token_abc", "token_123"],
  updated_at: new Date()
});
// Preferences for Customer ID 6
db.customer_preferences.insertOne({
  customer_id: 6,
  saved_addresses: [704, 705],
  favorite_cuisines: ["Indian", "Mexican"],
  dietary_tags: ["vegan", "soy-free"],
  push_tokens: ["token_456", "token_789"],
  updated_at: new Date()
});

// Preferences for Customer ID 7
db.customer_preferences.insertOne({
  customer_id: 7,
  saved_addresses: [706],
  favorite_cuisines: ["Japanese", "Chinese"],
  dietary_tags: ["low-sodium"],
  push_tokens: ["token_101112"],
  updated_at: new Date()
});

// Preferences for Customer ID 8
db.customer_preferences.insertOne({
  customer_id: 8,
  saved_addresses: [707, 708, 709],
  favorite_cuisines: ["French", "Spanish"],
  dietary_tags: ["dairy-free", "gluten-free"],
  push_tokens: ["token_131415", "token_161718"],
  updated_at: new Date()
});

// Preferences for Customer ID 8
db.customer_preferences.insertOne({
  customer_id: 8,
  saved_addresses: [707, 708, 709],
  favorite_cuisines: ["French", "Spanish"],
  dietary_tags: ["dairy-free", "gluten-free"],
  push_tokens: ["token_131415", "token_161718"],
  updated_at: new Date()
});

// Preferences for Customer ID 9
db.customer_preferences.insertOne({
  customer_id: 8,
  saved_addresses: [707, 708, 709],
  favorite_cuisines: ["French", "Spanish"],
  dietary_tags: ["dairy-free", "gluten-free"],
  push_tokens: ["token_131415", "token_161718"],
  updated_at: new Date()
});




// 5. review Collection

// Review 1
db.review.insertOne({
  customer_id: 1,
  restaurant_id: 1,
  rating: 4,
  comment: "Great pasta, but delivery was slightly late.",
  photos: ["https://cdn.example.com/images/review123.jpg"],
  created_at: new Date()
});

// Review 2
db.review.insertOne({
  customer_id: 2,
  restaurant_id: 2,
  rating: 5,
  comment: "Amazing flavors and authentic Indian spices!",
  photos: ["https://cdn.example.com/images/review124.jpg", "https://cdn.example.com/images/review125.jpg"],
  created_at: new Date()
});

// Review 3
db.review.insertOne({
  customer_id: 3,
  restaurant_id: 3,
  rating: 3,
  comment: "Korean BBQ was decent but the sides were a bit cold.",
  photos: [],
  created_at: new Date()
});

// Review 4
db.review.insertOne({
  customer_id: 4,
  restaurant_id: 4,
  rating: 5,
  comment: "Best pizza I've had outside of Italy!",
  photos: ["https://cdn.example.com/images/review126.jpg"],
  created_at: new Date()
});

// Review 5
db.review.insertOne({
  customer_id: 5,
  restaurant_id: 5,
  rating: 2,
  comment: "Tacos were soggy and the delivery was late.",
  photos: [],
  created_at: new Date()
});

// 6. notification_events Collection

// Notification Event 1
db.notification_events.insertOne({
  customer_id: 1,
  order_id: 1,
  channel: "EMAIL",
  template: "ORDER_PLACED",
  payload: {
    message: "ORDER PLACED for order 1",
    timestamp: new Date()
  },
  status: "SENT",
  attempts: 1,
  sent_at: new Date()
});

// Notification Event 2
db.notification_events.insertOne({
  customer_id: 2,
  order_id: 2,
  channel: "PUSH",
  template: "ORDER_CONFIRMED",
  payload: {
    message: "ORDER CONFIRMED for order 2",
    timestamp: new Date()
  },
  status: "SENT",
  attempts: 1,
  sent_at: new Date()
});

// Notification Event 3
db.notification_events.insertOne({
  customer_id: 3,
  order_id: 3,
  channel: "SMS",
  template: "PREPARATION_STARTED",
  payload: {
    message: "PREPARATION STARTED for order 3",
    timestamp: new Date()
  },
  status: "SENT",
  attempts: 1,
  sent_at: new Date()
});

// Notification Event 4
db.notification_events.insertOne({
  customer_id: 4,
  order_id: 4,
  channel: "EMAIL",
  template: "COURIER_ASSIGNED",
  payload: {
    message: "COURIER ASSIGNED for order 4",
    timestamp: new Date()
  },
  status: "FAILED",
  attempts: 2,
  sent_at: new Date()
});

// Notification Event 5
db.notification_events.insertOne({
  customer_id: 5,
  order_id: 5,
  channel: "PUSH",
  template: "OUT_FOR_DELIVERY",
  payload: {
    message: "OUT FOR DELIVERY for order 5",
    timestamp: new Date()
  },
  status: "SENT",
  attempts: 1,
  sent_at: new Date()
});

// Notification Event 6
db.notification_events.insertOne({
  customer_id: 6,
  order_id: 6,
  channel: "SMS",
  template: "DELIVERY_UPDATE",
  payload: {
    message: "DELIVERY UPDATE for order 6",
    timestamp: new Date()
  },
  status: "SENT",
  attempts: 1,
  sent_at: new Date()
});

// Notification Event 7
db.notification_events.insertOne({
  customer_id: 7,
  order_id: 7,
  channel: "EMAIL",
  template: "ORDER_DELIVERED",
  payload: {
    message: "ORDER DELIVERED for order 7",
    timestamp: new Date()
  },
  status: "SENT",
  attempts: 1,
  sent_at: new Date()
});

// Notification Event 8
db.notification_events.insertOne({
  customer_id: 8,
  order_id: 8,
  channel: "PUSH",
  template: "FEEDBACK_REQUEST",
  payload: {
    message: "FEEDBACK REQUEST for order 8",
    timestamp: new Date()
  },
  status: "FAILED",
  attempts: 2,
  sent_at: new Date()
});

// Notification Event 9
db.notification_events.insertOne({
  customer_id: 9,
  order_id: 9,
  channel: "EMAIL",
  template: "DISCOUNT_OFFER",
  payload: {
    message: "DISCOUNT OFFER for order 9",
    timestamp: new Date()
  },
  status: "SENT",
  attempts: 1,
  sent_at: new Date()
});

// Notification Event 10
db.notification_events.insertOne({
  customer_id: 10,
  order_id: 10,
  channel: "PUSH",
  template: "LOYALTY_REWARD",
  payload: {
    message: "LOYALTY REWARD for order 10",
    timestamp: new Date()
  },
  status: "SENT",
  attempts: 1,
  sent_at: new Date()
});



// 7. ops_event_log Collection
db.ops_event_log.insertOne({
  ts: new Date(),
  component: "restaurant-dashboard",
  level: "ERROR",
  message: "Payment gateway timeout",
  details: {
    error_code: "PG_TIMEOUT_504",
    retry_attempts: 3,
    order_id: 4
  }
});
