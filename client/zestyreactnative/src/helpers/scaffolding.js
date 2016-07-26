// Some helper functions to use while building out the application

module.exports.border = color => {
  return {
    borderColor: color,
    borderWidth: 2
  };
};

/**
 * Host & Local IP:
 * If you are writing for Android, then you'll need to add your computer's
 * local IP address here. It will change when you go to another WiFi network.
 * http://lifehacker.com/5833108/how-to-find-your-local-and-external-ip-address
 */

// Use this if doing development.
// If doing production, comment out the line regarding `myLocalIp`
module.exports.myLocalIp = null;

// If doing production: uncomment this line
// module.exports.prodHost = 'https://hashitout.herokuapp.com';
