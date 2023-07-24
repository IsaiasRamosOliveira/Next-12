import React, { useEffect, useState } from "react";
import { authService } from "../../services/auth/authService";
import { useRouter } from "next/router";
import { withSessionHOC } from "../../services/auth/sesstion";

const SecretStatic = (props) => {
  return (
    <div>
      <h1>Secret Static</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
};

export default withSessionHOC(SecretStatic);
