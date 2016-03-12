var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Promise = require('bluebird');

var models = require('../Models');
var Restaurant = models.Restaurant;
var Activity = models.Activity;
var Place = models.Place;
var Hotel = models.Hotel;

module.exports = router;

var restList;
var restAll = Restaurant.find({})
		.then(function(restaurant){
			restList = restaurant;
		});

var actList;
var actAll = Activity.find({})
		.then(function(activity){
			actList = activity;
		});

var hotList;
var hotAll = Hotel.find({})
		.then(function(hotel){
			hotList = hotel;
		});

router.get('/',function(req,res,next){
	Promise.all([restAll,actAll, hotAll])
	.then(function(){
		res.render('index_new', {restaurants: restList, activities: actList, hotels:hotList});	
	})
	.catch(function(err){
		console.log(err);
	});
});