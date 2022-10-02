import express from 'express';
import EventsController from '../controllers/EventsController.js';
import { Validator } from 'express-json-validator-middleware';
import ValidationSchemas from '../validationSchemas/index.js';
import AuthenticateToken from '../middleware/AuthMiddleware.js';

const { validate } = new Validator();
const router = express.Router();

router.get('/:month/:year', EventsController.GetEvents);
router.get('/:id', AuthenticateToken, EventsController.GetEvent);
router.post('/:date', validate({
    body: ValidationSchemas.EventsSchemas.NewEvent
}), EventsController.AddEvent);
router.delete('/:id', AuthenticateToken, EventsController.DeleteEvent);

export default router;