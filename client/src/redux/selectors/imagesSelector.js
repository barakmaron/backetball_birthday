const getReducer = state => state.imageReducer;
export const getImages = state => getReducer(state).images;