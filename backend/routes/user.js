import express from 'express'
import { signupUser, loginUser, updateProfile, getUsers, getMovies, getSports, getMusic } from '../controller/userController.js';
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

//
router.get('/getMovies/:id', getMovies)
router.get('/getSports/:id', getSports)
router.get('/getMusic/:id', getMusic)

router.patch('/signup/:id', updateProfile)


router.get('/all-users', getUsers)

export default router;

