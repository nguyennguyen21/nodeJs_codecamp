const EventEmiter  = require('events')

const customEmitter = new EventEmiter()
customEmitter.on('response',(name,id)=>{
    console.log(`data recieved ${name} with id: ${id}`)
})
customEmitter.on('response',()=>{
    console.log(`data recieved `)
}) 
customEmitter.emit('response')
customEmitter.emit('response','john',34) 