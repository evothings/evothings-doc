var exec = require('child_process').exec

function puts(error, stdout, stderr) {
	console.log(stdout)
	console.log(stderr)
}

exec("./node_modules/.bin/jsdoc -c jsdoc-conf.json", puts)
