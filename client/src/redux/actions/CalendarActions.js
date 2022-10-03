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

const AddEvent = (date) => ({
    type: ACTIONS.ADD_EVENT,
    payload: date
});

const DeleteEvent = (event_id) => ({
    type: ACTIONS.DELETE_EVENT,
    payload: event_id
});

const GetEvents = (events) => ({
    type: ACTIONS.GET_EVENTS,
    payload: events
});

const GetEventInfo = (event_info, event_id) => ({
    type: ACTIONS.GET_EVENT,
    payload: {
        info: event_info,
        id: event_id
    }
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
            dispatch(failedAction(Constants.user_messages.get_events_failed));
        }
    };
};

export const AddEventAction = (form, date) => {
    return async (dispatch) => {
        try {
            dispatch(AddEvent(date));
            const res = await SendApiRequest(`events/${date}`, Constants.API_METHODS.POST, form);
            dispatch(successfulAction(Constants.user_messages.add_event_successful));
        } catch (err) {
            dispatch(failedAction(Constants.user_messages.add_event_failed));
        }
    };
}; 

export const DeleteEventAction = (event_id) => {
    return async (dispatch) => {
        try {
            dispatch(DeleteEvent(event_id));
            const res = await SendApiRequest(`events/${event_id}`, Constants.API_METHODS.DELETE);
            dispatch(successfulAction(Constants.user_messages.delete_event_successful));
        } catch (err) {
            dispatch(failedAction(Constants.user_messages.delete_event_failed));
        }
    };
};

export const GetEventAction = (event_info_id, event_id) => {
    return async (dispatch) => {
        try {            
            const res = await SendApiRequest(`events/${event_info_id}`, Constants.API_METHODS.GET);
            dispatch(GetEventInfo(res, event_id));
        } catch (err) {
            dispatch(failedAction(Constants.user_messages.get_event_info_failed));
        }
    }
}