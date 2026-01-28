const express= require ('express')
const router= express.Router()
const userController= require ('./user.controller')

router.get("/profile",userController.getAllUser)//tutti i profili
router.get("/me",userController.loggedUser)//profilo del loggato
router.post("/profile",userController.createUser)//crea nuovo profilo
router.patch("/:id",userController.updateUser)//modifica prfilo, DA AGGIUNGERE TOKEN(posso modificare solo se mio profilo)

module.exports=router