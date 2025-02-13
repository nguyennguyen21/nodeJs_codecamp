var http = require('http')
var fs = require('fs');
http.createServer(function (req, res) {
 const fileStream = fs.createReadStream('content/big.txt','utf8')
    fileStream.on('open',()=>{
        fileStream.pipe(res)
    })
    fileStream.on('error',(err)=>{
        res.end(err)
    })
    // const text = fs.readFileSync('content/big.txt','utf8')
    // res.end(text)    
}).listen(3000)

const express = require('express')

const path = require('path')

const app = express()
//setup static and middleware
app.use(express.static(path.resolve('./public')))


// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
// })

app.listen(5000,()=>{
    console.log('Server is listening on port 5000...');
})