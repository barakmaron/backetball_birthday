import ImagesService from "../services/ImagesService.js";
import RecommendationService from "../services/RecommendationService.js";

async function GetAll(req, res) {
    try {
        const recommendations = await RecommendationService.GetAll();
        return res.status(200).json({
            recommendations
        });
    } catch (err) {
        throw err;
    }
}

async function AddRecommendation(req, res) {
    try {
        const { Name, Text, Rating } = req.body;
        const { path, filename } = req.file;
        const image_ref = await ImagesService.ResizeAndStoreImage(path, filename);
        const recommendation = await RecommendationService.AddRecommendation(Name, image_ref, Text, Rating);
        return res.status(201).json({
            recommendation
        });
    } catch (err) {
        throw err;
    }
}

async function DeleteRecommendation(req, res) {
    try {
        const { id } = req.params;
        await RecommendationService.DeleteRecommendation(id);
        return res.status(204).json();
    } catch (err) {
        throw err;
    }
}

async function UpdateText(req, res) {
    try {
        const { id } = req.params;
        const { text } = req.body;
        await RecommendationService.UpdateText(id, text);
        return res.status(204).json();
    } catch(err) {
        throw err;
    }
}

const RecommendationController = {
    GetAll,
    AddRecommendation,
    DeleteRecommendation,
    UpdateText
};

export default RecommendationController;