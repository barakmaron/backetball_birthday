import ACTIONS from "./actionsConstants/ViewActionConstants";

export const successfulAction = (message) => ({
    type: ACTIONS.SUCCESSFUL,
    payload: message
});

export const failedAction = (message) => ({
    type: ACTIONS.FAILED,
    payload: message
});

const initAction = () => ({
    type: ACTIONS.INIT
});

export const InitErrorSuccessAction = () => {
    return async (dispatch) => {
        dispatch(initAction());
    };
};