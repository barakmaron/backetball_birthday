import Constants from "../../Constants";
import SendApiRequest from "../../services/ApiService";
import { getMonth, getYear } from "../selectors/CalendarSelector";
import ACTIONS from "./actionsConstants/CalendarActionsConstants";
import { failedAction, successfulAction } from "./ViewActions";

const IncrementMonth = () => ({
    type: ACTIONS.INCREMENT
});

const DecrementMonth = () => ({
    type: ACTIONS.DECREMENT
});

const GetEvents = (events) => ({
    type: ACTIONS.GET_EVENT,
    payload: events
});

export const incrementMonthAction = () => {
    return dispatch => {
        dispatch(IncrementMonth());
    };
};

export const decrementMonthAction = () => {
    return dispatch => {
        dispatch(DecrementMonth());
    };
};

export const GetEventsAction = () => {
    return async (dispatch, getState) => {
        try {
            const state = getState();
            const month = getMonth(state);
            const year = getYear(state);
            const res = await SendApiRequest(`events/${month}/${year}`);
            dispatch(GetEvents(res.events));
        } catch (err) {
            dispatch(failedAction(err.message));
        }
    };
};

const AddEvent = (date) => ({
    type: ACTIONS.ADD_EVENT,
    payload: date
});

export const AddEventAction = (form, date) => {
    return async (dispatch) => {
        try {
            dispatch(AddEvent(date));
            const res = await SendApiRequest(`events/${date}`, Constants.API_METHODS.POST, form);
            dispatch(successfulAction(Constants.user_messages.add_event_successful));
        } catch (err) {
            dispatch(failedAction(err.message));
        }
    };
}; 

const DeleteEvent = (event_id) => ({
    type: ACTIONS.DELETE_EVENT,
    payload: event_id
});

export const DeleteEventAction = (event_id) => {
    return async (dispatch) => {
        try {
            dispatch(DeleteEvent(event_id));
            const res = await SendApiRequest(`events/${event_id}`, Constants.API_METHODS.DELETE);
            dispatch(successfulAction(Constants.user_messages.delete_event_successful));
        } catch (err) {
            dispatch(failedAction(err.message));
        }
    };
};