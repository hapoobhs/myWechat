var express = require('express');
var app = express();
app.get('/index',function(req,res){
	res.sendFile('/index.html');
});
app.listen(80);