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
  var query = { accessToken: user.accessToken };

  utils.findOrCreateUser(user, query, function(err, user) {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(user);
  });
});

router.get('/users/:UserId', function(req, res) {
  db.User.findById(req.params.UserId, function(err, user) {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(user);
  });
});

router.get('/messages', function(req, res) {
  db.Message.findAll({ include: [ db.User ] }).then(function(messages) {
    res.status(200).json(messages);
  });
});

router.post('/messages', function(req, res) {
  var accessToken = req.body.accessToken;
  var text = req.body.text;
  utils.createMessage(accessToken, text, function(err, message) {
    if (err || !message) {
      res.status(401).send(err);
    }
    res.status(200).json(message);
  });
});


module.exports = router;
