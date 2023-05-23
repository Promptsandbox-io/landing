import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import screenshotGeneral from '@/images/screenshots/general.png'
import screenshotBlocktypes from '@/images/screenshots/blocktypes.png'
import screenshotChat from '@/images/screenshots/chat.png'

const features = [
  {
    title: '🎨 Intuitive Visual Canvas',
    description:
      'Easily make AI workflows by connecting and moving around blocks, perfect for new and experienced users.',
    image: screenshotGeneral,
  },
  {
    title: '🧱 Extensive Block Library',
    description:
      'Use ready-made blocks for OpenAI tools, helper functions, and working with documents.',
    image: screenshotBlocktypes,
  },
  {
    title: '💬 Real-time Chat Interface',
    description:
      'Instantly test out and improve your AI apps using an included chat feature.',
    image: screenshotChat,
  },
]

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="to-amber relative  overflow-hidden bg-gradient-to-b from-blue-100 pb-10 pt-16 sm:pb-24 sm:pt-20"
    >
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-4xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-black/80 sm:text-4xl md:text-5xl">
            Transform Your Customer Experience with AI-Powered Chatbots
          </h2>
          <p className="mt-6 text-lg tracking-tight text-slate-900">
            Effortlessly create, customize, and deploy chatbots to enhance your
            website&#39;s user experience and boost customer satisfaction.
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <Tab.List className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6',
                        selectedIndex === featureIndex
                          ? 'bg-blue-200 lg:bg-blue-400/20 lg:ring-1 lg:ring-inset lg:ring-slate-500/50'
                          : 'hover:cursor-pointer hover:bg-slate-200/60 lg:hover:bg-blue-400/10'
                      )}
                    >
                      <Tab
                        className={clsx(
                          'font-display cursor-pointer text-lg [&:not(:focus-visible)]:focus:outline-none',
                          selectedIndex === featureIndex
                            ? 'text-slate-600 lg:text-slate-800'
                            : 'hover:text-900-800 text-slate-800 lg:text-slate-800'
                        )}
                      >
                        <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                        {feature.title}
                      </Tab>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === featureIndex
                            ? 'text-slate-800'
                            : 'text-slate-800 group-hover:text-slate-900'
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className="lg:col-span-7">
                {features.map((feature) => (
                  <Tab.Panel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-slate-800 sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    <div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-slate-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                      <Image
                        className="w-full"
                        src={feature.image}
                        alt=""
                        priority
                        sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                      />
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
    </section>
  )
}
