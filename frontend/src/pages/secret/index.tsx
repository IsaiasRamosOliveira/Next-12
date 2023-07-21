import React from "react";
import nookies from "nookies";
import { tokenService } from "../../services/auth/tokenService";

const Secret = (props) => {
  return (
    <div>
      <h1>Secret area</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
};

export async function getServerSideProps(ctx) {
  const token = tokenService.get(ctx)
  console.log(token);
  return {
    props: {
      token
    }
  }
}

export default Secret;
