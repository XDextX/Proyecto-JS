// by FVN-INVENIO

var express = require('express');
const { send } = require('express/lib/response');
var router = express.Router();

// for POSTGRESQL=============================================================================

const { Pool } = require('pg');
const pool = new Pool({
	user: 'new',
	password: '1234',
	database: 'ArturoDB',
	host: 'localhost',
	port: 5432,
	max: 20,
	idleTimeoutMillis: 30000,
	connectionTimeoutMillis: 2000,
});

// ==================================================== END VARIABLES DIVISION =========================================================

//========================================================= FUNCTION DIVISION =======================================================

// rutina DEMO para hacer pruebas de AJAX

router.get('/demorutina', function (req, res) {
	var sql = 'select * from public."USUARIOS"';

	pool.connect((err, client, release) => {
		if (err) {
			res.send(err.stack);
			return console.error('Error acquiring client', err.stack);
		}
		client.query(sql, (err, result) => {
			release();
			if (err) {
				return console.error('Error executing query', err.stack);
			}
			res.send(result.rows);
		});
	});
});
router.get('/demorutina2', function (req, res) {
	var usuario = req.query.usuario;
	var clave 	= req.query.password;
	
	var sql = 'select usuario from public.\"USUARIOS\" where usuario = \''+usuario+'\' and clave = \''+clave+'\'';
	
	

	pool.connect((err, client, release) => {
		if (err) {
			res.send(err.stack);
			return console.error('Error acquiring client', err.stack);
		}
		client.query(sql, (err, result) => {
			release();
			if (err) {
				return console.error('Error executing query', err.stack);
			}
			res.send(result.rows);
		});
	});
});
// ==============================================

// ===============================================================END ENTRY POINT DIVISION =================================================

module.exports = router;
