const express = require('express');
const router = express.Router();
const controller = require('./agent-controller');


router.route('/agents')
    .get(controller.index)
    .post(controller.create)

router.route('/agents/:id')
    .get(controller.show)
    .patch(controller.update)
    .delete(controller.remove)

module.exports = router;  