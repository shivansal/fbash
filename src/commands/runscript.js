var fs = require('fs'),
    path = require('path');

module.exports = function(api, file, threadID){
	api.sendMessage("Getting your task", threadID)

	var spawn = require(“child_process”).spawn;

	var process = spawn(‘python’, [“./”+file]);
  	
  	//use sys.stdout.flush() in python file
  	process.stdout.on(‘data’, function (data) {
  		api.sendMessage(data.toString, threadID);
  	});

	return;
}






