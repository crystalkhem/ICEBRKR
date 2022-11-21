import express from 'express'
import { signupUser, loginUser, updateProfile, getUsers } from '../controller/userController.js';
const router = express.Router()
import multer from 'multer';


const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./frontend/public/uploads/");
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
})

const upload = multer({ storage: storage})


//login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)


router.patch('/signup/:id', updateProfile)


router.get('/all-users', getUsers)

export default router;

