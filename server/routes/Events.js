import express from 'express';
import EventsController from '../controllers/EventsController.js';

const router = express.Router();

router.get('/:month/:year', EventsController.GetEvents);
router.post('/:date', EventsController.AddEvent);
router.delete('/:id', EventsController.DeleteEvent);

export default router;