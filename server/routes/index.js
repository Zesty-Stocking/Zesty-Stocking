var express = require('express');

var router = express.Router();

var db = require('../db');

// USER-FACING ROUTES ======================================

// catch-all route for client-side routing
router.get('/db', function(req, res) {
  console.log('inside db route');
  db.User.findAll().then(function(users) {
    res.json(users);
  });
});

module.exports = router;