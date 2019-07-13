const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/notes-db-test',{
	useCreateIndex: true,
	useNewUrlParser: true,
	useFindAndModify: false
})
.then(db => console.log("DB is connect", mongoose.version))
.catch(err => console.error(err));