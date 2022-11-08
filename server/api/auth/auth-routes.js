const express = require('express');
const router = express.Router();
const controller = require('./auth-controller');


router.route('/auth')
    .post(controller.index)

module.exports = router;