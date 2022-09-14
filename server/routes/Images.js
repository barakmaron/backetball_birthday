import express from 'express';
import ImagesController from '../controllers/ImagesController.js';
import UploadImageMiddleware from '../middleware/UploadImageMiddleware.js';

const router = express.Router();

router.get('/', ImagesController.GetImages);
router.get('/:file_name', ImagesController.GetImage);
router.post('/', UploadImageMiddleware, ImagesController.AddImage);
router.patch('/:id', ImagesController.ChangeAltOfImage);
router.delete('/:id', ImagesController.DeleteImage);

export default router;