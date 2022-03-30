// by FVN-INVENIO

import express from 'express';
export const router = express.Router();

// for POSTGRESQL=============================================================================
import pkg from 'pg';
const { Pool } = pkg;
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

router.get('/usuarios/all', function (req, res) {
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
router.get('/usuarios', function (req, res) {
	let { usuario, clave } = req.query;
	//var usuario = req.query.usuario;
	//var clave = req.query.clave;
	var sql = `select  usuario,tipousuario,fechaultimoingreso,nombre from "USUARIOS"
where usuario='${usuario}' and clave='${clave}'`;
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
router.get('/usuarios/cambiar/acceso', function (req, res) {
	let { usuario, clave } = req.query;
	//var usuario = req.query.usuario;
	//var clave = req.query.clave;
	var sql = `UPDATE public."USUARIOS" set fechaultimoingreso=now() where usuario='${usuario}'`;
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
router.get('/usuarios/acceso', function (req, res) {
	let { usuario, clave } = req.query;
	//var usuario = req.query.usuario;
	//var clave = req.query.clave;
	var sql = `select fechaultimoingreso from public."USUARIOS" where usuario='${usuario}'`;
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
