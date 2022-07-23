import '../styles/globals.css'
import { Aside } from '../components';
import { ThemeProvider } from '../contexts/ThemeProvider';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Aside/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
