//============================================
// Config Server
//============================================
const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./routes')(app);

app.listen(port);
console.log("Listening on port " + port);


module.exports = app;