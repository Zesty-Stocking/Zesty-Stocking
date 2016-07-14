module.exports = function(app) {
  // API ROUTES ===========================================
  

  // FRONTEND ROUTES ======================================

  // catch-all route for client-side routing
  app.get('*', function(req, res) {
    res.sendFile('./index.html');
  });

};