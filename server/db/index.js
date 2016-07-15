var mariasql = require('mariasql');
var Sequelize = require('sequelize');

var db = new Sequelize('zestydb', 'root', null, {
  dialect: 'mariadb'
});

// DEFINE MODELS =================================

var User = db.define('User', {
  username: Sequelize.STRING,
  name: Sequelize.STRING,
  location: Sequelize.STRING,
  avatarUrl: Sequelize.STRING
  /*
  followers: ,
  following: ,
  repos: ,
  githubUrl: ,
  bio: ,
  starred: ,
  organizations: ,
  gists: ,
  company: 
   */

});

var Message = db.define('Message', { // user-facing name: 'byte'
  text: Sequelize.STRING,
  likes: Sequelize.INTEGER // user-facing name: 'groks'
  /*
  media: // images, repos, links, mentions
   */
});

Message.belongsTo(User);
User.hasMany(Message);

// create tables if they don't already exist
User.sync(
  // { force: true } // uncomment to add 'DROP TABLE IF EXISTS' before creating a new table
  );
Message.sync(
  // { force: true }
  );

exports.User = User;
exports.Message = Message;



