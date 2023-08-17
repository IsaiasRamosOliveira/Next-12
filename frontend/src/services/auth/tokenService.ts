import nookies from "nookies"
import { NextApiRequest, NextApiResponse } from "next"
const ACCESS_TOKEN = 'ACCESS_TOKEN'
class TokenService {
  save(access_token: any, ctx: {req: NextApiRequest, res: NextApiResponse } | null) {
    nookies.set(ctx, ACCESS_TOKEN, access_token, {
      maxAge: 1 * 60 * 60 * 60 * 24,
      path: "/"
    })
  }
  get(ctx: any | null) {
    const cookies = nookies.get(ctx)
    return cookies[ACCESS_TOKEN]
  }
  delete(ctx = null) {
    nookies.destroy(ctx, ACCESS_TOKEN);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new TokenService();