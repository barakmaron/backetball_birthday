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

async function UpdateRecommendation(id, props) {
    try {
        return await RecommendationDB.Update(id, props);
    } catch (err) {
        throw err;
    }
}

const RecommendationService = {
    GetAll,
    AddRecommendation,
    DeleteRecommendation,
    UpdateRecommendation
};

export default RecommendationService;