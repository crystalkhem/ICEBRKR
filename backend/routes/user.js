import express from 'express'
import { signupUser, loginUser, updateProfile } from '../controller/userController.js';
const router = express.Router()

//login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)


router.patch('/signup/:id', updateProfile)

export default router;

