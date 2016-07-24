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

module.exports.postMessage = (text, accessToken) => {
  var url = `${baseUrl}/messages`;
  var message = {
    text: text,
    accessToken: accessToken
  };

  var jsonText = JSON.stringify(message);
  var fetchOpts = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: jsonText
  };

  return fetch(url, fetchOpts)
    .then((response) => response.json() )
    .then((json) => json )
    .catch((err) =>  err );
};
