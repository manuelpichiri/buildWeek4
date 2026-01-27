const express = require('express')
const router = express.Router()
const experienceController= require('./experience.controller')

router.get("/:userId/experiences",experienceController.getUserExperience)




module.exports=router