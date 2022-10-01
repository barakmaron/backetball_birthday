import Constants from "../../Constants";
import SendApiRequest from "../../services/ApiService";
import { failedAction, successfulAction } from "./ViewActions";

export const SubmitContactFormAction = (form) => {
    return async (dispatch) => {
        try {
            await SendApiRequest('contact', Constants.API_METHODS.POST, form);
            dispatch(successfulAction(Constants.user_messages.send_contact_form));
        } catch (err) {
            dispatch(failedAction(err.response.data.error.body[0].message));
        }
    } 
};