"use client";
import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";

const HeaderStyled = styled.header`
  background: rgb(232, 67, 67);
  padding: 20px;
  a {
    color: aliceblue;
    font-weight: 600;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`;

const Header = () => {
  return (
    <HeaderStyled>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="posts">Posts</Link>
          </li>
        </ul>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
