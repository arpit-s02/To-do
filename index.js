const express = require('express'); 
const port = 8000;
const bodyParser = require('body-parser');
const db = require('./config/mongoose');

const app = express();

app.use('/', require('./routes/index')); // middleware to use router

app.set('view engine', 'ejs'); // specifying which view engine to use 
app.set('views', './views'); // specifying the folder where views are kept

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('assets'));

app.listen(port, (err) => {
    if(err){
        console.log(`Error in stating express: ${err}`);
        return;
    }
    console.log(`Express server is up and running on port ${port}`);
});