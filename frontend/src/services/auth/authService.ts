import TokenService from "./TokenService";

class AuthService {
  async login(data: any) {
    fetch('http://localhost:4000/api/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((res) => {
        return res.json();
      })
      .then(async (res) => {
        // Tratando do refresh
        const { refresh_token } = res.data
        const response = await fetch("api/refresh", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ refresh_token })
        })
          .then(res => {
            return res.json()
          })

        // Tratando do access token
        TokenService.save(res.data.access_token, null);
      })
      .catch(err => {
        throw new Error("Usuário não existe.")
      })
  }
  async getSession(ctx: any) {
    const token = TokenService.get(ctx)
    return fetch('http://localhost:4000/api/session', {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error("Não autorizado.")
        }
        return res.json()
      })
      .then(res => {
        return res
      })
      .catch(async (err) => {
        if (err instanceof Error) {
          const res = await fetch("/api/refresh", {
            method: "GET",
          })
          .then((res) => {
            return res.json()
          })

          console.log(res);
          console.log('redirecionado');
          window.location.pathname = "/"
        }
      })
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new AuthService();