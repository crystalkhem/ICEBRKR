import Events from '../models/eventModel.js'
import mongoose from 'mongoose';


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

export const deleteEvent = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No such event'})
    }
  
    const event = await Events.findOneAndDelete({_id: id})
  
    if(!event) {
      return res.status(400).json({error: 'No such event'})
    }
  
    res.status(200).json(event)
  }




// module.exports = {createEvent, getEvents}