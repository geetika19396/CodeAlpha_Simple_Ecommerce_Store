const express = require("express");
const router = express.Router();

const {
    addToCart,
    getCart,
    removeFromCart,
    updateCartQuantity
} = require("../controllers/cartController");

// Add Product to Cart
router.post("/", addToCart);

// Get Cart
router.get("/", getCart);

// Remove Cart Item
router.delete("/:id", removeFromCart);

// Update Cart Quantity
router.put("/:id", updateCartQuantity);

module.exports = router;