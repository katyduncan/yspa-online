const express = require('express');
const app = express();
const port = 3000;

// Setting up the public directory
app.use('/public', express.static('landing-page'));

app.listen(port, () => console.log(`Listening on port ${port}...`));