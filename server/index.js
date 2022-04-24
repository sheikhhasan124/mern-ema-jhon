const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors');
require('dotenv').config()
const app = express();

const PORT = process.env.PORT || 5000;

// middlewere 
app.use(cors())
app.use(express.json())




const uri = `mongodb+srv://emaJhonDb1:XbmbfkAExR4njvjB@cluster0.yyij1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



async function run(){
    try{
       await client.connect();

       const productCollections = client.db("emaJhon").collection("product")
       
       
       // get products all 
       app.get('/product', async(req,res)=>{
        //   console.log('query', req.query) 
          const page = parseInt(req.query.page);
          const size = parseInt(req.query.size);
          
           const query = {};
           const cursor = productCollections.find(query);
           let products;
           if(page || size){
            products = await cursor.skip(page*size).limit(size).toArray()
           }else{
               products = await cursor.toArray()
           }
           res.send(products)
       })
       // get products for pagination button number
       // we have to count product in db
       app.get('/productCount', async(req,res)=>{
        //    const query = {};
        //    const cursor = productCollections.find(query);
           const count = await productCollections.estimatedDocumentCount();
           res.send({count})
       })
       // use post to get products by id/keys
       app.post('/productByKeys', async(req,res)=>{
           const keys = req.body;
            const ids = keys.map(id=>ObjectId(id))
           const query = {_id: {$in: ids}}
           const cursor = productCollections.find(query);
           const products = await cursor.toArray()
           console.log(keys)
           res.send(products)
       })

    }finally{
        // client.close();
    }
}
run().catch(console.dir);


app.get('/',(req,res)=>{
    res.send('home')
})

app.listen(PORT, ()=>{
    console.log(`server running at ${PORT}`)
})