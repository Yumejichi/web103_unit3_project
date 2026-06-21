import express, { Router } from 'express'
import eventController from '../controllers/eventController.js'

const eventRouter = express.Router()

eventRouter.get('/events', eventController.getEvents)
eventRouter.get('/events/:locationId', eventController.getEventsByLocation)


export default eventRouter