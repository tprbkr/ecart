const orderServies = require("../services/order_service");


// Create and Save a new order
exports.create = (req, res, next) => {
    orderServies().createOrder(req.body)
        .then(order => {
            order.errors || order.message ? next({ message: order.errors || order.message, statusCode: 400 }) : res.status(200).send(order);
        })
        .catch(e => next(e));
};

// Update a order identified by the id in the request
exports.update = (req, res, next) => {
    orderServies().updateOrder(req.params.id, req.body)
        .then(order => {
            order.errors || order.message ? next({ message: order.errors || order.message, statusCode: 400 }) : res.status(200).send(order);
        })
        .catch(e => next(e));
};

// Find a single order with a id
exports.findOne = (req, res, next) => {
    orderServies().getOrder(req.params.id)
        .then(order => order.length ? res.status(200).send(order) : res.status(202).send({ message: 'order not found' }))
        .catch(e => next(e));
};

// Fetch odrers by date
exports.orderList = (req, res, next) => {
    orderServies().ordersByDate(req.body.date)
        .then(orders => orders.length ? res.status(200).send(orders) : res.status(202).send({ message: 'orders not found', orders }))
        .catch(e => next(e));
};

// Delete a order with the specified id in the request
exports.delete = (req, res, next) => {
    orderServies().deleteOrder(req.params.id).then(result => res.status(200).send(result)).catch(e => next(e));
};