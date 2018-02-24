//============================================
// Config Server
//============================================
const express = require('express');
const app = express();
const router = express.Router();
const port = 8080;

router.route('/').get((req,res) =>{
     res.json("Teste Helo Word");
});

app.use('/',router)

app.listen(port);
console.log("Listening on port " + port);