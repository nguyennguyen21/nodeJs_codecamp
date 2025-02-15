const {people} = require('../data.json')
const Getpeople = (req,res)=>{
    return res.status(200).json({sucess:true ,data:people}

     )
}