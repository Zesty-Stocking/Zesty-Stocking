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
    user.username = req.body.username;
    user.name  = req.body.name;
    user.location = req.body.loction;
    user.avatarUrl = req.body.avatarUrl;

    db.User.findById(req.params.username, function(err, found) {
      if(err)
        res.send(err);
      if(found)
        res.send('User already exsists!');
    })

    var user = new User();
    user.save(function(err) {
      if(err)
        res.send(err);
      //What should we send back upon creation?
      res.json(user);
    });

    .get(function(req, res) {
      db.User.findAll().then(function(users) {
        res.json(users);
      });
    });

  });

  router.route('/users/:user_id')
    .get(function(req, res) {
      db.User.findById(req.params.user_id, function(err, user) {
        if(err)
          res.send(err);
        res.json(user);
      })

      .put(function(req, res) {
        db.User.findById(req.params.user_id, function(err, user) {
          if(err)
            res.send(err);
            //What would we want to be letting the user change here?
          user.something = req.body.something;

          user.save(function(err) {
            if(err)
              res.send(err);

            res.json({ message: 'User updated!' })
          })
        })
      })
    });

router.route('/messages')

  .post(function(req, res) {
    var message = new Message();

    message.text = req.body.text;
    //do we need to set the likes to 0 here or did that already happen in the model upon creation?

    message.save(function(err) {
      if(err)
        res.send(err);

      res.json(message);
    });

  .get(function(req, res) {
    db.Message.findAll.then(function(messages) {
      res.json(messages);
    });
  });

});
