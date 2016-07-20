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
  }
  //TODO: Add more useful methods that will be used many times
    //add_to_db, fetch_from_db...
};
