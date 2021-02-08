//connection with mongodb

const MongoDB = require('mongodb').MongoClient;

// insert your uri
const uri = `mongodb+srv://<userName>:<password>@cluster0.ianaq.mongodb.net/zshop?retryWrites=true&w=majority`;

const Connection = (async ()=>{
    const client = await MongoDB.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true});
    //insert your collection name
    const db = client.db('collectionName');
    
    return {client , db};
})();


module.exports = Connection;

