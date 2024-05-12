const express = require('express');
const app =express();

app.use('*',(req,res)=>{
    res.send("welcome to server")
})
app.listen(3001);