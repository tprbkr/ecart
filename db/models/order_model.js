const mongoose = require('mongoose'),
    mongoConnect = require('../db_connect');//intiate db


const orderSchema = mongoose.Schema({
    order_id: { type: String, required: true },
    item_name: { type: String, required: true },
    cost: { type: Number, required: true },
    order_date: { type: String, required: true },
    delivery_date: { type: String, required: true },
    createdAt: { type: Date, default: new Date() }
}, {
    timestamp: true
});

module.exports = mongoose.model('orders', orderSchema);