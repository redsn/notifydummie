// require dependences
const mongoose = require('mongoose');

// init a shortcut variable
const Schema = mongoose.Schema;


// define schema
const noteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    bookmarked: Boolean
}, { timestamps: true } );

// export  model to be used within our controller

// const Note = mongoose.model('Note', noteSchema);

module.exports = mongoose.model('Note', noteSchema);

/*
    Model === Note
    Model is a special object with methods that allow us to perform CRUD on a specific collection in a database

    The model can convert a standard JavaScript object into a document in MongoDB

    This is why mongoose is referred to as an ODM - Object Document Mapper

    Model.create()
    Model.find()
    Model.findById()
    Model.findByIdAndDelete()
    Model.deleteMany()
    Model.findByIdAndUpdate()
    Model.findByIdAndModify()
    Model.findByIdAndRemove()
*/