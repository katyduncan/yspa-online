const EventEmitter = require('events');
// const emitter = new EventEmitter();

var url = 'http://mylogger.io/log';

// JS CLASS 
class Logger extends EventEmitter {
    log(message) {
        // Send an HTTP request
        console.log(message);
        
        //Raise an event where 'this' is now the parent Emitter class
        this.emit('messageLogged', { id: 1, url: 'http://' });
        }
}

module.exports = Logger;

// function log(message) {
// // Send an HTTP request
// console.log(message);


// //Raise an event
// emitter.emit('messageLogged', { id: 1, url: 'http://' });
// }

// module.exports.log = log;
// module.exports.endPoint = url;

// module.exports = log;

