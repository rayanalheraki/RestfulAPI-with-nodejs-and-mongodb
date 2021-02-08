const express = require('express');

const ds = require('../datascource/cart')
const routers = express.Router();

routers.post('/',async(req,res)=>{
    const cartItem = req.body;
    
    const id = await ds.addToCart(cartItem);
    res.status(201).location(`/cart/${id }`).send();
})
routers.get('/', async(req,res)=>{
    const cartItems = await ds.fetchCartItems();
    res.status(200).json(cartItems);
})
routers.get('/:id',async(req,res)=>{
    const cartItem =await ds.fetchCartItemById(req.params.id) ;
    if(cartItem != undefined){
        res.status(200).json(cartItem);
    }else{
        res.status(404).send();
    }
})
routers.delete('/:id', async(req,res)=>{
    const itemId= req.params.id;
    await ds.deleteCartItem(itemId);
    res.status(200).send();
})

routers.delete('/', async(req,res)=>{
    if(req.params.arg == "all")
    {
        await ds.deleteCartItems();
        res.status(200).send();
    }
})
routers.patch('/:id', async(req,res)=>{
    const item =await ds.updateCartItem(req.params.id , req.body)
    if(item != undefined){
        res.json(item);
    }else{
        res.status(404).send();
    }
})
module.exports = routers;