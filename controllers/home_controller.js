const Task = require('../models/task');
const db = require('../config/mongoose');


// creating controller for home and exporting it
module.exports.home = (req, res) => {
    Task.find({}, (err, all_tasks) => {
        if(err){
            console.log('Error in fetching tasks!');
            return;
        }

        return res.render('home', {
           title: 'To-Do',
           tasks: all_tasks
        });
    });
}