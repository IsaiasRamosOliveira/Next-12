import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React, { useState } from "react";
import nookies from "nookies";
import { authService } from "../services/auth/authService";

const HomeStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input[type="submit"] {
    width: 100%;
  }
`;

const Home = () => {
  const router = useRouter();
  const [values, setValues] = useState({
    name: "omariosouto",
    password: "safepassword",
  });
  const handleSetValues = (e) => {
    const fieldValue = e.target.value;
    const fieldName = e.target.name;
    setValues((currentValues): any => {
      return {
        ...currentValues,
        [fieldName]: fieldValue,
      };
    });
  };
  return (
    <HomeStyled>
      <h1>Home</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          authService
            .login({
              username: values.name,
              password: values.password,
            })
            .then(() => {
              router.push("/secret");
            })
            .catch(() => {
              alert("Usuário ou senha estão inválidos.");
            });
        }}
      >
        <div>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={values.name}
            onChange={handleSetValues}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="password"
            name="password"
            value={values.password}
            onChange={handleSetValues}
          />
        </div>
        <input type="submit" value="Entrar" />
      </form>
    </HomeStyled>
  );
};

export default Home;
