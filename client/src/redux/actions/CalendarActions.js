import ACTIONS from "./actionsConstats/CalendarActionsConstats";

const IncrementMonth = () => ({
    type: ACTIONS.INCREMENT
});

export const incrementMonthAction = () => {
    return dispatch => {
        dispatch(IncrementMonth());
    }
};

const DecrementMonth = () => ({
    type: ACTIONS.DECREMENT
});

export const decrementMonthAction = () => {
    return dispatch => {
        dispatch(DecrementMonth());
    }
};