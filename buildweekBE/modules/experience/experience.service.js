const ExperienceSchema = require("./experience.schema");

const getExperiencesByUser = async (userId,page, pageSize) => {
  const experiences = await ExperienceSchema.find({ user: userId })
    .limit(pageSize)
    .skip((page - 1) * pageSize);

  const totalExperience = await ExperienceSchema.countDocuments({ user: userId });
  const totalPages = Math.ceil(totalExperience / pageSize);

  return {
    totalExperience,
    totalPages,
    experiences,
  };
};

const getExperienceByUserLogged = async (userId) => {
  return await ExperienceSchema.find({ user: userId });
};

const createExperienceUserLogged= async(userId,body)=>{
  const newExperience= new ExperienceSchema({
    ...body,
    user:userId
  })
  return await newExperience.save()
}

const updateExperienceByUserLogged = async (expId, userId, body) => {
  return await ExperienceSchema.findOneAndUpdate(
    { _id: expId, user: userId },
    body,
    { new: true },
  );
};

module.exports = {
  getExperiencesByUser,
  getExperienceByUserLogged,
  createExperienceUserLogged,
  updateExperienceByUserLogged,
};
