const express = require('express')

const people = require('./routes/people')
const auth = require('./routes/auth')
const app = express()
app.use(express.json)
// static assets
app.use(express.static('./method-public'))
//parse from data
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/api/people',people)
app.use('/api/aut',auth)



app.listen(5000,()=>{
    console.log('cổng 5000 đã mở')
})