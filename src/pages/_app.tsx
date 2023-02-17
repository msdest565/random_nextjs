<<<<<<< HEAD
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

//
// import '@/styles/globals.less'
import '../styles/globals.less'
import BaseLayout from '../components/lauout'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout
    ?? (page => (
      <>
        <BaseLayout>{page}</BaseLayout>
      </>
    ))

  return getLayout(<Component {...pageProps} />)
=======
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <Component {...pageProps} />
>>>>>>> 3f80defba1e300d2adb7c0ce8d4b57a85b99becf
}
