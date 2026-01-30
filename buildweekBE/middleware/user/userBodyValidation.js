const userBodyValidation = (req, res, next) => {
  const errors = [];

  const { name, surname, email, password, experience } = req.body;

  if (typeof name !== "string") {
    errors.push("name must be a string");
  }
  if (typeof surname !== "string") {
    errors.push("surname must be a string");
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push("email must be a valid");
  }
  if (typeof password !== "string") {
    errors.push("password must be a string");
  }
  if (experience && !/^[0-9a-fA-F]{24}$/.test(experience)) {
    errors.push("experience must be a valid mongodb objectId string");
  }
  if (errors.length > 0) {
    res.status(400).send({ errors });
  } else {
    next();
  }
};

module.exports = userBodyValidation;
