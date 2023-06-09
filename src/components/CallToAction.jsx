import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden pb-16 pt-10"
    >
      {/* <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      /> */}
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-5xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Get started today
          </h2>
          {/* <p className="mt-4 text-lg tracking-tight text-slate-900">
          Unleash the Full Potential of our supercharged OpenAI Playground
          </p> */}
          <Button
            href="https://app.chatbutler.ai"
            color="blue"
            className=" mt-5"
          >
            Create your Chatbot
          </Button>
        </div>
      </Container>
    </section>
  )
}
