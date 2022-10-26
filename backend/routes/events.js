const express = require('express')
const router = express.Router()
const createEvent = require('../controller/eventController')

//post route for creating an event
router.post('/', createEvent)

module.exports = router