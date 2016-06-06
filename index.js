var express = require('express');
var app = express();
app.get('/tongyi',function(req,res){
	console.log("show tongyi.html");
	res.sendFile('/tongyi.html');
});
app.listen(80);