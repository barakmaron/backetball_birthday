import SendApiRequest from "../../services/ApiService";
import ACTIONS from "./actionsConstants/UserActionsConstants";
import Constants from "../../Constants";

const Login = () => ({
    type: ACTIONS.LOGIN
});

export const LoginAction = (login_form) => {
    return async (dispatch) => {
        try {
            const user_token = await SendApiRequest('auth/login', Constants.API_METHODS.POST, login_form);
            dispatch(Login());
        } catch (err) {

        }
    }
}