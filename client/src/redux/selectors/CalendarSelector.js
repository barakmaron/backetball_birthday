const getReducer = state => state.calendarReducer;
export const getMonth = state => getReducer(state).month;
export const getYear = state => getReducer(state).year;