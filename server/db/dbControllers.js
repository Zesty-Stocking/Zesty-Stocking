var express = require('express');
var bodyParser = require('body-parser');
var db = require('../db');
var Sequelize = require('sequelize');


module.exports = {

  find_or_create_user: function(user, callback) {
    db.User.find( {where: {username: user.username} } )
      .then(function(found) {
        if(found) {
          callback(null, found);
        } else {
          db.User.create({
            username: user.username,
            name: user.name,
            location: user.location,
            avatarUrl: user.avatarUrl
          }).then(function(err, user) {
            if(err);
              callback(err, null);
            callback(null, user);
          });
        };
      });
  }
  
};
