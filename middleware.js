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

module.exports = middleWare;