const Cart = require("../models/Cart");
const Order = require("../models/Order");

// Create Order
const createOrder = async (req, res) => {
    try {
        const { user, products, totalAmount } = req.body;

        const order = new Order({
            user,
            products,
            totalAmount
        });

        const savedOrder = await order.save();
        await Cart.deleteMany({ user });

        res.status(201).json(savedOrder);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Get All Orders
const getOrders = async (req, res) => {

    try {

        const { user } = req.query;

        const orders = await Order.find({ user })
            .populate("products.product");

        res.status(200).json(orders);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

module.exports = {
    createOrder,
    getOrders
};