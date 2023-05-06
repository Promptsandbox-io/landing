import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    const entryID = '1059044189'

    const formData = new FormData()
    formData.append(`entry.${entryID}`, email)

    fetch(
      'https://docs.google.com/forms/d/e/1FAIpQLScGCpWK3UsjRtWIp7Vz1rO7Oktuz9glz9H2007-SZquc35tUQ/formResponse',
      {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      }
    )
      .then(() => {
        setEmail('')
        // Add any success handling, e.g., show a message or redirect
        setIsFormSubmitted(true)
      })
      .catch((error) => {
        console.error('Error:', error)
        // Add any error handling, e.g., show an error message
      })
  }

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 py-10 sm:py-10 lg:py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div className="max-w-xl text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:col-span-7">
          <h2 className="inline sm:block lg:inline xl:block">
            Want product news and updates?
          </h2>{' '}
          <p className="inline sm:block lg:inline xl:block">
            Sign up for our newsletter.
          </p>
        </div>
        <form
          className="w-full max-w-md lg:col-span-5 lg:pt-2"
          onSubmit={handleSubmit}
        >
          <div className="flex gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="entry.1059044189" // Replace "xxxxxxxx" with the actual entry ID you found
              type="email"
              autoComplete="email"
              required
              className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Subscribe
            </button>
          </div>
          <p className="mt-4 text-sm leading-6 text-gray-900">
            {/* form submitted */}
            {isFormSubmitted && (
              <span className="font-bold text-blue-600">
                Thanks for subscribing!
              </span>
            )}

            {/* We care about your data. Read our{' '}
            <a
              href="#"
              className="font-semibold text-blue-600 hover:text-blue-500"
            >
              privacy&nbsp;policy
            </a>
            . */}
          </p>
        </form>
      </div>
    </div>
  )
}
