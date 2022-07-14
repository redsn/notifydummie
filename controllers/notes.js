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
router.get('/notes1', (req,res) => {
    Note.find({}, (err, notes) => {
        res.send(notes);
    })
});

router.get('/notes', (req,res) => {
    Note.find({}, (err, notes)=>{
        res.render('notes/index.ejs', {
            placeholder: notes,
        })
    })
})

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
router.get('/notes/:idx/edit', (req,res) => {
    Note.find({}, (err, notes) => {
        res.render('notes/edit.ejs', {
            id: req.params.idx,
            title: notes[req.params.idx].title,
            body: notes[req.params.idx].body,
            create: notes[req.params.idx].createdAt
        })
    })
})
//Show
router.get('/notes/:idx', (req,res) => {
    Note.find({}, (err, notes) =>{
        res.render('notes/show.ejs', {
            id: req.params.idx,
            title: notes[req.params.idx].title,
            body: notes[req.params.idx].body,
            create: notes[req.params.idx].createdAt
        })
    })
})

// export the router object
module.exports = router;