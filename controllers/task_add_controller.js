const Task = require("../models/task")

module.exports.add_task = (req, res) => {
    // var newDate = req.body.date;

    Task.create({
       description: req.body.task,
       category: req.body.category,
       date: req.body.date,
       checked: false
    }, (err, newTask) => {
        if(err){
            console.log('error in creating task', err);
            return;
        }
        console.log('*******', newTask);
        return res.redirect('back');
    });
}