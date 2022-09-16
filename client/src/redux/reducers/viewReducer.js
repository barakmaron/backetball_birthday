import ACTIONS from "../actions/actionsConstants/ViewActionConstants";

const initState = {
    failed: false,
    successful: false,
    message: ""
};

const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case ACTIONS.FAILED: {
            return { successful: false, failed: true, message: payload };
        }
        case ACTIONS.SUCCESSFUL: {
            return { successful: true, failed: false, message: payload };
        }
        case ACTIONS.INIT: {
            return { ...initState };
        }
        default: {
            return initState;
        }
    }
};

export default reducer;