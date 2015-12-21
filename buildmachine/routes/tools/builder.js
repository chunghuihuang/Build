var fs = require('fs');
var path = require('path');
var child_process = require('child_process');

var BuildMachine = module.exports = function() {
	this.config = {};
};

BuildMachine.prototype.arduino = function (UploadPath, src, tmphex, callback){
	var tmppath = path.join(UploadPath, tmphex);
	var tmpdl = path.join(tmppath, src);

	var D_CPU='16000000UL';
	var mcu='atmega328p';
	var output='main.o';
	var cmdStr = "avr-gcc " + "-DF_CPU=" + D_CPU + " -mmcu=" + mcu + " -o " + path.join(tmppath, output) + " " + tmpdl;
	console.log("cmdStr: " + cmdStr);

	child_process.exec(cmdStr, function(err,cmdout,cmderr){
		if(err) {
			console.log(cmdout);
			console.log('build_patchbuild error: '+cmderr);
			return callback(err);
		} else {
			console.log(cmdout);
			console.log('child_process.exec is done. ');
			if(typeof(callback)=='function'){
				return callback(null, output);
			};
		}
	});
};
