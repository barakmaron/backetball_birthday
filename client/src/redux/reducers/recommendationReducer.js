import ACTIONS from "../actions/actionsConstants/RecommendationActionsConstants";

const initState = {
    recommendations: []
};

const reducer = (state = initState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ACTIONS.GET_RECOMMENDATIONS: {
            return { ...state, recommendations: payload };
        }
        case ACTIONS.ADD_RECOMMENDATION: {
            return { ...state, recommendations: [ ...state.recommendations, payload ]};
        }
        case ACTIONS.UPDATE_RECOMMENDATION: {
            const { id = undefined, recommendation } = payload;
            const filter = state.recommendations.filter(recommendation => recommendation.id !== id);
            return { ...state, recommendations: [ ...filter, recommendation]}
        }
        case ACTIONS.DELETE_RECOMMENDATION: {
            const filter = state.recommendations.filter(recommendation => recommendation.id !== payload);
            return { ...state, recommendations: filter };
        }
        case ACTIONS.PATCH_RECOMMENDATION: {
            const found_recommendation = state.recommendations.find(recommendation => recommendation.id === payload.id);
            for(const key in payload.props)
                found_recommendation[key] = payload.props[key];
            const filter = state.recommendations.filter(recommendation => recommendation.id !== payload.id);
            return { ...state, recommendations: [ ...filter, found_recommendation ]}
        }
        default: {
            return state;
        }
    }
};

export default reducer;