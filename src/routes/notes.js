const express = require('express');
const router = express.Router();

const Note = require('../models/Note');

router.get('/notes', async (req,res) => {
    const notes = await Note.find();
    res.render('notes/all-notes',{ notes});
});

router.get('/notes/add', (req,res) => {
    res.render('notes/new-note');
});

router.post('/notes/new-note', async (req,res) => {
    const {title, description} = req.body;

    const newNote = new Note({ title, description });
	await newNote.save();
	res.redirect('/notes');
});

router.delete('/notes/delete/:id', async (req,res) => {
    await Note.findByIdAndDelete(req.params.id);
	res.redirect('/notes');
});

router.get('/notes/edit/:id', async (req,res) => {
    const note = await Note.findById(req.params.id);
    res.render('notes/edit-note');
});

module.exports = router;
