import ACTIONS from "../actions/actionsConstants/UserActionsConstants";

const initSate = {
    logged_in: false
};

const reducer = (state = initSate, action) => {
    const { type, payload } = action;
    switch(type) {
        case ACTIONS.LOGIN: {
            return { logged_in: true };
        }
        case ACTIONS.LOGOUT: {
            return { logged_in: false };
        }
        default: {
            return state;
        }
    }
};

export default reducer;