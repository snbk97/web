const express = require('express');
const app = express();
app.get('/', (req, res)=>{
    res.send("Hello World !! Testing")
})

app.listen(4000);
