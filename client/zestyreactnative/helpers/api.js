const baseUrl = 'http://localhost:4568/api';

var fetchJSON = (url) => {
  return fetch(url)
    .then(function(response){
      return response.json();
    })
    .catch(function(err) {
      return err;
    });
};

module.exports.getMessages = () => {
  var url = `${baseUrl}/messages`;

  return fetch(url)
    .then(function(response){
      return response.json();
    })
    .then(function(json) {
      return json;
    })
    .catch(function(err) {
      console.log(err);
      return err;
    })
};
