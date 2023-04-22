import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Container } from '@/components/Container'

export default function Home() {
  return (
    <>
      <Head>
        <title>Promptsandbox - Open AI Playground</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        {/* <Container className="pb-5 pt-6 text-center lg:pt-6">
          
        </Container> */}
        <PrimaryFeatures />
        {/* <SecondaryFeatures /> */}
        <CallToAction />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
