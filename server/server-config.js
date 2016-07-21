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

      // TODO: for mobile, instead of returning the user, return the accessToken
      // so that the mobile client can send the server the accessToken with every
      // request. ensureAuthenticated would then need to check against that
      // accessToken before proceeding to a protected route

      // server should redirect to myapp://dummyurl?accessToken= etc
      // client needs to check for that url, if match then
      // grab the access token, dump the web view, and
      // persist the accessToken in state
      // subsequent requests to server will supply accessToken

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
              avatarUrl: profile._json.avatar_url,
              accessToken: accessToken
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
