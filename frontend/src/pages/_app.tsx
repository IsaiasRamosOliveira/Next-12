import type { AppProps } from 'next/app'
import "../global/style/globalStyle.css"
import Container from '../components/Container'
import Header from '../components/Header'
import Content from '../components/Content'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header />
      <Content>
        <Component {...pageProps} />
      </Content>
    </Container>
  )
}

export default MyApp
