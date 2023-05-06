const steps = [
  { id: '1', name: 'Craft' },
  { id: '2', name: 'Utilize' },
]

export default function StepsComponent({ step, setStep }) {
  return (
    <div className="hidden sm:block">
      <nav aria-label="Progress" className="">
        <ol
          role="list"
          className=" divide-y divide-blue-300 rounded-md rounded-b-none border-2 border-blue-400/40  md:flex md:divide-y-0"
        >
          {steps.map((currentStep, stepIdx) => (
            <li
              key={currentStep.name}
              className="relative cursor-pointer text-center md:flex md:flex-1"
              onClick={() => {
                setStep(stepIdx)
              }}
            >
              {step > stepIdx ? (
                <a className="group flex w-full items-center bg-blue-200/30">
                  <span className="text-md flex w-full items-center justify-center px-2 py-1 font-medium">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-blue-400/10 ">
                      <span className="text-blue-500 group-hover:text-blue-900">
                        {currentStep.id}
                      </span>
                    </span>
                    <span className="ml-4 font-medium text-blue-900/60 group-hover:text-blue-900">
                      {currentStep.name}
                    </span>
                  </span>
                </a>
              ) : step === stepIdx ? (
                <a className="group flex w-full items-center bg-blue-200">
                  <span className="text-md flex w-full items-center justify-center px-2 py-1 font-medium">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-blue-600/20 ">
                      <span className="text-blue-500 group-hover:text-blue-900">
                        {currentStep.id}
                      </span>
                    </span>
                    <span className="ml-4 text-lg font-bold text-blue-900/60">
                      {currentStep.name}
                    </span>
                  </span>
                </a>
              ) : (
                <a className="group flex w-full items-center ">
                  <span className="text-md flex w-full items-center justify-center px-2 py-1 font-medium">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl ">
                      <span className="text-blue-500 group-hover:text-blue-900">
                        {currentStep.id}
                      </span>
                    </span>
                    <span className="text-md ml-4 font-medium text-blue-900/60 group-hover:text-blue-900">
                      {currentStep.name}
                    </span>
                  </span>
                </a>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  )
}
