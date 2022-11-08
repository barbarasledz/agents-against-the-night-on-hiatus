const express = require('express');
const router = express.Router();
const controller = require('./user-controller');

router.route('/user')
    .get(controller.index)

module.exports = router;