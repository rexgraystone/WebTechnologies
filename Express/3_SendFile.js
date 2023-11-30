const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/3_index.html');
})

console.log(__dirname);
console.log(__filename);

app.post('/', function(req, res) {
    console.log(req.body);
    result = Number(req.body.num1) + Number(req.body.num2);
    res.send('The result is ' + result);
})

app.listen(4000, function() {
    console.log('Listening on port 4000');
})