import User from '../models/userModel.js'
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';


const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

export const getUsers = async ( req, res ) => {
    const users = await User.find({}, { password: false }).sort({});
    res.json(users);
}

// find users with sports
export const getSports = async ( req, res ) => {
    const id = req.params.id
    console.log(id)
    const users = await User.find(
        {$and: [{categories: 'sports'}, {_id: {$ne: id}}]}
    ).sort({});
    res.json(users);
}

// find users with movies
export const getMovies = async ( req, res ) => {
    const id = req.params.id
    console.log(id)
    const users = await User.find(
        {$and: [{categories: 'movies'}, {_id: {$ne: id}}]}
    ).sort({});
    res.json(users);
}


// find users with music
export const getMusic = async ( req, res ) => {
    const id = req.params.id
    console.log(id)
    const users = await User.find(
        {$and: [{categories: 'music'}, {_id: {$ne: id}}]}
    ).sort({});
    res.json(users);
}



export const getUsers2 = async ( req, res ) => {
    const users = await User.findOne({email}, { password: false }).sort({});
    res.json(users);
}



//controller functions
//login user
export const loginUser = async (req,res) => {
    const {email, password} = req.body

    try {
        
        const user = await User.login(email, password)

        //create token
        const token = createToken(user._id)
 
        res.status(200).json({_id:user._id, name: `${user.firstName} ${user.lastName}`, email: user.email, firstName: user.firstName, lastName: user.lastName, image: user.image, token: token, categories: user.categories, id: user._id})

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//signup user
export const signupUser = async (req,res) => {
    const email = req.body.email;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const categories = req.body.categories;
    const image = req.body.image;
    
    // const {email, password, firstName, lastName, categories} = req.body
    // const {image} = req.file;

    try {
        const user = await User.signup(email, password, firstName, lastName, categories, image)

        //create token
        const token = createToken(user._id)

        res.status(200).json({email, token, firstName, lastName, categories, image})

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
