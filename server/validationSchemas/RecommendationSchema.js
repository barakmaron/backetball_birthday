const NewRecommendation = {
    type: 'object',
    required: ["Name", "Text", "Rating"],
    properties: {
        name: {
            type: "string",
            minLength: 3
        },
        text: {
            type: "string",
            minLength: 3
        },
        rating: {
            type: "string"
        }
    }
};

const RecommendationSchema = {
    NewRecommendation
};

export default RecommendationSchema;