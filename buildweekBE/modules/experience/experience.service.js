const ExperienceSchema = require("./experience.schema");

const getExperienceByUser = async (page, pageSize, userId) => {
  const experiences = await ExperienceSchema.find({ user: userId })
    .limit(pageSize)
    .skip((page - 1) * pageSize);

  const totalExperience = await PostSchema.countDocuments({ user: userId });
  const totalPages = Math.ceil(totalExperience / pageSize);

  return {
    totalExperience,
    totalPages,
    experiences,
  };
};

module.exports = {
  getExperienceByUser,
};
