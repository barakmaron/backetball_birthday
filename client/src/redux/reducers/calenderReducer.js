import moment from "moment";
import ACTIONS from "../actions/actionsConstants/CalendarActionsConstants";

const initialState = {
    month: moment().month(),
    year: moment().year()
};

const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ACTIONS.INCREMENT: {
            if(state.month === 11)
                return {  
                    year: state.year + 1,
                    month: 0
                }
            return { 
                ...state, 
                month: state.month + 1 
            };
        }
        case ACTIONS.DECREMENT: {
            if(state.month !== 0)
                return { 
                    ...state, 
                    month: state.month - 1 
                };
            return { 
                year: state.year - 1, 
                month: 11 
            };
        }
        default: {
            return { ...initialState };
        }
    }
}

export default reducer;