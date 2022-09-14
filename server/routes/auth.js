import express from 'express';
import AuthController from '../controllers/AuthController.js';

const router = express.Router();

router.post('/login', AuthController.Login);
router.post('/token', AuthController.RefreshToken);

export default router;