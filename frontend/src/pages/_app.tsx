import styled from "@emotion/styled";
import Header from "../components/Header";
import GlobalStyle from "../theme/GlobalStyle";

const Container = styled.main`
  padding: 26px;
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
`;

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  );
}
