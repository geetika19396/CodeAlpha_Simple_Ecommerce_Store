const express = require("express");
const router = express.Router();

const {
    getProducts,
    getProductById,
    addProduct
} = require("../controllers/productController");

router.get("/test", (req, res) => {
    res.send("Test Route Working");
});

// Get all products
router.get("/", getProducts);

// Get single product
router.get("/:id", getProductById);

// Add new product
router.post("/", addProduct);

module.exports = router;