/*
 *  This code comes from webrtc.io-demo: https://github.com/webRTC/webrtc.io-demo   
 */
var fs = require('fs');

var builder = module.exports = function(callback) {
  fs.readFile(__dirname + '/webrtc.io.js', function(err, content) {
    if (err) {
      return callback(err);
    }

    return callback(null, content);
  });
};
