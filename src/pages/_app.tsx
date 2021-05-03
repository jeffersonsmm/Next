import GlobalStyle from "@/styles/GlobalStyle"
import Loading from '@/utils/loading'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      < GlobalStyle />

      <Loading />
      <Component {...pageProps} />
    </>
  )
}
