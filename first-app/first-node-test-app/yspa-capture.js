const EventEmitter = require('events');

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
