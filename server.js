var express = require('express');
var app = express();
var port = 3000;

var middleWare = {
	requireAuthentication: function(req, res, next){
		console.log('private route hit!');
		next();
	},
	logger:function(req, res, next){
		var date = new Date().toString(); 
		console.log('request '+ date + ' ' + req.method + ' ' + req.originalUrl);
		next();
	}
}

app.use(middleWare.logger);
// app.use(middleWare.requireAuthentication);

app.get('/about', middleWare.requireAuthentication,function(req, res){
	res.send("about data");
});

app.use(express.static(__dirname + '/public'));

app.listen(port, function () {
	console.log("express server is started in port of  " + port + '!' );
});