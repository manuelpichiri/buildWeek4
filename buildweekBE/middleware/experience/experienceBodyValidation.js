const experienceValidation = (req, res, next) => {
  const errors = [];

  const { role, company, startDate, endDate, description, area, user } =
    req.body;

  if (typeof role !== "string") {
    errors.push("Role must be a string");
  }
  if (typeof company !== "string") {
    errors.push("Company must be a string");
  }
  if (startDate instanceof Date && !isNaN(startDate.valueOf())) {
    errors.push("Data must be valid");
  }
  if (endDate instanceof Date && !isNaN(endDate.valueOf())) {
    errors.push("Data must be valid");
  }
  if (typeof description !== "string") {
    errors.push("description must be a string");
  }
  if (typeof area !== "string") {
    errors.push("area must be a string");
  }
  if (user && !/^[0-9a-fA-F]{24}$/.test(user)) {
    // controllo se lo user ha un id composto da 24 caratteri esadecimali
    errors.push("author must be a valid mongodb objectId string");
  }
  if (errors.length > 0) {
    res.status(400).send({ errors });
  } else {
    next();
  }
};
module.exports = experienceValidation;
