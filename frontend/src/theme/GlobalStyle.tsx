import React from "react";

const GlobalStyle = () => {
  return (
    <style global jsx>{`
      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
          "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
      }
      ul {
        list-style: none;
      }
      a {
        text-decoration: none;
      }
    `}</style>
  );
};

export default GlobalStyle;
