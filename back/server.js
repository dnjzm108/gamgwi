const express = require('express')
const app = express()
const router = require('./routers/index')
const {sequelize} = require('./models')

sequelize.sync({force:true})
.then(()=>{
    console.log('db success')
})
.catch((err)=>{
    console.log('db fail',err)
})









app.use('/',router)

app.listen(3500,()=>{
    console.log('server start port:3500');
})