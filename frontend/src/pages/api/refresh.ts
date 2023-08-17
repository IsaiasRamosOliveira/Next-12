import { NextApiRequest, NextApiResponse } from "next";
import nookies from "nookies"
import TokenService from "../../services/auth/TokenService";
const REFRESH_TOKEN = "REFRESH_TOKEN";
const controllers = {
  async storeRefreshToken(req: NextApiRequest, res: NextApiResponse) {
    const ctx = { req, res }
    nookies.set(ctx, REFRESH_TOKEN, req.body.refresh_token, {
      httpOnly: true,
      sameSite: "lax",
    })

    res.json({
      data: {
        message: "Stored with success!"
      }
    })
  },
  async displayCookies(req: NextApiRequest, res: NextApiResponse) {
    const ctx = { req, res }
    res.json({
      data: {
        cookies: nookies.get(ctx),
      }
    })
  },
  async regenerateTokens(req: NextApiRequest, res: NextApiResponse) {
    const ctx = { req, res }
    const cookies = nookies.get(ctx);
    const refresh_token = cookies[REFRESH_TOKEN];
    const refreshResponse = await fetch("http://localhost:4000/api/refresh", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        refresh_token
      })
    })
      .then(async (res) => {
        return {
          body: await res.json(),
          ok: res.ok
        }
      })

    if (refreshResponse.ok) {
      nookies.set(ctx, REFRESH_TOKEN, refreshResponse.body.data.refresh_token, {
        httpOnly: true,
        sameSite: "lax",
      })
      res.status(200).json({
        data: refreshResponse.body.data
      })

      TokenService.save(refreshResponse.body.data.refresh_token, ctx)

    } else {
      res.status(401).json({
        status: 401,
        message: "Não autorizado."
      })
    }
  }
}

const controllerBy: any = {
  POST: controllers.storeRefreshToken,
  GET: controllers.regenerateTokens,
  DELETE: ((req: NextApiRequest, res: NextApiResponse) => {
    const ctx = { req, res }
    nookies.destroy(ctx, REFRESH_TOKEN, {
      httpOnly: true,
      sameSite: "lax",
      path: "/"
    })
    res.json({
      data: {
        message: "deleted with success."
      }
    })
  })
  // GET: controllers.displayCookies
}

export default function handler(req: NextApiRequest | any, res: NextApiResponse) {
  if (controllerBy[req.method]) {
    return controllerBy[req.method](req, res)
  };

  res.status(404).json({
    status: 404,
    message: "Not found"
  })
}