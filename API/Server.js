//============================================
// Config Server
//============================================
const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser')
require('./routes')(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port);
console.log("Listening on port " + port);


module.exports = app;