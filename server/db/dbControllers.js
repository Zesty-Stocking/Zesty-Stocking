var express = require('express');
var bodyParser = require('body-parser');
var db = require('../db');
var Sequelize = require('sequelize');


module.exports = {

  findOrCreateUser: function(user, callback) {
    db.User.find( {where: {accessToken: user.accessToken} } )
      .then(function(found) {
        if(found) {
          callback(null, found);
        } else {
          db.User.create({
            username: user.username,
            name: user.displayName,
            location: user._json.location,
            avatarUrl: user._json.avatar_url,
            accessToken: user.accessToken
          }).then(function(err, user) {
            if(err);
              callback(err, null);
            callback(null, user);
          });
        };
      });
  }

};
