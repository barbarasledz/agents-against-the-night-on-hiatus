// gets all agents
function index(req, res) {
    return res.json( {message: "Agent controller INDEX"} )
}

// create an agent
function create(req, res) {
    return res.json( {message: "Agent controller CREATE"} )
}

// update an agent
function update(req, res) {
    return res.json( {message: "Agent controller UPDATE"} )
}

// remove an agent
function remove(req, res) {
    return res.json( {message: "Agent controller REMOVE"})
}

// returns one specific agent
function show(req, res) {
    return res.json( {message: "Agent controller SHOW"})
}

module.exports = { index, create, update, remove, show };