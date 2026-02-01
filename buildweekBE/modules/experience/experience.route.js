const express = require("express");
const router = express.Router();
const experienceController = require("./experience.controller");
const experienceBodyValidation = require("../../middleware/experience/experienceBodyValidation");

router.get("/:userId/experiences", experienceController.getUserExperiences); //tutte esperienze di un utente

router.get("/me/experiences", experienceController.getExperienceByLogged); //esperienze utente loggato

router.post(
  "/experiences",
  experienceBodyValidation,
  experienceController.createExperienceLogged,
); //nuova esperienza utente loggato

router.patch("/:expId", experienceController.updateExperienceLogged); //modifica esperienza utente loggato

module.exports = router;