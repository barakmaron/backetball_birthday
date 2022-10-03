import ImagesService from '../services/ImagesService.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function GetImages(req, res) {
    try {
        const images = await ImagesService.GetImages();
        return res.status(200).json({
            images
        });
    } catch (err) {
        throw err;
    }
}

async function GetImage(req, res) {
    try {
        const { file_name } = req.params;   
        res.setHeader('content-type', "image/jpeg");     
        return res.sendFile(path.join(__dirname, `../Images/${file_name}`));
    } catch (err) {
        throw err;
    }
}

async function AddImage(req, res) {
    try {
        const { alt } = req.body;
        const image_path = req.file.filename;
        const add_image_to_db = await ImagesService.AddImage(alt, image_path);
        return res.status(200).json({
            add_image_to_db
        })
    } catch (err) {
        throw err;
    }
}

async function ChangeAltOfImage(req, res) {
    try {
        const { id } = req.params;
        const { alt } = req.body;
        await ImagesService.EditImageAlt(id, alt);
        return res.status(200).json({});
    } catch (err) {
        throw err;
    }
}

async function DeleteImage(req, res) {
    try {
        const { id } = req.params;
        await ImagesService.DeleteImage(id);
        return res.status(200).json({});
    } catch (err) {
        throw err;
    }
}

const ImagesController = {
    GetImages,
    GetImage,
    AddImage,
    ChangeAltOfImage,
    DeleteImage
};

export default ImagesController;