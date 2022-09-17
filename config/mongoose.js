// require library
const mongoose = require('mongoose');

// connect to database
mongoose.connect('mongodb://localhost/to_do_db');

// for accessing database 
const db = mongoose.connection;

// if error in connecting
db.on('error', console.error.bind(console, 'error connecting to database'));

// when connection is open to interact with database
db.once('open', () => {
    console.log('successfully connected to database');
});