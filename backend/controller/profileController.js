import Profiles from '../models/profileModel.js'
import User from '../models/userModel.js'

// get all events
export const getProfiles = async (req,res) => {
    const profiles = await Profiles.find({}).sort({createdAt: -1})

    res.status(200).json(profiles)
}

export const createProfile = async (req,res) => {
    const {name, age, major, bio} = req.body
    
    try {
        const profile = await Profiles.create({name, age, major, bio})
        res.status(200).json(profile)
    } catch (error) { 
        res.status(400).json({error: error.message})
    }
}

export const getMyProfile = async (req, res) => {
    try {
        const profile = await Profiles.findOne({ email: 'bowser@gmail.com' }).populate('user')

        if (!profile) {
            return res.status(400).json({msg: 'There is no profile for the user'})
        }

            res.json(profile)
        
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
}


