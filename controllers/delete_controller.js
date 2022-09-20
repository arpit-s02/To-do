const Task = require('../models/task');

module.exports.delete = async (req, res) => {
    var items = req.query.item;
    if(Array.isArray(items)){
        // for(let i in items){
        //     let id = items[i];
        //     Task.findByIdAndDelete(id, (err) => {
        //         if(err){
        //             console.log('Error in deleting tasks');
        //             return;
        //         }
        //     });
        // }
        await Promise.all(
            items.map(async (item) => {
                await Task.findByIdAndDelete(item);
            })
        )
    }
    else{
        Task.findByIdAndDelete(items, (err) => {
            if(err){
                console.log('Error in deleting tasks');
                return;
            }
        });
    }
    return res.redirect('back');
}