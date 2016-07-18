var express=require('express');
var app=express();
var router=require('./api/routes/cities/city');
var bodyparser=require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/citydb');
mongoose.set("debug", true);
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
 extended: true
}));


app.use('/', router);

app.listen(8080, function(){
  console.log('listening port 8080...');
});




// var express = require('express');
// var mongoose = require('mongoose');
// var bodyParser = require('body-parser');
// var movie = require('./api/routes/cities/city');
// var config=require('./config/config.json');
// var path = require('path');
// var jwt = require('jsonwebtoken');
// var router = express.Router();
//
// var app = express();
//
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.set('superSecret', config.secret);
//
//
// mongoose.connect(config.DatabaseURL);
//
// var db = mongoose.connection;
//
// db.on('error', console.error.bind(console,'Connection error ...!!!!!'));
// db.once('open',function(){
//   console.log("Connected to MongoDB successfully");
// })
//
// app.use('/api', city);
//
// var port = config.port;
//
// app.listen(port, function(){
//   console.log("Server started at port :"+port);
// });
