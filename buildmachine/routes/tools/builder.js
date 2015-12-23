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
	var output='blink.o';
	var outputhex='blink.hex';
	var ARDCOREDIR = '/home/ubuntu/Build/buildmachine/build/hardware/arduino/cores/arduino'
	
    var cmdStr = "avr-gcc  -mmcu=" + mcu + " -I. -gstabs -DF_CPU=" + D_CPU +" -I/home/ubuntu/Build/buildmachine/build/hardware/arduino/cores/arduino -I/home/ubuntu/Build/buildmachine/build/hardware/arduino/variants/standard  -Os -Wall -Wstrict-prototypes -std=gnu99 -o " + path.join(tmppath, output) + " " + tmpdl;
	//var cmdStr = "avr-gcc " + "-DF_CPU=" + D_CPU + "-lm -I/home/ubuntu/Build/buildmachine/build/hardware/arduino/cores/arduino -I/home/ubuntu/Build/buildmachine/build/hardware/arduino/variants/standard -mmcu=" + mcu + " -c -o " + path.join(tmppath, output) + " " + tmpdl;
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
