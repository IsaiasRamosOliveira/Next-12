import { Button, TextField } from "@mui/material";
import React from "react";
import TokenService from "../../services/auth/TokenService";
import { useRouter } from "next/router";

const Logout = () => {
  const route = useRouter();
  const handleLogout = async () => {
    TokenService.delete();
    const res = await fetch("/api/refresh", {
      method: "DELETE",
    })
    .then(res => {
      return res.json()
    })
    route.push("/login");
  };
  return (
    <div id="page">
      <h1 id="title">Logout - Sair da aplicação.</h1>
      <Button onClick={handleLogout} variant="contained" type="submit">
        Sair
      </Button>
    </div>
  );
};

export default Logout;
