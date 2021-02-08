const { ObjectID } = require('mongodb');
const {v4: uuidv4} = require('uuid');
const Connection = require('.');
var cart = [] ; 

const cartDS= {
    addToCart: async (cartItem)=>{
        const collection = (await Connection).db.collection("cart");
        const id = await (await collection.insertOne(cartItem)).insertedId;
        return id;
    },
    fetchCartItems: async ()=>{
        const collection = (await Connection).db.collection("cart").find({}).toArray();
        return collection;
    },
    fetchCartItemById:async(id)=>{
        const collection = (await Connection).db.collection("cart");
        const item = await collection.findOne({_id : ObjectID(id)});
        return item;
    },
    deleteCartItem: async(id) =>{
        const collection = (await Connection).db.collection("cart");
        await collection.deleteOne({_id : ObjectID(id)},{});
    } ,
    deleteCartItems: async()=>{
        const collection = (await Connection).db.collection("cart");
        await collection.deleteMany({});
    },
    updateCartItem: async(id,patchCartItem )=>{
        const collection = (await Connection).db.collection("cart");
        const updatedItem = (await collection
                .findOneAndUpdate(
                    {_id : ObjectID(id)},
                    {$set: patchCartItem},
                    {returnOriginal: false})).value;
        console.log(updatedItem);
        return updatedItem;
    },
};

module.exports = cartDS;