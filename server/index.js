const express = require('express');
const registerRoutes = require('./routes');
const setEnvironment = require('./config/env')

const app = express()
const port = 3000

// set environment before we do antything else
setEnvironment(app);
// then we can register our routes
registerRoutes(app);

// check if our server is working at all
app.get('/', (req, res) => {
  if (process.env.NODE_ENV !== 'production') {
    return res.send('Running server in development mode')
  } else {
    return res.sendFile('index.html', {root: __dirname + '/../dist'})
  }
})

// listen on the specified port
app.listen(port, () => {
  console.log(`Example app listening on port ${port} in ${process.env.NODE_ENV} mode!`)
})