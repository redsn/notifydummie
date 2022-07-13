// Dependencies
require('dotenv').config();
const express = require('express');
const notesRouter = require('./controllers/notes');
const mongoose = require('mongoose');
const morgan = require('morgan');

// Initialize express app
const app = express();

// configure application settings
const MongoUrl = process.env.MONGO_URL

mongoose.connect(MongoUrl);

mongoose.connection.on('connected', () => {
    console.log('connected to mongoDB')
});

// mount middleware
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));

// mount routes
app.get('/', (req,res) => {
    res.send('<h1>Hello World</h1>');
});

app.use('/', notesRouter);
//app.use('/notes', notesRouter) =>>>> in notes.ejs controlloer change all "/notes" to "/";

// tell the app to listen to requests from the client
const PORT = 3015;
app.listen(PORT, () =>{
    console.log(`Express is listening for reqs on ${PORT}`)
})