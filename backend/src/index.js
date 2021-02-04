const express = require('express');

const Connection = require('./datascource')
// const arr1 = [10,50,60,15,90];

// const arr2 = arr1.filter(s => s==15 || s==10);

// console.log(arr2);

const productsRouters = require('./routers/products')
const cartRoutres = require('./routers/cart');
const orderRoutres = require('./routers/order');
const shopsRoutres = require('./routers/shops');

const apiServer = express();

apiServer.use(express.json());
apiServer.use("/products",productsRouters);
apiServer.use("/cart",cartRoutres);
apiServer.use("/order", orderRoutres);
apiServer.use("/shops", shopsRoutres);

apiServer.get('/',function(req,res){
     res.send('hello from Express')
});
Connection.then((client)=>{
     console.log('FINISHED');
});
apiServer.listen(3000 ,"0.0.0.0" ,()=>console.log("apiServer start"));