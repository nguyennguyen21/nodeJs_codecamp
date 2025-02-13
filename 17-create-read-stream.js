const {createReadStream} = require('fs');

const stream = createReadStream('./content/big.txt',{highWaterMark:100000,
    encoding:'utf8'})

//default 64kb
//last buffer - remainder
//highWaterMark - control size

stream.on('data',(result)=>{
    console.log(result)
})