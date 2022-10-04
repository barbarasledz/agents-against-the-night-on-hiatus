const express = require('express');
const router = express.Router();


router.route('/users')
    .get((req, res) => {
        res.send('get users -- get all users')
    })

module.exports = router;