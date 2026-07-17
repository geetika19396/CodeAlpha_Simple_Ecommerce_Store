# 🛒 CodeAlpha E-Commerce Store

A Full Stack E-Commerce Web Application developed as part of the **CodeAlpha Full Stack Development Internship**.

This project allows users to browse products, add them to a shopping cart, update quantities, remove items, place orders, and view order history using a Node.js backend and MongoDB database.

---

## 🚀 Features

* 🛍️ View Products
* 🛒 Add Products to Cart
* ➕ Increase Quantity
* ➖ Decrease Quantity
* 🗑️ Remove Product from Cart
* 💰 Calculate Total Price
* 📦 Place Order
* 📋 View Order History
* 🌐 REST API Integration
* 🍃 MongoDB Atlas Database

---

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Tools

* VS Code
* Git
* GitHub
* Postman

---

## 📁 Project Structure

```text
CodeAlpha_Ecommerce_Store
│
├── controllers/
├── models/
├── routes/
├── frontend/
│   ├── css/
│   ├── js/
│   ├── index.html
│   ├── cart.html
│   └── order.html
│
├── index.js
├── package.json
├── .gitignore
└── README.md
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/geetika19396/CodeAlpha_Ecommerce_Store.git
```

Go to the project folder:

```bash
cd CodeAlpha_Ecommerce_Store
```

Install dependencies:

```bash
npm install
```

Create a `.env` file and add:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Start the backend server:

```bash
node index.js
```

Open **frontend/index.html** using **Live Server**.

---

## 📌 Project Modules

* Home Page
* Product Listing
* Shopping Cart
* Quantity Management
* Remove Product
* Total Price
* Place Order
* Order History

---

## 📚 API Endpoints

| Method | Endpoint    | Description           |
| ------ | ----------- | --------------------- |
| GET    | `/products` | Fetch all products    |
| GET    | `/cart`     | Get cart items        |
| POST   | `/cart`     | Add item to cart      |
| PUT    | `/cart/:id` | Update quantity       |
| DELETE | `/cart/:id` | Remove item from cart |
| POST   | `/orders`   | Place order           |
| GET    | `/orders`   | View all orders       |

---

## 🎯 Learning Outcomes

Through this project, I learned:

* Building REST APIs using Express.js
* MongoDB CRUD Operations
* Mongoose Schema & Models
* Frontend & Backend Integration
* Fetch API
* Git & GitHub Workflow
* Full Stack Project Development

---

## 👩‍💻 Author

**Geetika Rathore**

GitHub: https://github.com/geetika19396

---

## ⭐ Internship

Developed during the **CodeAlpha Full Stack Development Internship**.
