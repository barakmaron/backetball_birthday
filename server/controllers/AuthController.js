import Constants from '../Constants.js';
import AuthService from '../services/AuthService.js';

async function Login(req, res) {
    try {
        const { email, password } = req.body;
        const auth = await AuthService.Login(email, password);
        const access_token = AuthService.GenerateToken(auth);
        if(auth) {
            return res.cookie('jwt', access_token, {
                httpOnly: true
            }).sendStatus(200);
        } 
        return res.status(401).json({
            error: Constants.USER_LOGIN_ERROR
        });
    } catch (err) {
        return res.status(400).json({
            error: Constants.USER_LOGIN_ERROR
        });
    }
}

function CheckToken(req, res) {
    return res.sendStatus(200);
}

const AuthController = {
    Login,
    CheckToken
};

export default AuthController;