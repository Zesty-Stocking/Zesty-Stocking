// Some helper functions to use while building out the application

module.exports.border = color => {
  return {
    borderColor: color,
    borderWidth: 2
  };
};

// TODO: if you are writing for Android, then you'll need to add your computer's
// local IP address here. It will change when you go to another WiFi network.
// http://lifehacker.com/5833108/how-to-find-your-local-and-external-ip-address
module.exports.myLocalIp = null;
// module.exports.prodHost = 'https://hashitout.herokuapp.com'; // comment this out if running locally