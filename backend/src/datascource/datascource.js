
const { ObjectID } = require('mongodb');
const Connection =require('./index');


const ds = {
    fetchProducts:async ()=>{
        const collection =(await Connection).db.collection("products");
        const data = await collection
            .find({},
                {
                    projection:{shops:0,}
                }).toArray();
        return data;
    },
    fetchProductsById:async (productId)=>{
        const collection = (await Connection).db.collection("products");
        const data =await collection.findOne({ _id : ObjectID(productId)});

        return data;
    }
};

module.exports = ds;