# ENPM 818T ‑ Final Project (Group 4) 
Hybrid Relational + Document Data Store for an ForkLift
> University of Maryland – Spring 2025  

---

## Table of Contents
1. [Project Overview](#project-overview)  
2. [Directory Structure](#directory-structure)  
3. [Relational Stack (MySQL)](#relational-stack-mysql)  
4. [Document Stack (MongoDB)](#document-stack-mongodb)  
5. [How to Run the Demo](#how-to-run-the-demo)  
6. [Artifacts & Diagrams](#artifacts--diagrams)  
7. [Recommended Next Steps](#recommended-next-steps)

---

## Project Overview
This project prototypes the **data layer** of a food‑delivery app (think DoorDash / Uber Eats):

| Workload | Tech | Rationale |
|----------|------|-----------|
| **OLTP / transactional**<br>orders, payments, promos | **MySQL 8.0** | Strong ACID guarantees, joins, constraints |
| **Read‑heavy, flexible content**<br>nested menus, tagged items, ratings | **MongoDB 6.x** | Schema‑on‑read, hierarchical docs, fast category queries |

The deliverable includes:
* Fully‑normalized **relational schema** (+ sample data & demo queries).  
* **Document‑oriented collections** mirroring menu & review domains.  
* Conceptual (CDM) and Logical (LDM) data‑model diagrams.  
* A 13‑page report summarizing design choices, trade‑offs, and performance outlook.
* [Presentation Link](https://prezi.com/view/08WFcaOigYoomsvum1Dm/)

---

## Directory Structure
```
Final Project/
├── ENPM818T - Final Project Report.pdf        # design & results write‑up
├── Relational/                                # MySQL artefacts
│   ├── forklift.sql                           # DDL – builds whole schema
│   ├── insert_forklift.sql                    # sample data (~150 rows)
│   ├── ENPM818T(Final)-CDM.jpg                # conceptual ER diagram
│   ├── ENPM818T(Final)-LDM.jpg                # logical ER diagram
│   └── query_demonstration.sql                # 20+ CRUD & analytics queries
│            
└── Documents/                                 # MongoDB artefacts
    ├── create_collections.js                  # JSON schema + indexes
    ├── Insert_document_data.js                # sample menu & review docs
    ├── document_schema_design.json            # Document Schema Design
    ├── query_data.js                          # basic queries
    └── advanced_query_data.js                 # aggregation‑pipeline demos
```

---

## Relational Stack (MySQL)

| Script | What it does |
|--------|--------------|
| **forklift.sql** | Creates database `forklift`, 10 tables, PK/FK & constraints. |
| **insert_forklift.sql** | Seeds addresses, restaurants, customers, orders, etc. |
| **query_demonstration.sql** | Shows inserts, updates, joins, window functions, geo look‑ups, and basic analytics. |

> **Prerequisite**: MySQL ≥ 8.0.17 (for `CHECK`, CTEs, window functions).  
> **Quick load**  
> ```bash
> mysql -u root -p  < ENPM818T_Relational/forklift.sql
> mysql -u root -p  < ENPM818T_Relational/insert_forklift.sql
> mysql -u root -p forklift < ENPM818T_Relational/query_demonstration.sql
> ```
### MongoDB Shell Cheat‑Sheet

```bash
# Open MongoDB Shell
mongosh

# Switch to your project database
use forklift

# List all collections in this database
show collections


# --------- Basic Find Commands For Each Collection ---------

# 1. Show all documents in menu collection
db.menu.find().pretty()

# 2. Show all documents in delivery_tracking collection
db.delivery_tracking.find().pretty()

# 3. Show all documents in restaurant_hours collection
db.restaurant_hours.find().pretty()

# 4. Show all documents in customer_preferences collection
db.customer_preferences.find().pretty()

# 5. Show all documents in review collection
db.review.find().pretty()

# 6. Show all documents in notification_events collection
db.notification_events.find().pretty()

# 7. Show all documents in ops_event_log collection
db.ops_event_log.find().pretty()
```


---

## Document Stack (MongoDB)

| Script | What it does |
|--------|--------------|
| **create_collections.js** | Builds collections `menu`, `rating`, `driver_tracking`, with JSON‑Schema validation & indexes. |
| **Insert_document_data.js** | Seeds ~300 docs covering nested categories, tags, reviews. |
| **query_data.js** | Basic `find()` patterns for menu, ratings, driver status. |
| **advanced_query_data.js** | Aggregation pipelines: `$unwind`, `$group`, `$lookup`, geo queries. |

> **Prerequisite**: MongoDB Server ≥ 6.0 & `mongosh`.  
> **Quick load**  
> ```bash
> mongosh "mongodb://localhost:27017" >     ENPM818T_Documents/create_collections.js
>
> mongosh "mongodb://localhost:27017/forklift" >     ENPM818T_Documents/Insert_document_data.js
>
> # explore
> mongosh "mongodb://localhost:27017/forklift" >     ENPM818T_Documents/query_data.js
> ```

---

## How to Run the Demo

1. **Clone / unzip** the project.  
2. Start **MySQL** and **MongoDB** locally.  
3. Relational (Files to run):
   * forklift.sql
   * insert_forklift.sql
   * query_demonstration.sql
4. Document(Commands to Run Your Files):
   * Run collection creation with validators
   > mongosh "mongodb://localhost:27017/food_delivery" "C:\path\to\create_collections.js"
   * Run data insertion script
   > mongosh "mongodb://localhost:27017/food_delivery" "C:\path\to\Insert_document_data.js"
   * Run query demonstration script
   > mongosh "mongodb://localhost:27017/food_delivery" "C:\path\to\query_data.js"
   * Run advanced query demonstration 
   > mongosh "mongodb://localhost:27017/food_delivery" "C:\path\to\advanced_query_demo.js"


Note:
-----
Replace 'C:\path\to\' with the actual path to your files before running.


---

## Report & Diagrams
| File | Preview                                                                                      |
|------|----------------------------------------------------------------------------------------------|
| `ENPM818T(Final)-CDM.jpg` | Conceptual ER diagram (entities & high‑level relationships).                                 |
| `ENPM818T(Final)-LDM.jpg` | Logical ER diagram (PK/FK, cardinality).                                                     |
| `ENPM818T - Final Project Report.pdf` | 13‑page write‑up: requirements, design rationale, schema evolution, benchmarks, future work. |
