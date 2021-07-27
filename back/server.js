const express = require('express')
const app = express()
const router = require('./routers/index')
const bodyparser = require('body-parser')
const session = require('express-session')


app.use(bodyparser.urlencoded({extended:false}))


app.use('/',router)

app.listen(3500,()=>{
    console.log('server start port:3500');
})