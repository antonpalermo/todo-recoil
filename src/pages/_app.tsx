import { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </RecoilRoot>
  )
}
