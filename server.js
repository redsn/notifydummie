// Dependencies
require('dotenv').config();
const express = require('express');
const notesRouter = require('./controllers/notes');
const mongoose = require('mongoose');

// Initialize express app
const app = express();

// configure application settings
const MongoUrl = process.env.MONGO_URL

mongoose.connect(MongoUrl);

mongoose.connection.on('connected', () => {
    console.log('connected to mongoDB')
});

// mount middleware

// mount routes
app.get('/', (req,res) => {
    res.send('<h1>Hello World</h1>');
});

app.use('/', notesRouter);


// tell the app to listen to requests from the client
const PORT = 3015;
app.listen(PORT, () =>{
    console.log(`Express is listening for reqs on ${PORT}`)
})