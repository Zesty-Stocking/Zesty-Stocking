var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var db = require('../db');
var Sequelize = require('sequelize');
var utils = require('../db/dbControllers');




// API-FACING ROUTES ======================================


router.get('/users', function(req, res) {
  db.User.findAll().then(function(users) {
    res.json(users);
  });
});

router.post('/users', function(req, res) {
  var user = req.body;
  utils.findOrCreateUser(user, function(err, user) {
    if(err)
      res.send(err);
    res.json(user);
  });
});

router.get('/users:UserId', function(req, res) {
  db.User.findById(req.params.user_id, function(err, user) {
    if(err)
      res.send(err);
    res.json(user);
  })
});

router.get('/messages', function(req, res) {
  db.Message.findAll().then(function(messages) {
    res.json(messages);
  });
});

router.post('/messages', function(req, res) {
  console.log('inside of message post api');
  db.Message.create({
    UserId: req.body.UserId,
    text: req.body.text
  }).then(function(message) {
    res.json(message)
  });
});

module.exports = router;
