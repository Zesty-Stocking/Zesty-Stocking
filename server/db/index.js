var mariasql = require('mariasql');
var Sequelize = require('sequelize');

var options = {
  dialect: 'mariadb',
  pool: false
};

if (process.env.JAWSDB_MARIA_URL) {
  // app is running on Heroku
  var db = new Sequelize(process.env.JAWSDB_MARIA_URL, options);
} else {
  // app is running on local
  var db = new Sequelize('zestydb', 'root', 'root', options);
}

// DEFINE MODELS =================================
var User = db.define('User', {
  username: Sequelize.STRING,
  name: Sequelize.STRING,
  location: Sequelize.STRING,
  avatarUrl: Sequelize.STRING,
  accessToken: Sequelize.STRING
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
