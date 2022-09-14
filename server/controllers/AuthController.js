import Constants from '../Constants.js';
import AuthService from '../services/AuthService.js';

async function Login(req, res) {
    try {
        const cookies = req.cookies;
        const { email, password } = req.body;
        const auth = await AuthService.Login(email, password);
        const refresh_tokens = AuthService.GetRefreshTokens();
        const access_token = AuthService.GenerateToken(auth);
        const refresh_token = AuthService.GenerateToken(auth, true);
        if(auth) {
            if(cookies?.jwt) {
                const reused_refresh_token = refresh_tokens.find(token => token === cookies.jwt);
                if(reused_refresh_token) {
                    res.clearCookie('jwt', {
                        httpOnly: true,
                        sameSite: "None",
                        secure: true
                    });
                }
            }
            AuthService.AddRefreshToken(refresh_token);
            res.cookie('jwt', refresh_token, {
                httpOnly: true,
                sameSite: "None",
                secure: true,
                maxAge: Constants.REFRESH_TOKEN_MAX_AGE
            });            
            return res.status(200).json({
                accessToken: access_token
            });
        } 
        return res.status(400).json({
            error: Constants.USER_LOGIN_ERROR
        });
    } catch (err) {
        return res.status(400).json({
            error: Constants.USER_LOGIN_ERROR
        });
    }
}

async function RefreshToken(req, res) {
    try {
        const cookies = req.cookies;
        if(!cookies?.jwt)
            return res.sendStatus(401);
        const refresh_token = cookies.jwt;
        const refresh_tokens = AuthService.GetRefreshTokens();
        const fond_token = refresh_tokens.find(token => token === refresh_token);
        res.clearCookie('jwt', {
            httpOnly: true,
            sameSite: "None",
            secure: true
        });
        if(!fond_token) {
            return res.sendStatus(403);
        }
        const user_id = AuthService.VerifyRefreshToken(refresh_token);
        const access_token = AuthService.GenerateToken(user_id);
        const new_refresh_token = AuthService.GenerateToken(user_id, true);
        res.cookie('jwt', new_refresh_token, {
            httpOnly: true,
            sameSite: "None",
            secure: true,
            maxAge: Constants.REFRESH_TOKEN_MAX_AGE
        });  
        AuthService.AddRefreshToken(new_refresh_token);
        return res.status(200).json({
            accessToken: access_token
        });
    } catch (err) {
        throw err;
    }
}

const AuthController = {
    Login,
    RefreshToken
};

export default AuthController;