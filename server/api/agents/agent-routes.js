const express = require('express');
const router = express.Router();

// Get all agents
router.get('/agents', (req, res) => {
    res.send('get.agents -- gets all agents (of this account)');
})

// Create an agent
router.post('/agents', (req, res) => {
    res.send('post.agents -- create an agent');
})

// Get specific agent
router.get('/agents/:id', (req, res) => {
    res.send('get.agents/:id -- get an agent by id')
})

// Updates a specific agent
// use patch because the agent files may get long
// (aka, updating them with PUT may get spicy)
router.patch('/agents/:id', (req, res) => {
    res.send('patch.agents/:id -- updates an agent by id')
})

// Deletes a specific agent
// (it falls to the client to confirm with the user if they're sure they want to delete the agent)
router.delete('/agents/:id', (req, res) => {
    res.send('delete.agents/:id -- deletes an agent by id')
})