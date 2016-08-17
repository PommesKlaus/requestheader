var express = require("express");
var app = express();

app.get('/', (req, res) => {
    var output = {
        ipaddress: req.headers['x-forwarded-for'] || req.ip,
        language: req.headers["accept-language"].split(',')[0],
        software: req.headers['user-agent'].split('(')[1].split(')')[0]
    }
    
    res.send(JSON.stringify(output, null, 2));
});

var port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("Server started")
});