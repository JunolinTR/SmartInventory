````markdown
# SmartInventory – Inventory Management System

SmartInventory is a **full-stack inventory management system** built with **React, Express.js, Sequelize, and MySQL**.  
It supports **CRUD operations** for inventory management and allows users to query the database using **natural language**, which is converted to SQL queries via **Gemma LLM**.

---

## 🚀 Features

### ✅ Core Features
- Add, update, delete, and view products (CRUD)
- Real-time product listing from the database

### ✅ NLP Query Support
- Users can type natural language queries like:
  - *"Show me all products with stock less than 10"*
  - *"What is the total stock value for category electronics?"*
- **Gemma LLM** converts these queries into SQL and retrieves the data automatically.

---

## 🏗️ Tech Stack

**Frontend:**
- React.js  
- Axios for API calls

**Backend:**
- Node.js + Express.js  
- Sequelize ORM  
- MySQL Database

**AI:**
- **Gemma LLM** for NLP-to-SQL query conversion

---

## 📦 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/JunolinTR/SmartInventory.git
cd SmartInventory
````

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=inventory_db
```

Run database migrations:

```bash
npx sequelize-cli db:migrate
```

Start the server:

```bash
node index.js
# or
nodemon index.js
```

### 3. Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## 🔑 API Endpoints 

### **Products**

| Method | Endpoint           | Description       |
| ------ | ------------------ | ----------------- |
| POST   | `/prod/add`        | Add a new product |
| PUT    | `/prod/update/:id` | Update a product  |
| DELETE | `/prod/delete/:id` | Delete a product  |
| GET    | `/prod/all`        | View all products |

### **NLP Data Agent**

| Method | Endpoint   | Description                                                                          |
| ------ | ---------- | ------------------------------------------------------------------------------------ |
| POST   | `/api/nlp` | Accepts natural language query, converts to SQL via **Gemma LLM**, retrieves results |

---

## 📝 Example NLP Query Flow

1. **User Input:**
   `"Show me all products priced above 500"`

2. **Gemma LLM Output (SQL):**

   ```sql
   SELECT * FROM Products WHERE price > 500;
   ```

3. **System Response:**
   Returns the product list as JSON.

---

## 🗄️ Database Schema (Basic)

### **Products Table**

| Field     | Type     | Description         |
| --------- | -------- | ------------------- |
| id        | INT (PK) | Unique product ID   |
| name      | STRING   | Product name        |
| quantity  | INT      | Available stock     |
| price     | FLOAT    | Product price       |
| createdAt | DATETIME | Record created time |
| updatedAt | DATETIME | Record updated time |
