const Task = require('../models/Task');

//Display all Task
exports.getTasks = async (req,res) => {
    try {
        const tasks = await Task.find();
        res.sender('index',{tasks})
    } catch (error) {
        res.status(500).send("error retrieving tasks")
    }
}

//Add new Task
exports.addTask = async (req, res) => {
    try {
        const { title } = req.body;
        await Task.create({ title });
        res.redirect('/')
    } catch (error) {
        res.status(500).send("Error adding task")
    }
}

//Delete a task
exports.deletTask = async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.redirect('/');
    } catch (error) {
        res.status(500).send('Error deleting task')
    }
}