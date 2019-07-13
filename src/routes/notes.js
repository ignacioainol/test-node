const express = require('express');
const router = express.Router();

const Note = require('../models/Note');

router.get('/notes', async (req,res) => {
    const notes = await Note.find();
    res.render('notes/all-notes');
});

router.get('/notes/add', (req,res) => {
    res.render('notes/new-note');
});

router.post('/notes/new-note', (req,res) => {

    const { title, description } = req.body;
    const errors = [];

    if(!title){
		errors.push({text: 'Please write a Title'});
	}

	if(!description){
		errors.push({text: 'Please write a Description'});
	}

    const newNote = new Note({ title, description });

    newNote.save();
    res.redirect('/notes');
});

module.exports = router;
