const os = require('os')

const user = os.userInfo()
//info about current user
console.log(user)

//method returns the system uptime in seconds

console.log(`the system uptime is ${os.uptime()} seconds`)

const currentos = {
    nmae: os.type(),
    relase: os.release(), 
    totalmem:os.totalmem(),
    freemem: os.freemem(),
}
console.log(currentos) 
