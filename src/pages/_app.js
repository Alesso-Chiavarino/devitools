import '@/styles/globals.css'
import BotProvider from '@/context/botContext'

export default function App({ Component, pageProps }) {
  return (
    <BotProvider>
      <Component {...pageProps} />
    </BotProvider>
  )
}
