import express from 'express';
import { createEvent, getAllEvents, getOneEvent, updateEvent, deleteEvent, uploadImage, getImageByEventId } from '../controllers/eventController.js';

const router = express.Router();

// Create a new event
router.post('/', createEvent);

//Upload Image
router.post('/upload', uploadImage)

//Get Image
router.get('/get-images/:id', getImageByEventId);

// Get all events
router.post('/get', getAllEvents);

// Get a single event by ID
router.get('/:id', getOneEvent);

// Update an event by ID
router.put('/update/:id', updateEvent);

// Delete an event by ID
router.delete('/:id', deleteEvent);

export default router;
