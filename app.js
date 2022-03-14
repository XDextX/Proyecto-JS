import express from 'express';
import { router as Entrypoints } from './libs/EntryPoints.js';
import { createServer } from 'http';
var app = express();
var server = createServer(app);

app.use(express.static('public'));
app.set('port', '3005');
app.use('/EntryPoints', Entrypoints);
app.disable('x-powered-by');

server.listen(app.get('port'), function () {
	console.log(
		'Express server for P30 System  listening on port ' +
			app.get('port') +
			' http://localhost:' +
			app.get('port')
	);
});
