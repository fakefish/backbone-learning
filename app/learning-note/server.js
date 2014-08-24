var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.sendFile(__dirname+'/ch0205.html');
});
app.route('/man')
	.get(function (req, res, next) {
		res.json({"name":"node-server", "age": 10});
	})
	.post(function (req, res, next) {
		res.send('success');
	})

app.listen(8000, function () {
	console.log('listening to port 8000');
});