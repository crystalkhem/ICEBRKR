const express = require('express')
const router = express.Router()
const {createEvent, getEvents} = require('../controller/eventController')

//post route for creating an event
router.post('/', createEvent)
router.get('/', getEvents)

module.exports = router