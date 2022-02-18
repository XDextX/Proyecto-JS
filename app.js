var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var EntryPoints = require(__dirname + '/libs/EntryPoints');

app.use(express.static('public'));
app.set('port', '3005');
//app.use('/EntryPoints',EntryPoints);
app.disable('x-powered-by');

server.listen(app.get('port'), function () {
	console.log(
		'Express server for P30 System  listening on port ' + app.get('port')
	);
});
