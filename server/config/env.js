const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser')

function setEnvironment(app) {
    if (process.env.NODE_ENV !== 'production') {
        setDevEnv(app);
    } else {
        setProdEnv(app);
    }

}

function setDevEnv(app) {
    console.log("Setting development environment")
    process.env.NODE_ENV = 'development'
    app.use(bodyParser.json())
    app.use(morgan('dev'));
    app.use(cors());
}

function setProdEnv(app) {
    console.log("Setting production environment")
    app.use(bodyParser.json())
    app.use(express.static(__dirname + '/../dist'))
}

module.exports = setEnvironment;
