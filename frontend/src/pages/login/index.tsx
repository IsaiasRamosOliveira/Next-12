import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { form } from '../../global/style/login.css'
import nookies from "nookies";
import { useRouter } from 'next/router';
import AuthService from '../../services/auth/AuthService';
import TokenService from '../../services/auth/TokenService';



const Login = () => {
  const route = useRouter();
  const [username, setUsername] = useState("omariosouto");
  const [password, setPassword] = useState("safepassword");
  return (
    <div id="page">
      <h1 id="title">Login</h1>
      <form
        className={form}
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          AuthService.login({
            username,
            password
          })
          .then((res) => {
            route.push("/posts")
          })
          .catch(err => {
            alert("Informe a senha");
          })
        }}
      >
        <TextField
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          id="outlined-basic"
          label="username"
          variant="outlined"
        />
        <TextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="outlined-basic"
          label="password"
          variant="outlined"
        />
        <Button variant="contained" type="submit">
          Entrar
        </Button>
      </form>
    </div>
  );
}

export default Login