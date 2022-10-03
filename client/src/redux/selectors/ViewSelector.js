const getReducer = state => state.viewReducer;
export const getFailed = state => getReducer(state).failed;
export const getSuccessful = state => getReducer(state).successful;
export const getMessage = state => getReducer(state).message;