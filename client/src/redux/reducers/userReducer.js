import ACTIONS from "../actions/actionsConstants/UserActionsConstants";

const initSate = {
    logged_in: false
};

const reducer = (state, action) => {
    const { type, payload } = action;
    switch(type) {
        case ACTIONS.LOGIN: {
            return { logged_in: true };
        }
        default: {
            return initSate;
        }
    }
};

export default reducer;