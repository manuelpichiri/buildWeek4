const HttpsException = require("../index");

class EmailOrPasswordNotValidException extends HttpsException {
  constructor(
    statusCode = 401,
    message = 'Email or password not valid',
    error = 'Invalid credentials provided'
  ) {
    super(statusCode, message, error)
  }
}

module.exports = EmailOrPasswordNotValidException