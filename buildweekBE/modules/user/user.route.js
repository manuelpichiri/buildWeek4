const express= require ('express')
const router= express.Router()
const userController= require ('./user.controller')

router.get("/profile",userController.getAllUser)
router.get("/me",userController.getUserId)
router.post("/profile",userController.createUser)
router.patch("/:id",userController.updateUser)

module.exports=router