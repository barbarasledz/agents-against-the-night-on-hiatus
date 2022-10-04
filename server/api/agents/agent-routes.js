const express = require('express');
const router = express.Router();


router.route('/agents')
    .get((req, res) => { // gets all agents
        res.send('get agents -- gets all agents');
    })
    .post((req, res) => { //posts an agent
        res.send('post agents -- adds an agent')
    })

router.route('/agents/:id')
    .get((req, res) => { // gets a specific agent
        res.send('get agents/:id -- get an agent by ID')
    })
    .patch((req, res) => {
        res.send('patch agents/:id -- modifies a specific agent')
    })
    .delete((req, res) => { 
        res.send('delete agents/:id -- removes a specific agent')
    })

module.exports = router;  