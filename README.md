# 🛒 CodeAlpha E-Commerce Store

A Full Stack E-Commerce Web Application developed as part of the **CodeAlpha Full Stack Development Internship**.

This project allows users to register, login, browse products, view product details, add items to the shopping cart, manage quantities, place orders, view order history, and logout securely using a **Node.js + Express.js** backend with **MongoDB Atlas**.

---

# 🚀 Features

- 👤 User Registration
- 🔐 User Login
- 🚪 User Logout
- 🛍️ Product Listing
- 📄 Product Details Page
- 🛒 Shopping Cart
- ➕ Increase Product Quantity
- ➖ Decrease Product Quantity
- 🗑️ Remove Product from Cart
- 💰 Automatic Total Price Calculation
- 📦 Place Order
- 📜 Order History
- 🌐 REST API Integration
- 🍃 MongoDB Atlas Database

---

# 🛠️ Tech Stack

## Frontend

- HTML5
- CSS3
- JavaScript

## Backend

- Node.js
- Express.js

## Database

- MongoDB Atlas
- Mongoose

## Tools

- VS Code
- Git
- GitHub
- Postman
- Live Server

---

# 📁 Project Structure

```text
CodeAlpha_Ecommerce_Store
│
├── controllers/
│   ├── cartController.js
│   ├── orderController.js
│   ├── productController.js
│   └── userController.js
│
├── models/
│   ├── Cart.js
│   ├── Order.js
│   ├── Product.js
│   └── User.js
│
├── routes/
│   ├── cartRoutes.js
│   ├── orderRoutes.js
│   ├── productRoutes.js
│   └── userRoutes.js
│
├── frontend/
│   ├── css/
│   │      style.css
│   │
│   ├── js/
│   │      app.js
│   │      cart.js
│   │      login.js
│   │      logout.js
│   │      order.js
│   │      product.js
│   │      register.js
│   │
│   ├── index.html
│   ├── product.html
│   ├── cart.html
│   ├── login.html
│   ├── register.html
│   └── order.html
│
├── config/
│      db.js
│
├── index.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

# ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/geetika19396/CodeAlpha_Ecommerce_Store.git
```

### Go to Project Folder

```bash
cd CodeAlpha_Ecommerce_Store
```

### Install Dependencies

```bash
npm install
```

### Create .env File

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### Run Backend

```bash
node index.js
```

### Run Frontend

Open

```
frontend/index.html
```

using **Live Server**.

---

# 📌 Project Modules

- User Registration
- User Login
- Home Page
- Product Listing
- Product Details
- Shopping Cart
- Quantity Management
- Remove Product
- Total Price Calculation
- Order Processing
- Order History
- Logout

---

# 📚 REST API Endpoints

## Product APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /products | Get All Products |
| GET | /products/:id | Get Product Details |
| POST | /products | Add Product |

---

## User APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /users/register | Register User |
| POST | /users/login | Login User |

---

## Cart APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /cart | Get Cart |
| POST | /cart | Add Product |
| PUT | /cart/:id | Update Quantity |
| DELETE | /cart/:id | Remove Product |

---

## Order APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /orders | Place Order |
| GET | /orders | Get Orders |

---

# 🎯 Learning Outcomes

Through this project I learned:

- Full Stack Web Development
- REST API Development using Express.js
- MongoDB CRUD Operations
- Mongoose Schema Design
- User Authentication (Register/Login)
- Frontend & Backend Integration
- Fetch API
- Shopping Cart Logic
- Order Processing
- Git & GitHub Workflow

---

# 📸 Project Screens

- 🏠 Home Page
- 📄 Product Details Page
- 🛒 Shopping Cart
- 📦 Order History
- 👤 User Registration
- 🔐 User Login

---

# 👩‍💻 Author

**Geetika Rathore**

GitHub:
https://github.com/geetika19396

Repository:
https://github.com/geetika19396/CodeAlpha_Ecommerce_Store

---

# ⭐ Internship

This project was developed during the **CodeAlpha Full Stack Development Internship** as **Task-1: Simple E-Commerce Store**.

Thank you for visiting this repository. ⭐