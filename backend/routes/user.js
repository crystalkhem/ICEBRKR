import express from 'express'
import { signupUser, loginUser, updateProfile, getUsers, getMovies, getSports, getMusic } from '../controller/userController.js';
const router = express.Router()

//login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

//
router.get('/getMovies/:id', getMovies)
router.get('/getSports/:id', getSports)
router.get('/getMusic/:id', getMusic)

router.patch('/:id/edit', updateProfile)


router.get('/all-users', getUsers)

export default router;

