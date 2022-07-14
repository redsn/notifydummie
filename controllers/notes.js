// import dependencies
const methodOverride = require('method-override');

// import models
const Note = require('../models/note');

// initialize router object
const express = require('express');
const router = express.Router();
router.use(methodOverride("_method"));

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
router.delete('/notes/:idx', (req,res) => {
    Note.find({}, (err, notes) => {
        uniqueID = notes[req.params.idx]._id;
        Note.findByIdAndDelete(uniqueID, (err,good) => {
            if(err){
                console.log('error at delete', uniqueID);
            } else {
                console.log('we good');
            }
        })
    });
    res.redirect('/notes')
})

//Update
router.put('/notes/:idx', (req,res) =>{
    Note.find({}, (err, notes) => {
        // console.log(req.body.title)
        // notes.splice(req.params.idx, 1, req.body);
        uniqueID = notes[req.params.idx]._id;
        Note.findByIdAndUpdate(uniqueID, {title: req.body.title, body: req.body.body},
            (err, docs) => {
                if (err){
                    console.log('Error at updating Note', uniqueID);
                }
                else{
                    console.log('did not error')
                }
            }
            )
        res.redirect("/notes");
    })
})


// User.findByIdAndUpdate(user_id, { name: 'Gourav' },
//                             function (err, docs) {
//     if (err){
//         console.log(err)
//     }
//     else{
//         console.log("Updated User : ", docs);
//     }
// });

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
            testing: notes[req.params.idx]._id,
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