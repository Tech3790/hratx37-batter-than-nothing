const express = require('express');
const knex = require('../db/knex');
const router = express.Router();

router.post('/placeorder', (req, res) => {
    let name = JSON.stringify(req.body.customerName);
    let orderDetails = JSON.stringify(req.body.orderDetails);
    knex('orders').insert({ customer_name: name, order_item: orderDetails}).then(() => {
        res.send('ok')
    })
})

module.exports = router;