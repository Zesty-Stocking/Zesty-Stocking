var express = require('express');
var bodyParser = require('body-parser');
var db = require('../db');
var Sequelize = require('sequelize');

module.exports = {
  find_or_create: function(username, callback) {
    db.User.find( {where: {username: username}} )
      .then(function(found) {
      if(found) {
        res.send(found);
      } else {
        var user = db.User.create({
          username: req.body.username,
          name: req.body.name,
          location: req.body.location || null,
          avatarUrl: req.body.avatarUrl
        }).then(function(user) {
          if(error)
            res.send(error);
          callback(user);
        });
  },
  fetch_from_db: function(entry, req, res) {
    db.entry.findAll().then(function(entry) {
      res.json(entry);
    });
  },

  //TODO: Add more useful methods that will be used many times
    //fetch_from_db...
};
