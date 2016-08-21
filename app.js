var express = require('express');
var multer = require('multer');
var app = express();
var port = 5000;

app.set('port', port); 

var storage = multer.diskStorage({
  destination: function (request, file, callback) {
    callback(null, '/example/uploads');
  },
  filename: function (request, file, callback) {
    console.log(file);
    callback(null, file.originalname)
  }
});


var upload = multer({storage: storage}).single('photo');

//Showing index.html file on our homepage


//Posting the file upload
app.post('/upload', function(request, response) {
  // upload(request, response, function(err) {
  // if(err) {
  //   console.log('Error Occured');
  //   return;
  // }
  
  // response.end('Your File Uploaded');
  // console.log('Photo Uploaded');
  // })
  response.json(request.body.dd);
  
});


app.use(express.static('www'));

var server = app.listen(port, function () {
  console.log('Listening on port ' + server.address().port)
});
