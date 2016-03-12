var express = require('express');
var swig = require('swig');
swig.setDefaults({cache:false});
var mongoose = require('mongoose');
var morgan = require('morgan');
var logger = morgan('dev');
var bodyParser = require('body-parser');
var app = express();	
var routes = require('./routes');


app.use('/css',express.static(__dirname+'/css'));
app.use('/js',express.static(__dirname+'/js'));
app.use(express.static(__dirname+'/node_modules'));

app.use(express.static('./public'));
app.set('views','./views');
app.set('view engine', 'html');
app.engine('html',swig.renderFile);

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(logger);




app.use('/', routes);

app.get('/',function(req,res){
	res.send("Hello");
});

// catch 404 (i.e., no route was hit) and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// handle all errors (anything passed into `next()`)
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    console.log({error: err});
    res.render('error', {error: err});
});

app.listen(3000, function(){
	console.log("Listening on port 3000")
});