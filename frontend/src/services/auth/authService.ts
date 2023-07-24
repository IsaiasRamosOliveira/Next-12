import { tokenService } from "./tokenService";
import nookies from "nookies";
const ACCESS_TOKEN_KEY = "h234gjy23g4y32g4y1g3o122iuyg454343";

export const authService = {
    async login({ username, password }) {
        return fetch(`${process.env.NEXT_PUBLIC_URL}/api/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        })
            .then(async (res) => {
                if (!res.ok) throw new Error("Usuário ou senha inválidos");
                const body = await res.json();
                tokenService.save(body.data.access_token);
            })
    },
    async getSession(ctx = null) {
        const token = tokenService.get(ctx);
        return fetch(`${process.env.NEXT_PUBLIC_URL}/api/session`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => {
                return res.json();
            })
            .then(res => {
                if (!res.data) throw new Error("Não autorizado.")
                return res.data
            })
    }
}