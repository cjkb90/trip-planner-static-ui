var express = require('express');
var Router = express.Router();
var mongoose = require('mongoose');

var Models = require('./models');
var Restaurant = Models.Restaurant;
var Activity = Models.Activity;
var Place = Models.Place;