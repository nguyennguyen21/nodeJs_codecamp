const { readFile, writeFile} = require('fs')

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first},${second}`,
    {flag: 'a'}
)

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result

        writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`, (err,result) => {
            if (err) {
              console.log(err);
              return;
            }
            console.log(result);
            }
        )
    })
})
const {readFile,writeFile} = require('fs')
const until = require('util')
const readFilePromise = until.promisify(readFile)
const writeFilePromise = until.promisify(writeFile)

const start = async () => {
    try{
        const first = await  readFilePromise('./content/first.txt','utf8')
        const second = await  readFilePromise('./content/second.txt','utf8')
        await writeFilePromise('./content/result-mind-grenade.txt',`THIS IS AWESOME : ${first} ${second}`)
        console.log(first, s)
    }
    catch(error){
        console.log(error)
    }
}
start()
// const getText = (path) =>{
// return new Promise((resolve,reject) =>{
//     readFile(path,'utf8',(err,data) =>{
//         if(err){
//             reject(err)
//         } else{
//             resolve(data)
//          }
//         })
//         })
//     }
// getText('../content/first.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))