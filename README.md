# 📝 Mongoose Testing Blogpost API

A test-driven Node.js backend application designed to master data schemas, virtual types, middleware hooks, and complex relational associations using MongoDB and Mongoose.

## ✨ Features

* **Test-Driven Development**: Full test coverage utilizing Mocha and Chai to validate database behavior, schema definitions, and model lifecycles.
* **Relational Associations**: Implements and tests deep data relations between `Users`, `BlogPosts`, and `Comments` inside a document-based database.
* **Lifecycle Middleware**: Features automated data cleanup using custom Mongoose `pre('deleteOne')` pre-hooks to cascade and wipe dangling records gracefully.
* **Virtual Fields**: Dynamically computes document properties (like `postCount`) on the fly without persisting redundant fields to the collection.
* **Subdocuments**: Demonstrates nesting subdocument schemas within a parent document parent pattern to represent embedded data relationships efficiently.
* **Docker Orchestration**: Pre-configured with an isolated volume to instantly boot a local test database clone.

## 🛠️ Tech Stack

* **Backend Framework**: Node.js, Express.js
* **Database & Modeling**: MongoDB, Mongoose
* **Testing Suite**: Mocha
* **Infrastructure**: Docker, Docker Compose

## ⚙️ Quick Start

### 1. Install Dependencies

```bash
npm install

```

### 2. Run Database (Docker)

```bash
docker compose up -d

```

### 3. Run Automated Tests

```bash
npm run test

```

## 🧪 Validated Test Suites

* `create_test.js` — Verifies successful document insertion and schema validation rules.
* `reading_test.js` — Validates basic query selectors, strict criteria matching, and `ObjectId` lookups.
* `update_test.js` — Asserts modification operations using both class-level operators and model instance mechanics.
* `delete_test.js` — Tests record destruction via `deleteMany`, `findOneAndDelete`, and `findByIdAndDelete`.
* `subdocument_test.js` — Asserts subdocument lifecycle processes including embedding, fetching, and removing embedded sub-records cleanly.
* `virtual_type.js` — Verifies that virtual getter logic computes data states seamlessly.
* `association_test.js` — Evaluates relational integrity across separate collections using Mongoose `populate` mappings.
* `middleware_test.js` — Guarantees that removing a user automatically triggers a cascade delete for all associated blog posts.
