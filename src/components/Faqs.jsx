import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/20/solid'
const faqs = [
  {
    question: 'What exactly is Chatbutler?',
    answer:
      "Chatbutler is a convenient and intuitive platform that lets you develop and enhance AI chatbots for your website. It's packed with an assortment of pre-configured components, a seamless connection to OpenAI APIs, and a live chat test interface in your editor, empowering you to utilize LLMs (Large Language Models) without writing a single line of code.",
  },
  {
    question: 'Can you explain how Chatbutler operates?',
    answer:
      "You can build AI chatbots by simply dragging and dropping blocks onto a workspace, and then interconnecting them to construct a sensible sequence. Every block performs a distinct function and can share information with other blocks. During the sequence execution, users can interact with the AI application via a live chat interface, allowing them to test and optimize their chatbot workflows. When you're ready to integrate the chatbot into your site, hit the publish button, and an embeddable script tag will be provided.",
  },
  {
    question: 'Does Chatbutler offer free usage?',
    answer: 'Yes, Chatbutler does offer a free tier for its users.',
  },
  {
    question:
      'What makes Chatbutler a better choice compared to other chatbot platforms?',
    answer:
      "Chatbutler delivers a flexible, drag-and-drop editor that lets you tailor the progression and actions of your chatbot conversations without requiring any coding. Unlike many platforms, Chatbutler doesn't exclusively depend on loaded documents and URLs for each chatbot to create a responsive tool that offers users pertinent results. While we do support these features, our visual editor allows you to personalize your interactions even further.",
  },
  {
    question:
      'What steps are involved in integrating Chatbutler with my website?',
    answer:
      "Just hit the publish button to produce an HTML script for the chatbot widget. You can then transfer this script to your site by simply copy-pasting it. That's all there is to it! (🚧 Coming very soon! Sign up for updates)",
  },
  {
    question: 'Is it possible to alter the look of my chatbot?',
    answer: "We're actively working on this feature. Stay tuned for updates!",
  },
  {
    question: 'Do I require an OpenAI API key to utilize Chatbutler?',
    answer: 'Yes, an OpenAI API key is necessary for using Chatbutler.',
  },
  {
    question: 'Can I trust that my data is safe?',
    answer:
      'We greatly value your data privacy and security. We adhere to industry-standard protocols to safeguard your information and data while you use our platform.',
  },
  {
    question:
      'Is Chatbutler appropriate for users with minimal or no programming skills?',
    answer:
      'Definitely! Our visual interface has been thoughtfully designed to be user-friendly for individuals of all skill levels, including those with minimal or no programming background.',
  },
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-blue-100"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
