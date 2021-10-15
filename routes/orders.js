const express = require('express')
const router = express.Router();
const orderController = require('../controllers/order_controller');

// Create a new order
router.post('/create', orderController.create);
// Retrieve a single order with id
router.get('/search/:id', orderController.findOne);
// Fetch orders in a given date
router.post('/list', orderController.orderList);
// Update a order with id
router.put('/update/:id', orderController.update);
// Delete a order with id
router.delete('/delete/:id', orderController.delete);

module.exports = router
