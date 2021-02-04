const MongoDB = require('mongodb').MongoClient;

const uri = `mongodb+srv://zshop:aWH6VweKbwDrJalF@cluster0.ianaq.mongodb.net/zshop?retryWrites=true&w=majority`;

const Connection = (async ()=>{
    const client = await MongoDB.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true});
    const collection = client.db('zshop').collection("products");
    
    return {client , collection};
})();


module.exports = Connection;

