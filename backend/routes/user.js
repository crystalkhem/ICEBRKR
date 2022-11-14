import express from 'express'
import { signupUser, loginUser, registerUser } from '../controller/userController.js' 
// const { signupUser, loginUser, registerUser } = require('../controller/userController')
const router = express.Router()

//login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

// post 
router.post('/register', registerUser)

export default router;