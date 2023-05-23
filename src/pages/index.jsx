import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Container } from '@/components/Container'
import { DemoSteps } from '@/components/DemoSteps'
import ProblemAgitation from '@/components/ProblemAgitation'
import Newsletter from '@/components/Newsletter'
import { Pricing } from '@/components/Pricing'

export default function Home() {
  return (
    <>
      <Head>
        <title>ChatButler</title>
        <meta
          name="description"
          content="Promptsandbox: The ultimate Open AI Playground for GPT workflows, offering an intuitive chat GPT playground experience at an affordable price."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <DemoSteps />
        <PrimaryFeatures />
        <Pricing />
        <CallToAction />
        <Newsletter />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
