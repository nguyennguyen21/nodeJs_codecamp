const express  = require('express')

const app = express()
const {product} = require('./data')
const { Stats } = require('graceful-fs')
app.get('/',(req,res)=>{
    res.send('<H1>Home page</H1><a href="/api/product">product</a><a></a>')
})
app.get('/api/product/:productID',(req,res)=>{
  
    // const newproduct = product.map((inforproduct)=>{
    //     const {id,name,image} = inforproduct
    //     return {id,name,image}
    // })
    
    //   console.log(req)
    //   console.log(req.params)

    const {productID} = req.params
    const singleproduct = product.find((products)=>products.id === Number(productID))
    if (!singleproduct){
        return res.status(404).send('does not exist')
    }
        return res.json(singleproduct)
}) 
app.get('/api/product/:productID/reviews/:reviewID', (req,res)=>{
    console.log(req.params)
    res.send('Hello word')
})

app.get('/api/v1/query', (req,res)=>{
    
    console.log(req.query)
    const {search,limit} = req.query
    let sortedpruct = [...product];
    if(search){
    sortedpruct = sortedpruct.filter((infor)=>{
        return infor.name.startsWith(search)
    })
    
    }
    if(limit){
        sortedpruct = sortedpruct.slice(0,Number(limit))
    }
    if (sortedpruct.length < 1){
       return res.status(200).send({sucess: true, data:[]})
    }

    res.status(200).json(sortedpruct)

})
app.listen(5000,()=>{
    console.log('sever is listening ')
})
