const StringUtil = require("./../../utilities/string-util")

function index(req, res) {
    const validation = validateIndex(req.body);
    console.log(validation)
    if (!validation.isValid) {
        return res.json( {message: validation.message})
    }
    const user = {
        username: req.body.username.toLowerCase(),
        password: req.body.password
    }
    // TODO: connect to database here
    return res.json( {message: `Hello! User ${user.username} has been created`})
}


// Helper function; validates if username/password is valid (not empty)
function validateIndex(body) {
    let errors = "";
    if (StringUtil.isEmpty(body.username)) {
        errors += "Username is required."
    }
    if (StringUtil.isEmpty(body.password)) {
        errors += "Password is required."
    }
    return {
        isValid: StringUtil.isEmpty(errors),
        message: errors
    }
}

module.exports = { index };