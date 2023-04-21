import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'What is Promptsandbox.io?',
      answer:
        'Promptsandbox.io is a user-friendly platform for creating and refining AI chatbots and applications. It comes with a variety of pre-built components, seamless integration with OpenAI APIs, and a real-time chat interface, making AI development more accessible for users at any skill level.',
    },
    {
      question: 'How does Promptsandbox.io work?',
      answer: 'Users construct AI workflows by dragging and dropping blocks onto a canvas, connecting them to form a logical sequence. Each block serves a specific function and can exchange data with others. While running the sequence, users can interact with the AI application through a real-time chat interface for testing and refining.',
    },
    {
      question: 'Is Promptsandbox.io free to use?',
      answer:
        "Yes! And you don't need to sign up or install any additional software to start building.",
    },
  ],
  [
    {
      question:
        'Is this like the Open AI Playground?',
      answer:
        'It pretty much is, but so much more. You can use Promptsandbox to quickly test out your ideas, but you can also build more complex workflows and even applications!',
    },
    {
      question:
        'Can I create custom blocks?',
      answer:
        'Currently, custom block creation is not supported. However, this feature may be added in the future.',
    },
    {
      question: 'Do I need an OpenAI API key to use Promptsandbox.io?',
      answer:
        'Yes.',
    },
  ],
  [
    {
      question: 'Can I share my AI workflows with others?',
      answer:'Yes, you can share your AI workflows by copying the URL of the workflow and sending it to them. They can then open the workflow in their browser and run it. You can also discover and remix workflows created by other users by checking out the gallery.',
    },
    {
      question:
        'Is my data secure?',
      answer:
        'Your data privacy and security are important to us. We employ industry-standard practices to protect your information and data while using the platform.',
    },
    {
      question: 'Is Promptsandbox.io suitable for beginners with little or no programming experience',
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
      className="relative overflow-hidden py-20 sm:py-32 bg-gradient-to-b from-white to-blue-100"
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
            <a href="mailto:egan@hey.com"
              className="font-medium text-slate-900 hover:text-slate-800 underline underline-offset-2"
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
                    <h3 className="font-display font-semibold text-lg leading-7 text-slate-900">
                     {faq.question}
                    </h3>
                    <p className="mt-4 text-md font-medium text-slate-700">{faq.answer}</p>
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
