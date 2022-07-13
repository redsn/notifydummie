// import dependencies

// import models
const Note = require('../models/note');

// initialize router object
const express = require('express');
const router = express.Router();
// const router = require('express').Router();

/*
constructor - it's a function that, once invoked, returns an object

*/

// define routes

// INDUCES 

//Index
router.get('/notes', (req,res) => {
    Note.find({}, (err, notes) => {
        res.send(notes);
    })
});

//New
router.get('/notes/new', (req,res) =>{
    res.render('notes/new.ejs');
})
//Delete
//Update
//Create
router.post('/notes', (req,res) => {
    Note.create(req.body, (err, newNote) => {
        res.redirect('/notes');
    })
})
//Edit
//Show

// export the router object
module.exports = router;