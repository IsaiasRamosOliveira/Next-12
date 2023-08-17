import AuthService from "./AuthService";

export function withSession(callback: Function) {
  return async (ctx: any) => {
    try {
      const session = await AuthService.getSession(ctx);
      const modifiedCtx = {
        ...ctx,
        req: {
          ...ctx.req,
          session,
        },
      };

      return callback(modifiedCtx);
    } catch (err) {
      return {
        redirect: {
          permanent: false,
          destination: "/login?err=404",
        },
      };
    }
  };
}