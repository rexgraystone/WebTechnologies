const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send("Welcome to express")
})

app.get('/index', function(req, res) {
    res.send("Home page")
})

app.get('/about', function(req, res) {
    res.send("About page")
})

app.get('*', (req, res) => {
    res.send("404 page not found")
})

app.listen(7777)