const express = require('express');
const app = express();
const port = 3000;

// Setting up the public directory
// You can use a response to send a single HTML file (see landing-page.js)
// and a public directory to host other static assets such as CSS files, JS scripts, and images.
app.use('/public', express.static('landing-page'));

app.listen(port, () => console.log(`Listening on port ${port}...`));