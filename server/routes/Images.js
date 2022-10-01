import express from 'express';
import ImagesController from '../controllers/ImagesController.js';
import AuthenticateToken from '../middleware/AuthMiddleware.js';
import UploadImageMiddleware from '../middleware/UploadImageMiddleware.js';
import { Validator } from 'express-json-validator-middleware';
import ValidationSchemas from '../validationSchemas/index.js';

const { validate } = new Validator();

const router = express.Router();

router.get('/', ImagesController.GetImages);
router.get('/:file_name', ImagesController.GetImage);
router.post('/', 
    AuthenticateToken, 
    validate({
        body: ValidationSchemas.ImageSchemas.Upload
    }),
    UploadImageMiddleware, ImagesController.AddImage);

router.patch('/:id', 
    AuthenticateToken, 
    validate({
        body: ValidationSchemas.ImageSchemas.UpdateAlt
    }), ImagesController.ChangeAltOfImage);

router.delete('/:id', AuthenticateToken, ImagesController.DeleteImage);

export default router;