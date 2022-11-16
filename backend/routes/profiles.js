import express from 'express';
const router = express.Router()
import { createProfile, getMyProfile, getProfiles } from '../controller/profileController.js'

//post route for creating an event
router.post('/', createProfile)

router.get('/', getProfiles)

// get user's profile
router.get('/me', getMyProfile)

// router.get('/:id', (req, res) => {
//   res.json({msg: 'Get a single profile'})
// })

export default router;