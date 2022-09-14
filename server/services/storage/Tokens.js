import { TokensCache } from "../../db/models/index.js";

function GetAllTokens() {
    return TokensCache.get('refreshTokens');
}

function AddToken(token) {
    const tokens = TokensCache.get('refreshTokens') || [];
    TokensCache.set('refreshTokens', [...tokens, token]);
}

const TokensDB = {
    GetAllTokens,
    AddToken
};

export default TokensDB;