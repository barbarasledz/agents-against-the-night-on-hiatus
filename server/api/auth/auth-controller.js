const StringUtil = require("./../../utilities/string-util")

// to log in
function index(req, res) {
    const validation = validateIndex(req.body);
    console.log(validation)
    if (!validation.isValid) {
        return res.json( {message: validation.message})
    }
    return res.json( {message: `Hello! User ${req.body.username} will try to log in`})
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