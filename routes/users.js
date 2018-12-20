var express = require('express');
var router = express.Router();
var {
  getAllUser
} = require('./../controllers/users')
var messageSender = require('./../utils/messageResponder')

/* GET users listing. */
router.get('/', getAllUser, messageSender);

module.exports = router;
