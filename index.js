const express = require("express")
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;
const categories = require("./data/catagories.json");

app.use(cors())

app.get("/", (req, res)=>{
    res.send("Dragon is coming man...")
})

app.get("/categories", (req, res)=> {
    res.send(categories)
})

app.listen(port, ()=>{
    console.log(`Dragon api is coming ${port}`)
})