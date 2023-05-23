import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'What is Chatbutler.ai?',
      answer:
        'Chatbutler.ai is a user-friendly platform for creating and refining AI chatbots for your website. It comes with a variety of pre-built components, seamless integration with OpenAI APIs, and a realtime chat interface, allowing you to leverage AI without a line of code.',
    },
    {
      question: 'How does Chatbutler.ai work?',
      answer:
        'Create AI chatbots by dragging and dropping blocks onto a canvas, connecting them to form a logical sequence. Each block serves a specific function and can exchange data with others. While running the sequence, users can interact with the AI application through a realtime chat interface for testing and refining their chatbot flow. When you are ready to embed in your site, click on the publish button, and you will be provided a script tag to embed to your site.',
    },
    {
      question: 'Is Chatbutler.ai free to use?',
      answer: 'Yes, Chatbutler has a free tier.',
    },
  ],
  [
    {
      question:
        'What are the benefits of using Chatbutler over other chatbot platforms?',
      answer:
        'Chatbutler provides a flexible drag-and-drop editor that enables customizing the flow and steps of your chatbot interactions as flexibly as possible without the need to write a single line of code. Chatbutler does not rely on the documents and URLs loaded to each chatbot to create a helpful chatbot that would aid users with relevant results. Yes, we support these, but also for you to customize your interactions with our visual editor.',
    },
    {
      question: 'How easy is it to integrate Chatbutler.ai with my website?',
      answer:
        'Click publish to generate an HTML script of the chatbot widget. You can then copy-and-paste this script to your site. That’s it!',
    },
    {
      question: 'Can I customize the appearance of my chatbot?',
      answer: 'Currently, this is a work in progress.',
    },
  ],
  [
    {
      question: 'Do I need an OpenAI API key to use Chatbutler.ai?',
      answer: 'Yes.',
    },
    {
      question: 'Is my data secure?',
      answer:
        'Your data privacy and security are important to us. We employ industry-standard practices to protect your information and data while using the platform.',
    },
    {
      question:
        'Is Chatbutler.ai suitable for users with little or no programming experience?',
      answer:
        'Absolutely! Our visual platform is designed to be accessible to users with varying levels of expertise, including those with little or no programming experience.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-blue-100 py-20 sm:py-32"
    >
      {/* <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      /> */}
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, feel free to{' '}
            {/* email link */}
            <a
              href="mailto:egan@hey.com"
              className="font-medium text-slate-900 underline underline-offset-2 hover:text-slate-800"
            >
              send me an email.
            </a>
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg font-semibold leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="text-md mt-4 font-medium text-slate-700">
                      {faq.answer}
                    </p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
