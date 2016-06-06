var express = require('express');
var app = express();
app.get('/index',function(req,res){
	console.log("show tongyi.html");

	var options = {
		root:_dirname,
		headers:{
			test
		}
	}
	res.sendFile('/index.html',options);
});
app.listen(9529);