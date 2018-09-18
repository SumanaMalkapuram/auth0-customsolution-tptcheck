var express = require('express');
var app = express();
var path = require('path');

// viewed at http://app2.com:3000
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'tpt-check.html'));
    res.setHeader("Access-Control-Allow-Origin", "http://app1.com:8080");
});

app.listen(3000);