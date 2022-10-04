const express = require('express');
const router = express.Router();


router.route('/register')
    .post((req, res) => {
        res.send('post register -- create a user')
    })

module.exports = router;