var jwt = require('jwt-simple');

exports.auth = function(secret) {
	return function(handShakeData, callback) {
		var token = handShakeData.query.token;

		try {
			handShakeData.decoded = jwt.decode(token, secret);
			callback(null, true);
		} catch (err) {
			callback(err, false);
		}
	}
}