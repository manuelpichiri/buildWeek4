const HttpsException = require("../index")

class MissingUserId extends HttpsException {
  constructor(
    statusCode = 400,
    message = "User id not found",
    error = "The request must contain an user id"
  ) {
    super(statusCode, message, error)
  }
}

module.exports = MissingUserId