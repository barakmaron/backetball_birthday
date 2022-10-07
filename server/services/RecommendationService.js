import RecommendationDB from "./storage/Recommendation.js";

async function GetAll() {
    try {
        return await RecommendationDB.GetAll();
    } catch (err) {
        throw err;
    }
}

async function AddRecommendation(Name, Image, Text, Rating) {
    try {
        return await RecommendationDB.AddRecommendation(Name, Image, Text, Rating);
    } catch (err) {
        throw err;
    }
}

async function DeleteRecommendation(id) {
    try {
        return await RecommendationDB.DeleteRecommendation(id);
    } catch (err) {
        throw err;
    }
}

async function UpdateText(id, text) {
    try {
        return await RecommendationDB.Update(id, {
            Text: text
        });
    } catch (err) {
        throw err;
    }
}

const RecommendationService = {
    GetAll,
    AddRecommendation,
    DeleteRecommendation,
    UpdateText
};

export default RecommendationService;