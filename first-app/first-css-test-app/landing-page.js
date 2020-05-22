// ARROW FUNCTION
// emitter.on('messageLogged', (e) => {
//     console.log('Listener called', e);
// });


// START HTTP trials

// const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.write('Hello World');
//         res.end();
//     }

//     if (req.url === '/api/courses') {
//         res.write(JSON.stringify([1,2,3]));
//         res.end();
//     }
// });

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile('./landing-page/home.html', { root: __dirname });
});

app.get('/about', (req, res) => {
    res.sendFile('./landing-page/about.html', { root: __dirname });
});

app.get('/contact', (req, res) => {
    res.sendFile('./landing-page/contact.html', { root: __dirname });
});



app.listen(port, () => console.log(`Listening on port ${port}...`));
