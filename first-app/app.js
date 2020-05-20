
// function sayHello(name) {
//     console.log('Hello ' + name);
// }
// sayHello('Katy');

// console.log(module);

// const logger = require('./logger');
// console.log(logger);
// logger.log('test message');

// const log = require('./logger');
// log('message')

// const path = require('path');
// var pathObj = path.parse(__filename);
// console.log(pathObj);

// TEMPLATE STRING! (ES6 / ES2015 : ECMAScript 6)

// const os = require('os');

// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);

// const fs = require('fs');
// const files = fs.readdirSync('./');
// console.log(files);
// fs.readdir('$', function(err, files){
//     if (err) console.log('Error', err);
//     else console.log('Result', files);
// });

const EventEmitter = require('events');
// const emitter = new EventEmitter();

// Register a listener
// emitter.on('messageLogged', function(e) {
//     console.log('Listener called', e);
// });
// ARROW FUNCTION
// emitter.on('messageLogged', (e) => {
//     console.log('Listener called', e);
// });

// //Raise an event
// emitter.emit('messageLogged', { id: 1, url: 'http://' });

// // Raise: logging (data: message)
// emitter.on('logging', (e) => {
//     console.log('Data being passed: ', e.data)
// });
// //Raise logging even w/data
// emitter.emit('logging', { id: 1, data: 'here\'s the data', url: 'http://' });

// // Register a listener
// emitter.on('messageLogged', (e) => {
//     console.log('Listener called', e);
// }); 

// const log = require('./logger');
// log('message');

const Logger = require('./logger');
const logger = new Logger();

// Register a listener
logger.on('messageLogged', (e) => {
    console.log('Listener called', e);
}); 

logger.log('message');

// START HTTP trials

const http = require('http');

// const server = http.createServer();
// server.on('connection', (socket)=> {
//     console.log('New connection...');
// });
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});

server.listen(3000);

console.log('Listening on port 3000...');
