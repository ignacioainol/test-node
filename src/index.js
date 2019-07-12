const express = require('express');
const path = require('path');
const flash = require('connect-flash');
const exphbs = require('express-handlebars');


//initialization
const app = express();


//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));

app.engine('.hbs', exphbs({
    defaultLayout:'main',
	layoutDir:path.join(app.get('views'),'layouts'),
	partialsDir:path.join(app.get('views'),'partials'),
	extname: '.hbs'
}));

app.set('view engine','.hbs');


//routes
app.use(require('./routes/index'));
app.use(require('./routes/notes'));

app.listen(app.get('port'), (req,res) => {
    console.log("server on port", app.get('port'));
});