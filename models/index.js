var mongoose=require('mongoose');
//var marked = require('marked');
mongoose.connect('mongodb://localhost/staticUI');

var Schema=mongoose.Schema;

var placeSchema= new Schema({
address : {type : String},
city : {type : String},
state : {type : String},
phone : {type : String},
location: {type:Array}//(lat, lon number array)
});

var Place=mongoose.model('place',placeSchema);

var activitySchema= new Schema({
name:{type:String},
place: placeSchema ,
age_range:{type:String} 
});

var Activity=mongoose.model('activity', activitySchema);


var hotelSchema= new Schema({
name: {type:String},
place: placeSchema,
num_stars: {type:Number},
amenities: {type:String}
});


var Hotel=mongoose.model('hotel', hotelSchema);


var restaurantSchema= new Schema({
name : {type : String},
place : placeSchema,//(array of place schema)*
cuisine : {type : String},//(comma delimited string list)
price : {type : Number}//(integer from 1-5 for how many dollar signs)
});
var Restaurant=mongoose.model('resturant',restaurantSchema);

module.exports={
	Activity:Activity,
	Hotel:Hotel,
	Place:Place,
	Restaurant:Restaurant
}