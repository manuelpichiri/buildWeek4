const express = require("express");
const router = express.Router();
const userController = require("./user.controller");
const { cloudUpload } = require("../../middleware/upload");
const userBodyValidation = require("../../middleware/user/userBodyValidation");

router.get("/profile", userController.getAllUser);

router.get("/me", userController.loggedUser);

router.post("/profile", userBodyValidation, userController.createUser);

router.post(
  "/profile/avatar",
  cloudUpload.single("avatar"),
  userController.uploadFileOnCloud,
);
router.patch("/:id", userController.updateUser);

module.exports = router;
