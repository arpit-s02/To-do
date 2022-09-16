const express = require('express');
const router = express.Router(); // to separate route and controller
const homeController = require('../controllers/home_controller');

router.get('/', homeController.home);

module.exports = router;