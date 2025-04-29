const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.get('/', taskController.getTasks);
router.post('/add', taskController.addTask);
router.get('/delete/:id', taskController.deletTask);

module.exports = router;
