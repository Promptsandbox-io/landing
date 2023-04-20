import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'

export function Hero() {
  return (
    <Container className="pb-16 pt-20 text-center lg:pt-32">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
      Enhance Your OpenAI Playground Experience
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
      Drag, Drop, and Connect your way to powerful AI chatbots and applications using our free versatile visual interface.
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
      <div className='flex flex-col gap-1'>
        <Button
          href="https://app.promptsandbox.io" 
          color="blue"
        aria-label={`Get started`}
        >
        <span>
          Start Building Today
        </span>
        </Button>
        <p className='text-sm text-black/60'>No login required</p>
      </div>
        <Button
          href="https://www.youtube.com/watch?v=CBPw7FXtaEU"
          variant="outline"
        >
          <svg
            aria-hidden="true"
            className="h-3 w-3 flex-none fill-slate-600 group-active:fill-current"
          >
            <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
          </svg>
          <span className="ml-3">Watch video</span>
        </Button>
      </div>
     
    </Container>
  )
}
