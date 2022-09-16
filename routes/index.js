const express = require('express');
const router = express.Router(); // module to use routes & controller separately
// requiring home controller
const homeController = require('../controllers/home_controller');

router.get('/', homeController.home); // for '/' request

module.exports = router;