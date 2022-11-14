import Events from '../models/eventModel.js'


// get all events
export const getEvents = async (req,res) => {
    const events = await Events.find({}).sort({createdAt: -1})

    res.status(200).json(events)
}

export const createEvent = async (req,res) => {
    const {name, date, time, description, category} = req.body
    
    try {
        const event = await Events.create({name, date, time, description, category})
        res.status(200).json(event)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}




// module.exports = {createEvent, getEvents}