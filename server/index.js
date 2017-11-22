var express = require('express');
var app = express();
var path = require('path');

var port = 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', function(req,res) {
    res.send('im working!!');
});

app.listen(port, function() {
    console.log('now listening on port ' + port);
});
