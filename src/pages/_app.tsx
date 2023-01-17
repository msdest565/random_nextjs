import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <Component {...pageProps} />
}
