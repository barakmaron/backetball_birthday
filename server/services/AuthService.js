import UsersDB from './storage/Users.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import TokensDB from './storage/Tokens.js';

async function Login(email, password) {
    try {
        const user = await UsersDB.FindUser(email);
        const matching_passwords = await bcrypt.compare(password, user.Password);
        return (matching_passwords && user.id) || undefined;
    } catch (err) {
        throw err;
    }
}

function GenerateToken(user_id, refresh_token = false) {
    const base_token = (refresh_token && process.env.REFRESH_TOKEN) || process.env.ACCESS_TOKEN;
    return jwt.sign({
        id: user_id
    }, base_token, { 
        expiresIn: '10m'
    });
}

function GetRefreshTokens() {
    try {
        return TokensDB.GetAllTokens();
    } catch (err) {
        throw err;
    }
}

function AddRefreshToken(token) {
    try {
        return TokensDB.AddToken(token);
    } catch (err) {
        throw err;
    }
}

function VerifyRefreshToken(token) {
    return jwt.verify(token, process.env.REFRESH_TOKEN);
}

const AuthService = {
    Login,
    GenerateToken,
    GetRefreshTokens,
    AddRefreshToken,
    VerifyRefreshToken
};

export default AuthService;