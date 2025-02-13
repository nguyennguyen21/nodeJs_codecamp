const http = require('http')

const sever = http.createServer((req,res)=>{
    console.log('user hit the server')
    res.end('Home Page')
})

sever.listen(5000)