const Task = require("../models/task")

module.exports.add_task = (req, res) => {
    Task.create({
       description: req.body.task,
       category: req.body.category,
       date: req.body.date
    }, (err, newTask) => {
        if(err){
            console.log('error in creating task');
            return;
        }
        console.log('*******', newTask);
        return res.redirect('back');
    });
}