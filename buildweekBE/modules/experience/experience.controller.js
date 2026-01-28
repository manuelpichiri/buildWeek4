const experienceService = require("./experience.service");

const getUserExperiences = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const { page = 1, pageSize = 3 } = req.query;
    const { totalExperience, totalPages, experiences } =
      await experienceService.getExperiencesByUser(userId, page, pageSize);
    if (experiences.length === 0) {
      return res.status(404).json({
        statusCode: 404,
        message: "this profile has not experiences",
      });
    }
    res.status(200).send({
      statusCode: 200,
      page: Number(page),
      pageSize: Number(pageSize),
      totalPages: Number(totalPages),
      totalExperience: Number(totalExperience),
      experiences,
    });
  } catch (error) {
    next(error);
  }
};

const getExperienceByLogged = async (req, res, next) => {
  try {
    const userLogged = req.user._id;

    const experiences =
      await experienceService.getExperienceByUserLogged(userLogged);
    res.status(200).json({
      experiences,
      statusCode: 200,
    });
  } catch (error) {
    next(error);
  }
};

const createExperienceLogged = async (req, res, next) => {
  try {
  const body= req.body
    const idUserLogged = req.user.id;
    body.user = idUserLogged;
    const newExperience = await experienceService.createExperienceUserLogged(
   idUserLogged,
   req.body
    );
    res.status(201).json({
      newExperience,
      statusCode: 201,
    });
  } catch (error) {
    next(error);
  }
};

const updateExperienceLogged = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const { expId } = req.params;
    const { body } = req;
    const update = await experienceService.updateExperienceByUserLogged(
      expId,
      userId,
      body,
    );
    res.status(200).json({
      statusCode: 200,
      update,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUserExperiences,
  getExperienceByLogged,
  createExperienceLogged,
  updateExperienceLogged,
};
