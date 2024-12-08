const express = require('express')
const userController = require('../controllers/userController')

const router = new express.Router()
router.post('/register',userController.registerController)

//login-post
router.post('/login',userController.loginController)


module.exports = router