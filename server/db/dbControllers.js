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
            username: profile.username,
            name: profile.displayName,
            location: profile._json.location,
            avatarUrl: profile._json.avatar_url,
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
