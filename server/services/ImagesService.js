import ImagesDB from "./storage/Images.js";

async function GetImages() {
    try {
        return ImagesDB.GetAllImages();
    } catch (err) {
        throw err;
    }
}

async function AddImage(alt, image_path) {
    try {
        return ImagesDB.AddImage(alt, image_path);
    } catch (err) {
        throw err;
    }
}


async function DeleteImage(id) {
    try {
        return ImagesDB.DeleteImage(id);
    } catch (err) {
        throw err;
    }
}

async function EditImageAlt(id, alt) {
    try {
        return ImagesDB.EditImageAlt(id, alt);
    } catch (err) {
        throw err;
    }
}

const ImagesService = {
    GetImages,
    AddImage,
    DeleteImage,
    EditImageAlt
};

export default ImagesService;