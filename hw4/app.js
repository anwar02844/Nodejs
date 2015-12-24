var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
//var path = require('path');

var starsRroutes = require('./routes/starsRoutes');
var starsCtrl = require('./controllers/dataService');

var db = mongoose.connect('mongodb://localhost/stars');

var app = express();
var port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(function(req,res,next){
    return starsCtrl.dataService(req, res, next);
});
app.use('/', starsRroutes);

app.listen(port, function(){
    console.log('Running STARTS REST Service app on  PORT: ' + port);
});