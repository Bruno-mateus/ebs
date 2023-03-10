import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { globalStyles } from '../styles/global'

export default function App({ Component, pageProps }: AppProps) {
  globalStyles()
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}
