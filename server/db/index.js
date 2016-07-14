var mariasql = require('mariasql');
var Sequelize = require('sequelize');

var db = new Sequelize('zestydb', 'root', null, {
  dialect: 'mariadb'
});


