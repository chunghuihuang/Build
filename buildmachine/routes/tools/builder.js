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
	var outputhex='main.hex';
	var ARDCOREDIR = '/home/ubuntu/Build/buildmachine/build/hardware/arduino/cores/arduino'
	//$ avr-gcc -g -DF_CPU=9600000 -Wall -L/usr/avr/lib -Os -mmcu=attiny13a -o tmp.elf tmp.o 
	var cmdStr = "avr-gcc " + "-DF_CPU=" + D_CPU + "-lm -I$(" + ARDCOREDIR +") -I$(" + ARDCOREDIR+ ")/../../variants/standard -mmcu=" + mcu + " -o " + path.join(tmppath, output) + " " + tmpdl;
    var cmdHexStr = "avr-objcopy -O ihex -R .eeprom " + path.join(tmppath, output) +  " " +  path.join(tmppath, outputhex) ;
	console.log("cmdStr: " + cmdStr);

	child_process.exec(cmdStr, function(err,cmdout,cmderr){
		if(err) {
			console.log(cmdout);
			console.log('build_patchbuild error: '+cmderr);
			return callback(err);
		} else {
			console.log(cmdout);
			console.log('child_process.exec is done. ');
			//if(typeof(callback)=='function'){
			//	return callback(null, output);
			//};
			child_process.exec(cmdHexStr, function(err,cmdout,cmderr){
				if(err) {
					console.log(cmdout);
					console.log('build_patchbuild error: '+cmderr);
					return callback(err);
				} else {
					console.log(cmdout);
					console.log('child_process.exec is done. ');
					if(typeof(callback)=='function'){
						return callback(null, outputhex );
					};
				}
			});
		}
	});
};
