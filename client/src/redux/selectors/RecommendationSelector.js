const getReducer = state => state.recommendationReducer;
export const getRecommendations = state => getReducer(state).recommendations;