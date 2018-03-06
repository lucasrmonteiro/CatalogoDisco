//============================================
// Config Server
//============================================
const express = require('express');
const app = express();
const port = 8080;

const router = require('./routes')(app);

app.use('/',router)

app.listen(port);
console.log("Listening on port " + port);


module.exports = app;