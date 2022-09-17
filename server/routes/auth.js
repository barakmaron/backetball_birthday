import express from 'express';
import AuthController from '../controllers/AuthController.js';
import { Validator } from 'express-json-validator-middleware';
import ValidationSchemas from '../validationSchemas/index.js';

const { validate } = new Validator();

const router = express.Router();

router.post('/login', validate({
    body: ValidationSchemas.UserSchemas.Login
}), AuthController.Login);
router.post('/token', AuthController.RefreshToken);

export default router;