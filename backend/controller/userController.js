import User from '../models/userModel.js'
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

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


export const updateProfile = async (req, res) => {
    const { id } = req.params 

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such profile'})
    }

    const profile = await User.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!profile) {
        return res.status(404).json({error: 'no such profile'})
    }

    res.status(200).json(profile)
    }
