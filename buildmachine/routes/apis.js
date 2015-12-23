var express = require('express');
var router = express.Router();
var path = require('path');
var crypto = require('crypto');
var Busboy = require("busboy");
var mkdirps = require('mkdirps');
var bodyParser = require('body-parser');
var fs = require('fs');
var BuildMachine = require('./tools/builder');

// create application/json parser 
var jsonParser = bodyParser.json()
//var initIno = '';
var initIno = 'int main(){init();setup();for (;;) {loop();}return 0;}'
// create application/x-www-form-urlencoded parser 
var urlencodedParser = bodyParser.urlencoded({ extended: false })

function receiver(req, UploadPath, fileinfo, callback) {
	var busboy = new Busboy({	
		headers: req.headers,
		limits: {
			'fileSize': 1024 * 1024 * 50, // 50MB
			'files': 10 // MAX FILES
		}
	});
	busboy.on("file", function(fieldname, file, filename, encoding, mimetype) {
		console.log('File [' + fieldname + ']: filename: ' + filename + ', encoding: ' + encoding + ', mimetype: ' + mimetype);
		if ( filename == ''){
			//console.log('No upload file.');
		}
		else{
			var tmphex = crypto.randomBytes(16).toString('hex').substr(0, 8);
			var tmppath = path.join(UploadPath, tmphex);
			mkdirps([ tmppath ], function (err) {
				if (err) {
					console.log(err);
				}
				else{
					tmpdl = path.join(tmppath, fileinfo);
					file.pipe(fs.createWriteStream(tmpdl));
				}
			});			
		}
	});
	
	busboy.on("finish", function() {
		if(typeof(callback)=='function'){ 
			//return callback(null, configobj);
			return callback(null, tmphex);
		};	
	});
	req.pipe(busboy);
}
	
// http://localhost:9000/apis/complier
router.get('/complier', function(req, res) {
	var build = new BuildMachine();
	var UploadPath = 'build/';
	var src = 'main.c';
	console.log('complier');
	receiver(req, UploadPath, src, function(err, tmphex){
		if (err) {
			console.log('Something\'s wrong, we couldn\'t pass FWversion.');
			console.log(err);
			//res.send('Task is ' + err);
			return; // Exit the untar function and don't execute code in the below lines.
		}
		build.arduino(UploadPath, src, tmphex, function(err, output){
			console.log('Done. ' + output);
			res.send('Done. ' + output);
		});
	});
});
// http://localhost:9000/apis/post
router.post('/post', urlencodedParser , function(req, res) {
	var build = new BuildMachine();
	var UploadPath = 'public/';
	var src = 'blink.c';

	if(!req.body || req.body.length === 0) {
    	console.log('request body not found');
    	
  	}
  	else
  	{
  		var user = req.body;
  		console.log('request body : ' + user.src)	

  		var tmphex = crypto.randomBytes(16).toString('hex').substr(0, 8);
		var tmppath = path.join(UploadPath, tmphex);
    	console.log('post');
		mkdirps([ tmppath ], function (err) {
			if (err) {
				console.log(err);
			}
			else{
				tmpdl = path.join(tmppath, src);
				fs.writeFile(tmpdl, req.body.src + initIno , function(error) {
     				if (err){
       					console.error("write error:  " + error.message);
     				} else {
       					console.log("Successful Write to " + tmpdl);
     				}
				});
			}
		});	

		build.arduino(UploadPath, src, tmphex, function(err, output){
			console.log('Done. ' + output);
			if (err) {
				console.log(err);
			}
			else
			{
				var hexpath = path.join(tmphex, 'blink.hex');
				res.send( hexpath);
			}
			
		});
  	}
  
	
});

router.get('/', function(req, res) {
	res.send('No Permission.');
});

// http://localhost:9000/apis/test
router.get('/test', function(req, res) {
	var build = new BuildMachine();
	var UploadPath = 'public/';
	var src = 'main.c';
	var tmphex = '12345678'
	
	build.arduino(UploadPath, src, tmphex, function(err, output){
		console.log('Done. ' + output);
		res.send('Done. ' + output);
	});
});

router.get('/', function(req, res) {
	res.send('No Permission.');
});

module.exports = router;
