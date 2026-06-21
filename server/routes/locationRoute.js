import express, { Router } from 'express';
import locationController from '../controllers/locationController.js';

const locationRouter = express.Router();
locationRouter.get('/locations', locationController.getLocations);
locationRouter.get('/locations/:id', locationController.getLocationById);

export default locationRouter;
