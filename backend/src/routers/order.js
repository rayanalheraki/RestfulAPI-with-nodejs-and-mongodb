const express = require('express');

const ds = require('../datascource/order');
const cartDs = require('../datascource/cart')

const routers = express.Router();

routers.post('/', async(req,res)=>{
    const id = await ds.createOrder(req.body);
    await cartDs.deleteCartItems();
    res.status(201).location(`/order/${id}`).send();
})

routers.get('/',function(req,res){
    res.status(200).json(ds.fetchOrderItems());

})

module.exports = routers;