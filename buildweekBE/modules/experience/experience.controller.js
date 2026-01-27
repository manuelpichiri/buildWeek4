const experienceService = require("./experience.service");

const getUserExperience = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const { page = 1, pageSize = 3 } = req.query;
    const { totalExperience, totalPages, experiences } =
      await experienceService.getExperienceByUser(userId, page, pageSize);
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

module.exports = {
  getUserExperience,
};
