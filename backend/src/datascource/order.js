const Connection = require(".");

var orders = [];

const ds ={
    createOrder: async(order)=>{
        const collection = (await Connection).db.collection("orders");
        const id = (await collection.insertOne(order)).insertedId;
        return id;
    },
    fetchOrderItems: ()=> {return orders}
};

module.exports = ds;