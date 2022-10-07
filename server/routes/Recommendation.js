import express from 'express';
import RecommendationController from '../controllers/RecommendationController.js';
import ValidationSchemas from '../validationSchemas/index.js';
import UploadImageMiddleware from '../middleware/UploadImageMiddleware.js';
import AuthenticateToken from '../middleware/AuthMiddleware.js';
import { Validator } from 'express-json-validator-middleware';

const { validate } = new Validator();

const router = express.Router();

router.get('/', RecommendationController.GetAll);
router.post('/', 
    AuthenticateToken,    
    UploadImageMiddleware, 
    validate({
        body: ValidationSchemas.RecommendationSchema.NewRecommendation
    }), RecommendationController.AddRecommendation);
router.delete('/:id', AuthenticateToken, RecommendationController.DeleteRecommendation);
router.patch('/:id', AuthenticateToken, RecommendationController.UpdateText);

export default router;