const EventEmitter = require('events');

const Logger = require('./yspa-capture');
const logger = new Logger();

// Register a listener
logger.on('messageLogged', (e) => {
    console.log('Listener called', e);
}); 

logger.log('message');

// START HTTP trials
const http = require('http');

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


const port = 3000;
server.listen(port);
console.log(`Listening on port ${port}...`);

