// MODULES =================================================
var express = require('express');
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');
var session = require('express-session');
var passport = require('passport');
var GitHubStrategy = require('passport-github2').Strategy;

var routes = require('./routes/index');
var api = require('./routes/api');
var auth = require('./routes/auth');

var github = require('./config/github.js');

var app = express();


// CONFIGURATION ===========================================

var db = require('./db');

app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client'));



// AUTH MIDDLEWARE =========================================

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use(new GitHubStrategy({
  clientID: github.GITHUB_CLIENT_ID,
  clientSecret: github.GITHUB_CLIENT_SECRET,
  // TODO: make dynamic based on enviroment variables
  callbackURL: 'http://localhost:4568/auth/github/callback'
},
  function(accessToken, refreshToken, profile, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {
      // Associate the GitHub profile with a user record in database,
      // and return that user
      db.User.find( {where: {username: profile.username}} )
        .then(function(found) {
          if (found) {
            console.log('existing user was found:', found);
            return done(null, found);
          } else {
            db.User.create({
              username: profile.username,
              name: profile.displayName,
              location: profile._json.location,
              avatarUrl: profile._json.avatar_url
            }).then(function(user) {
              console.log('new user created:', user);
              return done(null, user);
            });
          }
        }
      );
    });
  }
));

app.use(session({ secret: 'im bringin zesty back', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());



// ROUTES ==================================================

app.use('/', routes);
app.use('/api', api);
app.use('/auth', auth);


module.exports = app;
