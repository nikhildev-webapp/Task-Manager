const mongoose = require('mongoose');
const { title } = require('process');

const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    completed: { type: Boolean, default: false }
});

module.exports = mongoose.model("Task", TaskSchema);
