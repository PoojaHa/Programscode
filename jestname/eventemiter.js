const events =require('events');
const eventEmitter = new events.EventEmitter()

const connectionhandler =function(){
    console.log("connection sucessful")
}
//bind the connection event with handler
eventEmitter.on('data reciciever',connectionhandler);

eventEmitter.on('connection',()=>{
    console.log('parallel execution')
})
//fire the connection event
eventEmitter.emit('data reciciever')
eventEmitter.emit('connection')