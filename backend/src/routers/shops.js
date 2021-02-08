const express = require('express');

const ds = require('../datascource/shops');

const routers = express.Router();


routers.get('/',async(req,res)=>{
    const shops = await ds.fetchShops(parseInt(req.query.limit));
    res.status(200).json(shops);
});

// routers.post('/',function(req,res){
//     const cartItem = req.body;
//     console.log('--------------\n',cartItem);
//     const id = ds.addToCart(cartItem);
//     res.status(201).location(`/cart/${id }`).send();
// })

module.exports = routers ; 