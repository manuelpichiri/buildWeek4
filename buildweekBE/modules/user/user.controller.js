const userService = require("./user.service");

const getAllUser = async (req, res, next) => {
  try {
    const { page = 1, pageSize = 3 } = req.query;
    const { totalUsers, totalPages, users } = await userService.getAllUsers(
      page,
      pageSize,
    );

    if (users.length === 0) {
      return res.status(404).json({
        statusCode: 404,
        message: "User not found",
      });
    }

    res.status(200).send({
      statusCode: 200,
      page: Number(page),
      pageSize: Number(pageSize),
      totalPages: Number(totalPages),
      totalUsers: Number(totalUsers),
      users,
    });
  } catch (error) {
    next(error);
  }
};
//DA CONTROLLARE!!!!
const getUserId = async (req, res, next) => {
  try {
    const  id  = req.user.id
    console.log(id)
    if (!id) {
      return res.status(400).json({
        statusCode: 400,
        message: "Invalid param",
      });
    }
    const user = await userService.geUsertById(id);
    if (!user) {
      return res.status(404).json({
        statusCode: 404,
        message: "User not found",
      });
    }
    res.status(200).json({
      statusCode: 200,
      user,
    });
  } catch (error) {
    next(error);
  }
};

const loggedUser = (req,res) => {
res. send( req.user)
}


const createUser = async (req, res, next) => {
  try {
    const { body } = req;
    const newUser = await userService.createUser(body);
    res.status(201).send({
      statusCode: 201,
      message: "user created successfully",
      newUser,
    });
  } catch (error) {
    next(error);
  }
};

const uploadFileOnCloud = async (req, res, next) => {
  try {
    const img = req.file.path
    res.status(200).json({
      img: img
    })
  } catch (error) {
    next(error)
  }
}

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { body } = req;

    if (!id) {
      return res.status(400).json({
        statusCode: 400,
        message: "invalid param",
      });
    }
    const user = await userService.updateUser(id, body);
    if (!user) {
      return res.status(404).json({
        statusCode: 404,
        message: "User not found",
      });
    }
    res.status(200).send({
      statusCode: 200,
      message: "User modified successfully",
      user,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUser,
  getUserId,
  loggedUser,
  createUser,
  uploadFileOnCloud,
  updateUser,
};
