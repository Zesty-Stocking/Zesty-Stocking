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

var github = process.env.JAWSDB_MARIA_URL // check if app is running on Heroku (prod)
  ? { 
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID, 
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET 
  }
  : require('./config/github.js');

var app = express();


// CONFIGURATION ===========================================

var db = require('./db');
var utils = require('./db/dbControllers');

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

var callbackUrl = process.env.JAWSDB_MARIA_URL // check if app is running on Heroku (prod)
  ? 'https://hashitout.herokuapp.com/auth/github/callback'
  : 'http://localhost:4568/auth/github/callback';

passport.use(new GitHubStrategy({
  clientID: github.GITHUB_CLIENT_ID,
  clientSecret: github.GITHUB_CLIENT_SECRET,
  callbackURL: callbackUrl
},
  function(accessToken, refreshToken, profile, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {
      // Associate the GitHub profile with a user record in the database (look 
      // up by accessToken), and return that user. 
      profile.accessToken = accessToken;
      var query = { username: profile.username };
      utils.findOrCreateUser(profile, query, function(err, user) {
        if (err) {
          console.error(err);
        }
        return done(null, user);
      });
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
