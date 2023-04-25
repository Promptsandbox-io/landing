import { useState, useRef, useEffect } from 'react'
import { Container } from '@/components/Container'
import clsx from 'clsx'

const CLOUDFRONT_URL =
  'https://promptsandbox-landing.s3.us-west-1.amazonaws.com'

const tabs = [
  {
    name: 'Step 1',
    videoSource: 'step1',
    videoPoster: 'step1-poster.webp',
  },
  {
    name: 'Step 2',
    videoSource: 'step2',
    videoPoster: 'step2-poster.webp',
  },
  {
    name: 'Step 3',
    videoSource: 'step3',
    videoPoster: 'step3-poster.webp',
  },
  {
    name: 'The App',
    videoSource: 'the-app',
    videoPoster: 'the-app-poster.webp',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function useLazyLoadVideos() {
  const observerRef = useRef(null)

  useEffect(() => {
    const lazyVideos = [].slice.call(document.querySelectorAll('video.lazy'))

    if ('IntersectionObserver' in window) {
      observerRef.current = new IntersectionObserver((entries, observer) => {
        entries.forEach((video) => {
          if (video.isIntersecting) {
            for (var source in video.target.children) {
              var videoSource = video.target.children[source]
              if (
                typeof videoSource.tagName === 'string' &&
                videoSource.tagName === 'SOURCE'
              ) {
                videoSource.src = videoSource.dataset.src
              }
            }

            video.target.load()
            video.target.classList.remove('lazy')
            observer.unobserve(video.target)
          }
        })
      })

      lazyVideos.forEach((lazyVideo) => {
        observerRef.current.observe(lazyVideo)
      })

      return () => {
        if (observerRef.current) {
          observerRef.current.disconnect()
        }
      }
    }
  }, [])

  return observerRef
}

export function DemoSteps() {
  const [selectedTab, setSelectedTab] = useState(tabs[3])

  const lazyLoadObserver = useLazyLoadVideos()

  useEffect(() => {
    const lazyLoadVar = lazyLoadObserver.current
    return () => {
      if (lazyLoadVar) {
        lazyLoadVar.disconnect()
      }
    }
  }, [lazyLoadObserver])

  const handleVideoClick = async (event) => {
    event.preventDefault()
    // play or pause video
    if (event.target.paused) {
      event.target.play()
    } else {
      event.target.pause()
    }
  }

  return (
    <div className="mx-auto bg-gradient-to-b from-blue-50 to-blue-100 px-4 pb-16 text-center sm:px-6 lg:px-8 lg:pt-5">
      <div className="pt-2">
        <Container>
          <div className="flex justify-center">
            <div className="hidden sm:block">
              <nav className="flex space-x-4" aria-label="Tabs">
                {tabs.map((tab) => (
                  <button
                    key={tab.name}
                    onClick={() => setSelectedTab(tab)}
                    className={classNames(
                      tab.name == selectedTab.name
                        ? 'bg-gradient-to-br from-blue-500/40 to-blue-400/30 font-extrabold text-blue-700/80'
                        : 'font-medium text-slate-500 hover:text-slate-700',
                      'cursor-pointer rounded-md px-3 py-2 text-sm'
                    )}
                    aria-current={
                      tab.name == selectedTab.name ? 'page' : undefined
                    }
                  >
                    {tab.name == 'Step 1' && (
                      <p>
                        <span className="font-extrabold text-blue-600">
                          1{')'}
                        </span>{' '}
                        Add Inputs
                      </p>
                    )}
                    {tab.name == 'Step 2' && (
                      <p>
                        <span className="font-extrabold text-blue-600">
                          2{')'}
                        </span>{' '}
                        Incorporate Blocks
                      </p>
                    )}
                    {tab.name == 'Step 3' && (
                      <p>
                        <span className="font-extrabold text-blue-600">
                          3{')'}
                        </span>{' '}
                        Add Outputs
                      </p>
                    )}
                    {tab.name == 'The App' && (
                      <p className="font-extrabold text-blue-600">🚀 AI App</p>
                    )}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </Container>
      </div>
      <div className="mx-auto inline-block px-4 sm:px-6 lg:px-8">
        <div className="mx-auto inline-block bg-slate-50 sm:mt-5 sm:pt-4">
          <div className="-m-2 inline-block rounded-xl bg-slate-900/5 p-2 ring-1 ring-inset ring-slate-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            {tabs.map((tab) => {
              if (selectedTab.name === tab.name && tab.name === 'The App') {
                return (
                  <div key={tab.name}>
                    <video
                      controls
                      onClick={handleVideoClick}
                      preload="none"
                      playsInline
                      poster={`${CLOUDFRONT_URL}/${selectedTab.videoPoster}`}
                      key={`${CLOUDFRONT_URL}/the-app-poster.webp`}
                      className="mx-auto hidden h-[40rem] rounded-md shadow-2xl ring-1 ring-slate-900/10 sm:block"
                    >
                      <source
                        src={`${CLOUDFRONT_URL}/${selectedTab.videoSource}.webm`}
                        type="video/webm"
                      />
                      <source
                        src={`${CLOUDFRONT_URL}/${selectedTab.videoSource}.mp4`}
                        type="video/mp4"
                      />
                    </video>
                    <video
                      controls
                      playsInline
                      preload="none"
                      poster={`${CLOUDFRONT_URL}/${selectedTab.videoPoster}`}
                      key={`the-app-poster.webp2`}
                      className="mx-auto h-[40rem] rounded-md shadow-2xl ring-1 ring-slate-900/10 sm:hidden"
                    >
                      <source
                        src={`${CLOUDFRONT_URL}/${selectedTab.videoSource}.webm`}
                        type="video/webm"
                      />
                      <source
                        src={`${CLOUDFRONT_URL}/${selectedTab.videoSource}.mp4`}
                        type="video/mp4"
                      />
                    </video>
                  </div>
                )
              }

              return (
                <video
                  key={`${tab.name}`}
                  // controls
                  autoPlay={true}
                  muted={true}
                  loop={true}
                  playsInline={true}
                  poster={`${CLOUDFRONT_URL}/${selectedTab.videoPoster}`}
                  className={clsx(
                    selectedTab.name !== tab.name && 'hidden',
                    'lazy mx-auto h-[40rem] rounded-md shadow-2xl ring-1 ring-slate-900/10'
                  )}
                >
                  <source
                    data-src={`${CLOUDFRONT_URL}/${selectedTab.videoSource}.webm`}
                    type="video/webm"
                  />
                  <source
                    data-src={`${CLOUDFRONT_URL}/${selectedTab.videoSource}.mp4`}
                    type="video/mp4"
                  />
                </video>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
