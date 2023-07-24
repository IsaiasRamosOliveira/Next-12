import React from "react";
import { tokenService } from "../../services/auth/tokenService";
import { authService } from "../../services/auth/authService";
import { withSession } from "../../services/auth/sesstion";

const Secret = (props) => {
  return (
    <div>
      <h1>Secret area</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
};

// Decoration Pattern
export const getServerSideProps = withSession((ctx) => {
  return {
    props: {
      session: ctx.req.session,
    },
  };
});

// export async function getServerSideProps(ctx) {
//   try {
//     const session = await authService.getSession(ctx);
//     return {
//       props: {
//         session,
//       },
//     };
//   } catch (err) {
//     return {
//       redirect: {
//         permanent: false,
//         destination: "/?error=401"
//       }
//     }
//   }
// }

export default Secret;
