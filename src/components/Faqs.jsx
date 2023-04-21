import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'What is Promptsandbox.io?',
      answer:
        'Promptsandbox.io is an intuitive, web-based platform designed to help you build and refine AI chatbots and applications using a visual canvas. With a diverse library of pre-built blocks, seamless OpenAI API integration, and real-time chat interface, it simplifies the AI development process for users of all skill levels.',
    },
    {
      question: 'How does Promptsandbox.io work?',
      answer: 'Users create AI workflows by dragging and dropping blocks onto a canvas and connecting them to form a sequence. Each block has a specific purpose and can be linked with others to send and receive data. You can then run the sequence and can interact with it via our real-time chat interface.',
    },
    {
      question: 'Is Promptsandbox.io free to use?',
      answer:
        'Yes, Promptsandbox.io is free to use, and you do not need to sign up or install any additional software to start building.',
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
        'Absolutely! Our intuitive visual canvas is designed to be accessible to users with varying levels of expertise, including those with little or no programming experience.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
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
              className="font-medium text-slate-900 hover:text-slate-800"
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
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
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
