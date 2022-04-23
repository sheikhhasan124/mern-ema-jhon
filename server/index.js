const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 5000;

// middlewere 
app.use(cors())
app.use(express.json())


const uri = `mongodb+srv://DB_USER:DB_PASS@cluster0.yyij1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log('db connections')
  client.close();
});


app.get('/',(req,res)=>{
    res.send('home')
})

app.listen(PORT, ()=>{
    console.log(`server running at ${PORT}`)
})