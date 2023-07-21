import nookies from "nookies";
const ACCESS_TOKEN_KEY = "h234gjy23g4y32g4y1g3o122iuyg454343";

export const tokenService = {
    save(accessToken, ctx = null) {
        globalThis.sessionStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
        nookies.set(ctx, ACCESS_TOKEN_KEY, accessToken, {
            maxAge: 1 * 60 * 60 * 24,
            path: '/'
        });
    },
    get(ctx = null) {
        const cookies = nookies.get(ctx);
        return cookies[ACCESS_TOKEN_KEY] || ''
    },
    delete(ctx = null) {
        globalThis.sessionStorage.removeItem(ACCESS_TOKEN_KEY);
        nookies.destroy(ctx, ACCESS_TOKEN_KEY);
    }
}