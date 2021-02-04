const express = require('express');

const ds = require('../datascource/order');
const cartDs = require('../datascource/cart')

const routers = express.Router();

routers.post('/', function(req,res){
    const id = ds.createOrder(req.body);
    cartDs.deleteCartItems();
    res.status(201).location(`/order/${id}`);
})

routers.get('/',function(req,res){
    res.status(200).json(ds.fetchOrderItems());

})

module.exports = routers;