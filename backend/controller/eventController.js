const express = require('express')
const Event = require('../models/eventModel')

const createEvent = async (req,res) => {
    const {name, date, time, description, category} = req.body
    
    try {
        const event = await Event.create({name, date, time, description, category})
        res.status(200).json(event)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = createEvent