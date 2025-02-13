const http = require('http')
const {readFileSync} = require('fs')

// get all files
const Homepage =readFileSync('./navbar-app/index.html')
const HomeStyle = readFileSync('./navbar-app/style.css')
const sever = http.createServer((req,res)=>{
    if(req.url === '/'){
    // console.log(req.method)
    console.log(req.url)
    res.writeHead(200,{'content-type':'text/html'})
    res.write(Homepage)
    res.end()
    // console.log('user hit the server')
    // res.end('Home Page')
    }
    else if (req.url ==='/style.css'){
        console.log(req.url)
        res.writeHead(200,{'content-type':'text/css'})
        res.write(HomeStyle)    
        res.end()
    }
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write('<h1>Page not found</h1>')
        res.end()
    }

})

sever.listen(5000)

const Express = require('express')

const app = Express()

//app.get('/',(req,res)=>{}
app.get('/',(req,res)=>{
 res.send('Home Page')
})
app.get('/about',(req,res)=>{
    res.send('About Page')

})
app.all('*',(req,res)=>{
    res.status(404).send('<h1>Resource not found</h1>')
})
// app.listen(5000)
app.listen(5000,()=>{
    console.log('Server is listening on port 5000...')
})