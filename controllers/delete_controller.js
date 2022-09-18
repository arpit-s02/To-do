const Task = require('../models/task');

module.exports.delete = (req, res) => {
    Task.deleteMany({checked: false}, (err) => {
        if(err){
            console.log('Error in deleting tasks');
            return;
        }

        return res.redirect('back');
    });
}