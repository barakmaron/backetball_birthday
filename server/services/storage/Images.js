import { ImagesModel } from "../../db/models/index.js";

async function GetAllImages() {
    try {
        return await ImagesModel.findAll();
    } catch (err) {
        throw err;
    }
}

async function AddImage(alt, image_path) {
    try {
        return await ImagesModel.create({
            Location: image_path,
            Alt: alt
        });
    } catch (err) {
        throw err;
    }
}


async function DeleteImage(id) {
    try {
        return await ImagesModel.destroy({
            where: {
                id: id
            }
        });
    } catch (err) {
        throw err;
    }
}

async function EditImageAlt(id, alt) {
    try {
        return await ImagesModel.update({
            Alt: alt
        }, {
            where: {
                id: id
            }
        });
    } catch (err) {
        throw err;
    }
}

const ImagesDB = {
    GetAllImages,
    AddImage,
    DeleteImage,
    EditImageAlt
};

export default ImagesDB;