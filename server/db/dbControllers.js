var express = require('express');
var bodyParser = require('body-parser');
var db = require('../db');
var Sequelize = require('sequelize');


module.exports = {

  findOrCreateUser: function(user, query, callback) {
    return db.User.find( {where: query } )
    .then(function(found) {
      if (found) {
        // update the accessToken for the user
        if (!query['accessToken']) {
          found.update({ accessToken: user.accessToken })
          .then(function() {
            callback(null, found);
          });
        } else {
          callback(null, found);
        }
      } else {
        if (query['accessToken']) {
        // we couldn't find any user with that accessToken, so the accessToken is invalid
          callback(null, {});
        } else { // we couldn't find an existing user, so let's create one
          db.User.create({
            username: user.username,
            name: user.displayName,
            location: user._json.location,
            avatarUrl: user._json.avatar_url,
            accessToken: user.accessToken
          }).then(function(user) {
            callback(null, user);
          }).catch(function(error) {
            console.error(error);
          });
        }
      }
    });
  },

  createMessage: function(accessToken, text, callback) {
    // look up the user by accessToken to get his UserId
    // if user is found, create message in db using that UserId
    module.exports.findOrCreateUser({}, { accessToken: accessToken }, function(err, user) {
      if (err) {
        return callback(err);
      }
      if (!user.id) {
        return callback({});
      }
      return db.Message.create({
        UserId: user.id,
        text: text
      }).then(function(message) {
        callback(message);
      }).catch(function(error) {
        console.error(error);
      });
    });
  }
};
