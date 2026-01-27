const UserSchema = require("./user.schema");

const getAllUsers = async (page, pageSize) => {
  const users = await UserSchema.find()
    .limit(pageSize)
    .skip((page - 1) * pageSize);

  const totalUsers = await UserSchema.countDocuments();
  const totalPages = Math.ceil(totalUsers / pageSize);
  return {
    page,
    pageSize,
    totalUsers,
    totalPages,
    users,
  };
};

const geUsertById = async (id) => {
  const user = await UserSchema.findById(id);
  return user;
};

const createUser = async (body) => {
  const newUser = new UserSchema(body);
  return await newUser.save();
};

// MANCA CARICAMENTO IMMAGINE PROFILO

const updateUser = async (id, body) => {
  return UserSchema.findByIdAndUpdate(id, body, { new: true });
};

module.exports = {
  getAllUsers,
  geUsertById,
  createUser,
  updateUser,
};
