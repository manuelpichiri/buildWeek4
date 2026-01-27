const mongoose = require("mongoose");
const HttpException = require("../../exceptions/index");

const errorHandler = (err, req, res, next) => {
  if (err instanceof HttpException) {
    return res.status(err.statusCode).json({
      statusCode: err.statusCode,
      message: err.message,
      error: err.error,
    });
  }
  if (err instanceof mongoose.Error.ValidationError) {
    //validationError crea un oggetto con tutti i campi sbagliati
    const errors = Object.values(err.errors) //trasformo in array l'oggetto con gli errori
      .map((e) => ({
        field: e.path,
        message: e.message,
      }));
    return res.status(400).json({
      statusCode: 400,
      message:
        "Mongoose: one of more passed or required props failed the validation",
      errors: errors,
    });
  }
  if (err instanceof mongoose.Error.CastError) {
    return res.status(400).json({
      statusCode: 400,
      message: "Mongoose error: objectId invalid or malformed",
      error: err.error,
    });
  }
  if (err instanceof mongoose.Error.DocumentNotFoundError) {
    return res.status(404).json({
      statusCode: 404,
      message: "Mongoose error: Document not found",
      error: err.error,
    });
  }
  res.status(500).json({
    status: "error",
    message: "Internal Server Error",
    error:
      "An internal server error occurred.Please try again later, if the problem persists contact the developer  ",
      stack:err.stack
  });
};

module.exports = errorHandler;
