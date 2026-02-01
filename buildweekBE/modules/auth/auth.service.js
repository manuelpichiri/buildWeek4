const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserSchema = require("../user/user.schema.js");
const UserNotFoundException = require("../../exceptions/user/UserNotFoundException.js");
const EmailOrPasswordNotValidException = require("../../exceptions/auth/EmailOrPasswordNotValidException.js");

const login = async (body) => {
  const { email, password } = body;
  const user = await UserSchema.findOne({ email });
  if (!user) {
    throw new UserNotFoundException()
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new EmailOrPasswordNotValidException()
  }

  const token = jwt.sign(
    {
      id: user._id,
      name: user.name,
      surname: user.surname,
      email: user.email,
      avatar: user.avatar,
      jobTitle: user.jobTitle
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    },
  );
  return { token };
};
module.exports = {
  login,
};
