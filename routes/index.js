const express = require('express');

//create a route handler
const router = express.Router();
console.log('router loaded');

const homeController = require('../controllers/home_controller');

router.get('/',homeController.home);

module.exports = router;