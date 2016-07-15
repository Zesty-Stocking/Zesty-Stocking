var express = require('express');

var router = express.Router();

// USER-FACING ROUTES ======================================

// catch-all route for client-side routing
router.get('*', function(req, res) {
  res.sendFile('/index.html');
});

module.exports = router;