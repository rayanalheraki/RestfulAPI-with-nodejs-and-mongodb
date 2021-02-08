//routing with expressjs package
const express = require('express');

const Connection = require('./datascource')
const productsRouters = require('./routers/products')
const cartRoutres = require('./routers/cart');
const orderRoutres = require('./routers/order');
const shopsRoutres = require('./routers/shops');

const apiServer = express();
//other routes
apiServer.use(express.json());
apiServer.use("/products",productsRouters);
apiServer.use("/cart",cartRoutres);
apiServer.use("/order", orderRoutres);
apiServer.use("/shops", shopsRoutres);

// mine route
apiServer.get('/',function(req,res){
     res.send('hello from Express')
});
//db test
Connection.then((client)=>{
     console.log('FINISHED');
});
// run server
apiServer.listen(3000 ,"0.0.0.0" ,()=>console.log("apiServer start"));