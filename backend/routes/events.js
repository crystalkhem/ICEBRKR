import express from 'express';
const router = express.Router()
// const {createEvent, getEvents} = require('../controller/eventController')
import {createEvent, deleteEvent, getEvents} from '../controller/eventController.js'

//post route for creating an event
router.post('/', createEvent)
router.get('/', getEvents)
router.get('/:id', (req, res) => {
  res.json({msg: 'Get a single event'})
})

router.delete('/:id', deleteEvent)

export default router;