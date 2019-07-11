const express = require('express');
const app = express();
//const path = require('path');

//settings
app.set('port', process.env.PORT || 3000);

//routes
app.get('/',(req,res) => {
    res.send("suppa gut");
});

app.listen(app.get('port'), (req,res) => {
    console.log("server on port", app.get('port'));
});