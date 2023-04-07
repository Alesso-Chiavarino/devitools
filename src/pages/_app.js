import '@/styles/globals.css'
import BotProvider from '@/context/botContext'
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }) {
  return (
    <BotProvider>
      <NextNProgress color='#895DF5' />
      <Component {...pageProps} />
    </BotProvider>
  )
}
