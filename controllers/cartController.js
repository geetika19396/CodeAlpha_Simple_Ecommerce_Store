const Cart = require("../models/Cart");

// Add Product to Cart
const addToCart = async (req, res) => {

    try {

        const { user, product, quantity } = req.body;

        const cartItem = new Cart({
            user,
            product,
            quantity
        });

        const savedCart = await cartItem.save();

        res.status(201).json(savedCart);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Get User Cart
const getCart = async (req, res) => {

    try {

        const { user } = req.query;

        const cart = await Cart.find({ user })
            .populate("product");

        res.status(200).json(cart);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Remove Cart Item
const removeFromCart = async (req, res) => {

    try {

        await Cart.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "Item removed successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Update Cart Quantity
const updateCartQuantity = async (req, res) => {

    try {

        const { quantity } = req.body;

        const cartItem = await Cart.findById(req.params.id);

        if (!cartItem) {

            return res.status(404).json({
                message: "Cart Item Not Found"
            });

        }

        cartItem.quantity = quantity;

        await cartItem.save();

        res.status(200).json(cartItem);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

module.exports = {
    addToCart,
    getCart,
    removeFromCart,
    updateCartQuantity
};