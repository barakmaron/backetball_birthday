import express from 'express';
import { Validator } from 'express-json-validator-middleware';
import ContactController from '../controllers/ContactController.js';
import ValidationSchemas from '../validationSchemas/index.js';

const { validate } = new Validator();
const router = express.Router();

router.post('/', validate({
    body: ValidationSchemas.ContactSchema.ContactForm
}), ContactController.FormSubmit);

export default router;