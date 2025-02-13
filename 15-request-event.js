const http = require('http')


// using EventEmitter Api
const sever = http.createServer()

//emits request event
//subcribe to it / listen for it / respond to it
sever.on('requesr',(req,res)=>{
    res.end('Welcome')
})
sever.listen(5000)

