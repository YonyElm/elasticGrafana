var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	// check for existence of variable called text in URL
	if (!req.query.text) {
  		res.render('index', { title: 'Csv Collector',
  		text: 'Welcome, please upload your CSV file' });
	}
	else {
  		res.render('index', { title: 'Csv Collector',
  		text: req.query.text });
	}
});

module.exports = router;
