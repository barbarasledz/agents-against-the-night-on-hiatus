const express = require('express');
const router = express.Router();
const controller = require('./register-controller');



router.route('/register')
    .post(controller.index)

module.exports = router;