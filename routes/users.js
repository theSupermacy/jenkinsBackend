var express = require('express');
var router = express.Router();
var userController = require('./../controllers/users')

/* GET users listing. */
router.get('/', userController, messageSender);

module.exports = router;