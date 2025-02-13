const express = require('express')
const app = express()
const logger = require('./logger')
const  authorize = require('./authorize')
const morgan = require('morgan')
app.use(morgan('tiny'))
//  req => middleware => res
 
// 1 use vs route
// 2options - our own /express / third party
// app.use(express.static('/public'))
// app.use([logger,authorize])
app.get('/',(req,res)=>{
    res.send('Home')
})
app.get('/about',(req,res)=>{
    res.send('about')
   
})

app.get('/api/product',(req,res)=>{
    res.send('product')
   
})


app.listen(5000,() =>{
    console.log('cổng 5000 đang chạy')
})