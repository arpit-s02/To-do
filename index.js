
const express = require('express'); 
const app = express();
const port = 8000;

app.use('/', require('./routes/index')); // middleware to use router

app.listen(port, (err) => {
    if(err){
        console.log(`Error in stating express: ${err}`);
        return;
    }
    console.log(`Express server is up and running on port ${port}`);
});