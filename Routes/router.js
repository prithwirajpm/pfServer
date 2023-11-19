const express = require('express')
const router = new express.Router()
const userController = require('../Controllers/userController')
const projectController = require('../Controllers/projectController')
const jwtMiddleware = require('../Controllers/Middleware/jwtMiddleware')

// register API
router.post('/user/register',userController.register)

// login API
router.post('/user/login', userController.login);

// add-Project
router.post('/projects/add',jwtMiddleware,projectController.addProjects)


// export router
module.exports = router
