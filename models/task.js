const mongoose = require('mongoose');

// create Schema
const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

// define name of the collection to be used in database and its schema
const Task = mongoose.model('Task', taskSchema);

// export the collection and its schema
module.exports = Task;