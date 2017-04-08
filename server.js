var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.get('/', function(req, res) {
    var obj = {
        ipaddress: req.headers['x-forwarded-for'],
        language: req.headers["accept-language"].split(',')[0],
        software: req.get('User-Agent').split(')')[0] + ')'
    };
    res.send(JSON.stringify(obj));
});

app.listen(port, function () {
  console.log('Timestamp app listening on port ' + port + '!');
});
