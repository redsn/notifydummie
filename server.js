// Dependencies
const express = require('express');

// Initialize express app
const app = express();

// configure application settings

// mount middleware

// mount routes
app.get('/', (req,res) => {
    res.send('<h1>Hello World</h1>');
})

// tell the app to listen to requests from the client
const PORT = 3015;
app.listen(PORT, () =>{
    console.log(`Express is listening for reqs on ${PORT}`)
})