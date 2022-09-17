const express = require('express');
const router = express.Router(); // module to use routes & controller separately
// requiring home controller
const homeController = require('../controllers/home_controller');
const taskController = require('../controllers/task_add_controller');
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: false}));


router.get('/', homeController.home); // for '/' request

router.post('/add-task', taskController.add_task);

module.exports = router;