var myLocalIp = require('./scaffolding.js').myLocalIp;

var ipAddress = myLocalIp || 'localhost';
const baseUrl = `http://${ipAddress}:4568/api`;

module.exports.getMessages = () => {
  var url = `${baseUrl}/messages`;

  return fetch(url)
    .then((response) => response.json() )
    .then((json) => json )
    .catch((err) =>  err );
};
