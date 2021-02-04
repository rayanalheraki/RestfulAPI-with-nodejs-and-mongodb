const {v4: uuidv4} = require('uuid');

var orders = [];

const ds ={
    createOrder: (order)=>{
        order.id = uuidv4();
        orders.push(order);
        return order.id;
    },
    fetchOrderItems: ()=> {return orders}
};

module.exports = ds;