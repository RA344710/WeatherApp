var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var citySchema = new Schema({

   coord:{
     lon:Number,
     lat:Number
   },
   weather:[ {
     id : Number,
     main : String,
     description : String,
     icon : String
   }],
   base : String,
   main :{
     temp : Number,
     pressure : Number,
     humidity : Number,
     temp_min : Number,
     temp_max : Number,
     sea_level : Number,
     grnd_level : Number
   },
   wind :{
     speed : Number,
     deg : Number
   },
   clouds :{
     all : Number
   },
   dt : Number,
   sys : {
     message : Number,
     country : String,
     sunrise : String,
     sunset : String
   },
   id : Number,
   name : String,
   cod : Number
});
module.exports=mongoose.model('City',citySchema);
