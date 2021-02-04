const express = require('express');

const ds = require('../datascource/shops');

const routers = express.Router();


routers.get('/',function(req,res){
    res.status(200).json(ds.fetchShops(req.query.limit));
});

// routers.post('/',function(req,res){
//     const cartItem = req.body;
//     console.log('--------------\n',cartItem);
//     const id = ds.addToCart(cartItem);
//     res.status(201).location(`/cart/${id }`).send();
// })

module.exports = routers ; 