const mongoose = require ("mongoose");
const { v4: uuidv4 } = require  ("uuid");

const toDoListSchema = new mongoose.Schema({
    id:{
        type: String,
        format: uuidv4,
        default: uuidv4
    },
    name: {
        type: String, 
        required: true
    },
    description : String,
    completed: {
        type: Boolean,
        default: false,
        required: true
    }, 
    dateCreated: {
        type: Date, 
        default: Date.now(), 
        required: true
    },
    dateCompleted: {
        type: Date
    },
    status: {
        type: String, 
        default: 'incomplete',
        required: true,
        enum: ['incomplete', 'complete', 'deferred']
    }
});


const Task = mongoose.model("tasks", toDoListSchema);



module.exports = Task