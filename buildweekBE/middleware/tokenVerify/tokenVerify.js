const jwt = require("jsonwebtoken");

const EXCLUDED_ROUTES = ["/login", "/profile"];

const tokenVerify = (req, res, next) => {
  if (EXCLUDED_ROUTES.includes(req.path)) return next();

  const token = req.header("Authorization");

  if (!token) {
    throw new Error("token invalid or missing");
  }

  try {
    const sanitizedToken = token.replace("Bearer ", "");
    req.user = jwt.verify(sanitizedToken, process.env.JWT_SECRET);

    next();
  } catch (e) {
    next(e);
  }
};

module.exports = tokenVerify;
