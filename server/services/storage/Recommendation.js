import { RecommendationModal } from '../../db/models/index.js';

async function GetAll() {
    return await RecommendationModal.findAll();
}

async function AddRecommendation(Name, Image, Text, Rating){
    return await RecommendationModal.create({
        Name,
        Image,
        Text,
        Rating
    });
}

async function DeleteRecommendation(id) {
    return await RecommendationModal.destroy({
        where: {
            id
        }
    });
}

async function Update(id, recommendation) {
    return await RecommendationModal.update(recommendation, {
        where: {
            id
        }
    });
}

const RecommendationDB = {
    GetAll,
    AddRecommendation,
    DeleteRecommendation,
    Update
};

export default RecommendationDB;