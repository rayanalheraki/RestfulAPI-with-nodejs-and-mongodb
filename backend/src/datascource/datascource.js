
const { ObjectID } = require('mongodb');
const Connection =require('./index');


const ds = {
    fetchProducts:async ()=>{
        const collection =await (await Connection).db.collection("products");
        const data = await collection
            .find({},
                {
                    projection:{shops:0,}
                }).toArray();
    },
    fetchProductsById:async (productId)=>{
        const data =await (await Connection).db.collection("products");
        return data.findOne({ _id : ObjectID(productId)});
    }
};

module.exports = ds;