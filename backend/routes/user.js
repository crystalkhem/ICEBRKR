import express from 'express'
import { signupUser, loginUser, updateProfile, getUsers } from '../controller/userController.js';
const router = express.Router()

//login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)


router.patch('/:id/edit', updateProfile)


router.get('/all-users', getUsers)

export default router;

