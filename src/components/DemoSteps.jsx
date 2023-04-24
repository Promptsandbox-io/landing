import { useState } from 'react'

import { Container } from '@/components/Container'

const tabs = [
  {
    name: 'Step 1',
    videoSource: './step1.webm',
    component: (
      <p>
        <span className="font-extrabold text-blue-600">1{')'}</span> Add Inputs
      </p>
    ),
  },
  {
    name: 'Step 2',
    videoSource: './step2.webm',
    component: (
      <p>
        <span className="font-extrabold text-blue-600">2{')'}</span> Add Other
        Blocks
      </p>
    ),
  },
  {
    name: 'Step 3',
    videoSource: './step3.webm',
    component: (
      <p>
        <span className="font-extrabold text-blue-600">3{')'}</span> Add Output
      </p>
    ),
  },
  {
    name: 'The App',
    videoSource: './hero-basic.webm',
    component: <p className="font-extrabold text-blue-600">🚀 The App</p>,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function DemoSteps() {
  const [selectedTab, setSelectedTab] = useState(tabs[3])
  return (
    <div className="mx-auto bg-gradient-to-b from-blue-50 to-blue-100 px-4 pb-16 text-center sm:px-6 lg:px-8 lg:pt-5">
      <div className="pt-2">
        <Container>
          <div className="flex justify-center">
            <div className="sm:hidden">
              <label htmlFor="tabs" className="sr-only">
                Select a tab
              </label>
              {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
              <select
                id="tabs"
                name="tabs"
                className="block w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                defaultValue={tabs[0]}
                onChange={(e) => setSelectedTab(e.target.value)}
              >
                {tabs.map((tab, index) => (
                  <option key={tab.name} value={tab}>
                    {tab.component}
                  </option>
                ))}
              </select>
            </div>
            <div className="hidden sm:block">
              <nav className="flex space-x-4" aria-label="Tabs">
                {tabs.map((tab, index) => (
                  <button
                    key={tab.name}
                    onClick={() => setSelectedTab(tab)}
                    className={classNames(
                      tab.name === selectedTab.name
                        ? 'bg-gradient-to-br from-blue-500/40 to-blue-400/30 font-extrabold text-blue-700/80'
                        : 'font-medium text-slate-500 hover:text-slate-700',
                      'cursor-pointer rounded-md px-3 py-2 text-sm'
                    )}
                    aria-current={
                      tab.name === selectedTab.name ? 'page' : undefined
                    }
                  >
                    {tab.component}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </Container>
      </div>
      <Container className={''}>
        <div className=" mx-auto flow-root bg-slate-50 sm:mt-5 sm:pt-4">
          <div className="-m-2 rounded-xl bg-slate-900/5 p-2 ring-1 ring-inset ring-slate-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            {selectedTab.name === 'App' ? (
              <video
                controls
                key={selectedTab.videoSource}
                className="rounded-md shadow-2xl ring-1 ring-slate-900/10"
              >
                <source src={selectedTab.videoSource} type="video/webm" />
              </video>
            ) : (
              <video
                controls
                key={selectedTab.videoSource}
                autoPlay
                className="rounded-md shadow-2xl ring-1 ring-slate-900/10"
              >
                <source src={selectedTab.videoSource} type="video/webm" />
              </video>
            )}
          </div>
        </div>
      </Container>
    </div>
  )
}
