var express = require('express');
var bodyParser = require('body-parser');
var db = require('../db');

var router = express.Router();

// API-FACING ROUTES ======================================


// router.get('/users', function(req, res) {
//   db.User.findAll().then(function(users) {
//     res.json(users);
//   });
// });

router.route('/users')

  .post(function(req, res) {
    var user = new User();

    user.username = req.body.username;
    user.name  = req.body.name;
    user.location = req.body.loction;
    user.avatarUrl = req.body.avatarUrl;

    user.save(function(err) {
      if(err)
        res.send(err);
      //What should we send back upon creation?
      res.json({message: 'User created!'})
    });

    .get(function(req, res) {
      User.findAll().then(function(users) {
        res.json(users); 
      })
    })

  })

module.exports = router;
