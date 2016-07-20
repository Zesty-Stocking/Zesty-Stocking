var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var db = require('../db');
var Sequelize = require('sequelize');




// API-FACING ROUTES ======================================


router.get('/users', function(req, res) {
  console.log('inside API route');
  db.User.findAll().then(function(users) {
    res.json(users);
  });
});

router.post('/users', function(req, res) {
  console.log('inside post for users api');
  db.User.find( {where: {username: req.body.username}} )
    .then(function(found) {
    if(found) {
      res.send(found);
    } else {
      console.log(req.body);
      var user = db.User.create({
        username: req.body.username,
        name: req.body.name,
        location: req.body.location || null,
        avatarUrl: req.body.avatarUrl
      }).then(function() {
        res.send(user);
      });
    }
  });
});

router.get('/users:user_id', function(req, res) {
  db.User.findById(req.params.user_id, function(err, user) {
    if(err)
      res.send(err);
    res.json(user);
  });
});

router.get('/messages', function(req, res) {
  db.Message.findAll().then(function(messages) {
    res.json(messages);
  });
});

router.post('/messages', function(req, res) {
  console.log('inside of message post api');
  var message = db.Message.create({
    UserId: req.body.UserId,
    text: req.body.text,
  }).then(function() {
    console.log(message.dataVales);
    res.send(message);
  });
});

module.exports = router;
