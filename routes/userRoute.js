const express=require('express')
const { postUser, postEmailConfirmation, signIn, forgetPassword, resetPassword, userList, userDetails, signOut, requireAdmin, requireUser } = require('../controller/userController')
const { userValidation, validation, passwordValidation } = require('../validation/validator')
const router=express.Router()


router.post('/register',userValidation,validation,postUser)
router.put('/confirmation/:token',postEmailConfirmation)
router.post('/signin',signIn)
router.post('/forgetpassword',forgetPassword)
router.put('/resetpassword/:token',passwordValidation,validation,resetPassword)
router.get('/userlist',requireAdmin,userList)
router.get('/userdetail/:id',requireUser,userDetails)
router.post('/signout',signOut)


module.exports=router