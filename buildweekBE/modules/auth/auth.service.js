const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserSchema = require("../user/user.schema.js");

const login = async (body) => {
  const { email , password } = body;
  const user = await UserSchema.findOne({ email });
  if(!user){
    throw new Error('utente non trovato')
  // throw new ECCEZIONE USER NOT FOUND 404
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if(!isPasswordValid){
     throw new Error('pssw invalid');
   
    //throw new ECCEZIONE MAIL O PSSW SBAGLIATI 401
   }

  const token = jwt.sign(
    {
      id:user._id,
      name: user.name,
      surname: user.surname,
      email: user.email,
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
