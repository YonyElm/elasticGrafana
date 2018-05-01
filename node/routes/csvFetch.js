const express = require('express');
const csvParser=require('csvtojson');
var Multer = require('multer');
var fs = require('fs');
var elasticDB = require('elasticsearch');


var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
// 	var filePath= req.query.csvPath;
// 	res.send(filePath);
// });

// Configuration for uploading files
const multerConfig = {

	// Storage configuration
	storage: Multer.diskStorage({
		destination: __dirname + "/../uploads",

		// Give the file a unique name
		filename: function(req, file, next){
			console.log(file);
			const ext = file.mimetype.split('/')[1];
			next(null, file.fieldname + '-' + Date.now() + '.'+ext);
		}
	}),

	// Filtering CSV files
	fileFilter: function(req, file, next){
		if(!file){
			next();
		}
		const csvFile = file.mimetype.endsWith('text/csv');
		if(csvFile){
			console.log('Uploading CSV file');
			next(null, true);
		}else{
			console.log("file not supported");
			return next(new Error("File isn't supported: " + file.mimetype));
		}
	}
};

router.post('/', Multer(multerConfig).single('csvPath'), function (req, res, next){
	var filePath = req.file.path;
	console.log(filePath);

	function onError(error){
		console.log(error);
	}

	function done(parseResponse){
		console.log(parseResponse);
		res.redirect('/');
	}

	// Function that passes function on
	parseCSVFile(filePath, onError, done);

});

function parseCSVFile(sourceFilePath, handleError, done){

	var tmpFilePath = __dirname + '/../tmp_files/' + 'tmp-' + Date.now() + '.json';
	var parser = csvParser().fromFile(sourceFilePath);
	var numOfRecs = 0;

	parser.on('json', function(jsonObj) {
		elasticMetaString = '{"index":{"_id":"'+numOfRecs+'"}}'+"\n";
		fs.appendFile(tmpFilePath, elasticMetaString + JSON.stringify(jsonObj)+"\n", function (error) {
			if (error) {
				handleError(error)
			}
		});
		numOfRecs = numOfRecs + 1
	});

	parser.on("error", function(error){
		handleError(error)
	});

	parser.on("end", function(){
		// Delete file when processing done
		fs.unlinkSync(sourceFilePath);
		addingToElastic(tmpFilePath, done);
	});
}

//-----------------------------------------------

const ElasticMapping = {
	tick:{
		properties:{
			Date    : {"type": "date", "format": "d-MMM-yy"}
		}
	}
};

function addingToElastic(sourceFilePath, done){
	var elasticClient = new elasticDB.Client({
		host: 'localhost:4000',
		log: 'trace'
	});

	// ping Elastic server before sending data
	elasticClient.ping({
		// ping usually has a 3000ms timeout
		requestTimeout: 1000
	}, function (error) {
		if (error) {
			console.trace('ElasticSearch cluster is down!');
		} else {

			// Create empty ElasticSearch index, and change mapping.
			elasticClient.create({index:"aapls", type:"tick", id: 0, body:{}});
			elasticClient.indices.putMapping({index:"aapls", type:"tick", body:ElasticMapping});

			// Add records to the index
			fs.readFile(sourceFilePath, 'utf8', function (err, data) {
				if (err) throw err; // we'll not consider error handling for now
				elasticClient.bulk({index:"aapls", type:"tick", body:data});
			});
			//Delete temporary file.
			fs.unlinkSync(sourceFilePath);
			done('All is well' + sourceFilePath);
		}
	});
}

module.exports = router;