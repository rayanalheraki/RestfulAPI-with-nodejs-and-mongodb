const express = require('express');

const ds = require('../datascource/cart')
const routers = express.Router();

routers.post('/',function(req,res){
    const cartItem = req.body;
    console.log('--------------\n',cartItem);
    const id = ds.addToCart(cartItem);
    res.status(201).location(`/cart/${id }`).send();
})
routers.get('/',function(req,res){
    res.status(200).json(ds.fetchCartItems());
})
routers.get('/:id',function(req,res){
    const cartItem =ds.fetchCartItemById(req.params.id) ;
    if(cartItem != undefined){
        res.status(200).json(cartItem);
    }else{
        res.status(404).send();
    }
})
routers.delete('/:id', function(req,res){
    const itemId= req.params.id;
    ds.deleteCartItem(itemId);
    res.status(200).send();
})

routers.delete('/', function(req,res){
    ds.deleteCartItems();
    res.status(200).send();
})
routers.patch('/:id', function(req,res){
    const item = ds.updateCartItem(req.params.id , req.body)
    if(item != undefined){
        res.json(item);
    }else{
        res.status(404).send();
    }
})
module.exports = routers;