import Image from 'next/image'

import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid'

import screenshot from '@/images/screenshots/3d-screenshot.jpg'

const features = [
  {
    name: 'Unlock cost-effective GPT AI solutions.',
    description: `Experience the power of GPT AI without breaking the bank. Promptsandbox delivers exceptional value and user experience at a fraction of the cost.`,
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Maximize efficiency with task automation.',
    description: `Save time and boost productivity by automating repetitive prompt sequences. Focus on what matters most while Promptsandbox manages your workflow.`,
    icon: LockClosedIcon,
  },
  {
    name: 'Rapidly prototype and share LLM apps.',
    description: `Easily create, iterate, and share LLM app workflows with Promptsandbox. Accelerate your development process and bring your ideas to life.`,
    icon: ServerIcon,
  },
]

export default function ProblemAgitation() {
  return (
    <div className="overflow-hidden bg-white py-10 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Harness GPT Power without the High Cost
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-slate-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-slate-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-blue-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex items-center justify-end lg:order-first">
            <Image
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-slate-400/50 sm:w-[57rem]"
              src={screenshot}
              alt="other premium-priced open ai playground alternative"
              priority
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
