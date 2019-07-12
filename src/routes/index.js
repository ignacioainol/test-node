const { Router } = require('express');
const router = Router();

router.get('/',(req,res) => {
    const dataTest = {
        inicio: true
    }
    res.render('index', dataTest);
});

router.get('/about',(req,res) => {
    const dataTest = {
        about: true
    }
    res.render('about',dataTest);
})

module.exports = router;

