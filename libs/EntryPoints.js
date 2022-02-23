var express = require('express');
var router = express.Router();

// config for your database MSSQL
var config = {
	user: 'sa',
	password: 'invenio',
	server: '127.0.0.1',
	port: 54723,
	database: 'pruebasDB',
	options: {
		encrypt: false,
		enableArithAbort: false,
	},
};

router.get('/db', function (req, res) {});

module.exports = router;
