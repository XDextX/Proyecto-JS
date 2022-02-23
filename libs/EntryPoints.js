var express = require('express');
var router	= express.Router();



router.get('/db', function (req, res) {

	sql.connect(config, function (err) {
		if (err){ console.log(err)};
	});

	sql.connect(config, function (err) {
		if (err){ console.log(err)};
		var request = new sql.Request();
		request.query('select * from t1', function (err, recordset) {
			if (err){ console.log(err)};
		res.send(recordset);
		});
	});	
});







module.exports = router;
