// MODULES =================================================
var express = require('express');
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');

var app = express();



// CONFIGURATION ===========================================

var db = require('./db');
// TODO: connect to db

app.use(bodyParser.json()); 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static(__dirname + '/../client'));

// ROUTES ==================================================
var routes = require('./routes/route');
app.use('*', routes);
// app.use('/api', api); // later create /routes/api.js for holding our api routes


module.exports = app;
