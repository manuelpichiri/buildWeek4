const HttpsException = require('../index')

class UserNotFoundException extends HttpsException {
    constructor(
        statusCode = 404,
        message = 'User not found',
        error = 'The requested user does not exist'
    ) {
        super(statusCode, message, error);
    }
}

module.exports = UserNotFoundException