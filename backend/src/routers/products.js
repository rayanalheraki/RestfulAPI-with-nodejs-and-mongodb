const express = require('express');
const ds = require('../datascource/datascource')
const routers = express.Router();

routers.get('/', function(req,res){
    const products  =  ds.fetchProducts();
    res.status(200).json(products);
});

routers.get('/:id',function(req,res){
    const productId = req.params.id;
    const product = ds.fetchProductsById(productId);

    if(product != undefined){
        res.status(200).json(product);
    }   
    else{
        res.status(404).send();
    }
})
// routers.get('/orders', function(req,res){
//     res.send("orders");
// });
module.exports = routers;