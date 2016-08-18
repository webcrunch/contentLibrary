var express = require('express'),
app = express(),
multer = require('multer'),
boddyparser = require('body-parser');

app.use(boddyparser.urlencoded({extended: true}));
app.use(boddyparser.json());
var showAll = function(req,res){

}

var uploadFile = function(req,res){
	
	console.log(req.displayImage);
	res.json({status: "OK"});
}

// skapar en routes för post request och ska se vad som kommer tillbaka till servern 
app.post('/fileLoad', uploadFile);

app.use(express.static('www'));
var server = app.listen(80, function(){
	var port = server.address().port;
console.log("Server started. Listening to connections on port " + port );
})
