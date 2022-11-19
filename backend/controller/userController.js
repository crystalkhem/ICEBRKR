import User from '../models/userModel.js'
import jwt from 'jsonwebtoken';

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

//controller functions
//login user
export const loginUser = async (req,res) => {
    const {email, password} = req.body

    try {
        
        const user = await User.login(email, password)

        //create token
        const token = createToken(user._id)
 
        res.status(200).json({_id:user._id, name: `${user.firstName} ${user.lastName}`, email: user.email, firstName: user.firstName, lastName: user.lastName, token: token})

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//signup user
export const signupUser = async (req,res) => {
    const {email, password, firstName, lastName} = req.body

    try {
        const user = await User.signup(email, password, firstName, lastName)

        //create token
        const token = createToken(user._id)

        res.status(200).json({email, token, firstName, lastName})

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// export const registerUser = async (req,res) => {
//     const {email, password, } = req.body
    
//     try {
//         const user = await User.create({email, password, categories})
//         res.status(200).json(user)
//     } catch (error) {
//         res.status(400).json({error: error.message})
//     }
// }


// module.exports = { loginUser, signupUser, registerUser }