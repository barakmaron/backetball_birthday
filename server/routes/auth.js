import express from 'express';
import AuthController from '../controllers/AuthController.js';
import { Validator } from 'express-json-validator-middleware';
import ValidationSchemas from '../validationSchemas/index.js';
import AuthenticateToken from '../middleware/AuthMiddleware.js';

const { validate } = new Validator();

const router = express.Router();

router.post('/login', validate({
    body: ValidationSchemas.UserSchemas.Login
}), AuthController.Login);
router.get('/token', AuthenticateToken, AuthController.CheckToken);

export default router;