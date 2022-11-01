import express from 'express';
const router = express.Router()
// const {createEvent, getEvents} = require('../controller/eventController')
import {createEvent, getEvents} from '../controller/eventController.js'

import requireAuth from '../middleware/requireAuth.js'

//post route for creating an event
router.post('/', createEvent)
router.get('/', getEvents)
router.get('/:id', (req, res) => {
  res.json({msg: 'Get a single event'})
})

export default router;