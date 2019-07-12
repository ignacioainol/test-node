const { Router } = require('express');
const router = Router();
const Note = require('../models/Note');

router.get('/notes', async (req,res) => {
    const notes = await Note.find();
    res.render('notes/all-notes');
});

router.get('/notes/add', (req,res) => {
    
});

module.exports = router;
