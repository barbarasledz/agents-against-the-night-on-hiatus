const express = require('express');
const router = express.Router();


router.route('/auth')
    .post((req, res) => {
        res.send('post auth -- login')
    })


module.exports = router;