const express = require('express')
const app = express()
const router = require('./routers/index')

app.use('/',router)

app.listen(3500,()=>{
    console.log('server start port:3500');
})