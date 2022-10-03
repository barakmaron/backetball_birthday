import SendApiRequest from "../../services/ApiService";
import ACTIONS from "./actionsConstants/UserActionsConstants";
import Constants from "../../Constants";
import { failedAction } from "./ViewActions";
import UserService from "../../services/UserService";

const Login = () => ({
    type: ACTIONS.LOGIN
});

const Logout = () => ({
    type: ACTIONS.LOGOUT
});

export const LoginAction = (login_form) => {
    return async (dispatch) => {
        try {
            const form_encrypted_password = await UserService.EncryptForm(login_form);
            await SendApiRequest('auth/login', Constants.API_METHODS.POST, form_encrypted_password);
            dispatch(Login());
        } catch (err) {
            dispatch(failedAction(err.message));
        }
    }
};

export const AuthUserAction = () => {
    return async (dispatch) => {
        try {
            await SendApiRequest('auth/token', Constants.API_METHODS.GET);
            dispatch(Login());
        } catch (err) {
            dispatch(Logout());
            dispatch(failedAction(err.message));
        }
    }
}