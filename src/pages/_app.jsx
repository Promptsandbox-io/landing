import { useEffect } from 'react'
import { GoogleAnalytics } from 'nextjs-google-analytics'
import 'focus-visible'
import lozad from 'lozad'

import '@/styles/tailwind.css'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const observer = lozad() // lazy loads elements with default selector as '.lozad'
    observer.observe()
  }, [])
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </>
  )
}
