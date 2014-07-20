var jwt = require('jwt-simple');

exports.auth = function(secret) {
	return function(handShakeData, callback) {
		try {
			var token = handShakeData.query.token;
			handShakeData.decoded = jwt.decode(token, secret);
			callback(null, true);
		} catch (err) {
			callback(err, false);
		}
	}
}
