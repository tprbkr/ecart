const order = require("../db/models/order_model");

// orders crud operations
module.exports = () => ({
    getOrder: orderId => {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await order.find({ order_id: orderId }));
            } catch (e) {
                reject(e)
            }
        });
    },
    ordersByDate: order_date => {
        return new Promise(async (resolve, reject) => {
            try {
                new Date(order_date).toISOString();
                resolve(await order.find({ order_date }));
            } catch (e) {
                reject(e);
            }
        });

    },
    createOrder: orderObj => {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await order.create(orderObj));
            } catch (e) {
                reject(e);
            }
        });
    },
    updateOrder: (order_id, updateInfo) => {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await order.updateOne({ order_id }, { $set: updateInfo }));
            } catch (e) {
                reject(e);
            }
        });
    },
    deleteOrder: orderId => {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await order.deleteOne({ order_id: orderId }));
            } catch (e) {
                reject(e);
            }
        });
    }
});
