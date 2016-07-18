var express=require('express');
var router=express();



var MyModel=require('../../../models/cities/city');


router.get('/', function(req, res, next) {
  res.send("Hello...........!");
});



router.get('/get', function(req,res){
  MyModel.find({}).exec(function(err,data){
    if(err)
      res.send('error.....');
    else
      {
       res.json(data);
      }
  });

});

router.get('/get/:name', function(req,res){
  console.log(req.params.name);
  MyModel.find({name: req.params.name}).exec(function(err, data) {
    if(err)
      res.send('error.....');
    else
      {
       res.json(data);
      }
  });

});


router.post('/Weatherpost', function(req, res){
  MyModel.create(req.body, function(err, data){
    if(err)
      console.log('error..!'+err);
      else {
        res.send(data);
      }
  });
});


var request = require('request');

router.post('/Add',function(req, res, next) {
   var cityname = req.body.name;
   console.log(cityname);
   var cityurl = "http://api.openweathermap.org/data/2.5/weather/?q="+cityname+"&APPID=86fe55e9ec8321ab19350ef592627b55";
   console.log(cityurl);

   request(cityurl, function(err,resp,body){
     body = JSON.parse(body);

     console.log(body);
     var obj = new MyModel(body);

     obj.save(function(err) {
       if(err)
         console.log(err);

     });
     res.send(obj.name + " Inserted successfully");
   });

 });

module.exports=router;




// var express = require('express');
// var router = express.Router();
// var imdbObj = require('node-city');
// var jwt = require('jsonwebtoken');
// var City = require('../../../models/cities/city');
// var config=require('../../../config/config.json');
// var app = express();
//
// app.set('superSecret', config.secret);
//
// // Search and save the movie
//
//   .post(function(req, res) {
//         imdbObj(req.body.Title, function (err, data) {
//         if (data){
//         var city = new City();
//         city.coord = data.coord;
//         city.weather =  data.weather;
//         city.base = data.base;
//         city.main = data.main;
//         city.wind = data.wind;
//         city.clouds = data.clouds;
//         city.dt = data.dt;
//         city.sys = data.sys;
//         city.id = city.id;
//         city.name = data.name;
//         city.cod = data.cod;
//
//         city.save(function(err) {
//             if (err)
//                 res.send(err);
//             res.json({ message: 'city added!' });
//               });
//             }else {
//               res.send(err);
//             }
//             });
//         });
//
//         // Add Movie route
//
//       router.route('/cities/add')
//       // Save movie
//         .post(function(req, res) {
//               var movie = new Movie();
//               city.wind = req.body.wind;
//               city.cloudiness =  req.body.cloudiness;
//               city.pressure = req.body.pressure;
//               city.humidity = req.body.humidity;
//               city.sunrise = req.body.sunrise;
//               city.sunset = req.body.sunset;
//               city.geocoords = req.body.geocoords;
//               city.save(function(err) {
//                   if (err)
//                       res.send(err);
//                   res.json({ message: 'city added!' });
//                     });
//                   });
// // Route to get all movies and save a movie
//     router.route('/cities/:city_id')
// // Get the movie by id
//           .get(function(req, res) {
//             Movie.findById(req.params.city_id, function(err, city) {
//                 if (err)
//                     res.send(err);
//                 res.json(city);
//             });
//         })
// // Update the movie by id
//         .put(function(req, res) {
//         City.findById(req.params.city_id, function(err, city) {
//             if (err)
//                 res.send(err);
//             city.name = 'Hello';
//             movie.save(function(err) {
//                 if (err)
//                     res.send(err);
//                 res.json({ message: 'City updated!' });
//             });
//         });
//     })
// // Delete the movie by id
//     .delete(function(req, res) {
//         City.remove({
//             _id: req.params.city_id
//         }, function(err, movie) {
//             if (err)
//                 res.send(err);
//             res.json({ message: 'Successfully deleted' });
//         });
//     });
//     module.exports= router;
