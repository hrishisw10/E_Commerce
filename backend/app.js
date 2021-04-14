const express = require('express');
const app = express();
const port = 4000;

app.get('/',(req,res)=>{
    res.send("Hello from the magical world of E-Commerce!!!");    
})

app.listen(port, () => {
    console.log('Backend listening on port ' +port.toString());
})