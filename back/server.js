const express = require('express')
const app = express()
const router = require('./routers')



app.get('/',(req,res)=>{
    res.send('hellow')
})

app.listen(3500,()=>{
    console.log('server start port:3500');
})