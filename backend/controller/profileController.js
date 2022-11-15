import Events from '../models/profileModel.js'


// get all events
export const getProfiles = async (req,res) => {
    const events = await Events.find({}).sort({createdAt: -1})

    res.status(200).json(events)
}

export const createProfile = async (req,res) => {
    const {name, age, major, bio} = req.body
    
    try {
        const event = await Events.create({name, age, major, bio})
        res.status(200).json(event)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}



