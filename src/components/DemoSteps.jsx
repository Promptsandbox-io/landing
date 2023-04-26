import { useState, useRef, useEffect } from 'react'
import { Container } from '@/components/Container'
import clsx from 'clsx'

const CLOUDFRONT_URL = 'https://d7hr8xy52mtba.cloudfront.net'

const tabs = [
  {
    name: 'Step 1',
    videoSource: 'step1',
    videoPoster: 'step1-poster.webp',
    order: 1,
  },
  {
    name: 'Step 2',
    videoSource: 'step2',
    videoPoster: 'step2-poster.webp',
    order: 2,
  },
  {
    name: 'Step 3',
    videoSource: 'step3',
    videoPoster: 'step3-poster.webp',
    order: 3,
  },
  {
    name: 'The App',
    videoSource: 'the-app',
    videoPoster: 'the-app-poster.webp',
    order: 0,
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

  const loadVideo = (video) => {
    for (const source of video.children) {
      if (source.tagName === 'SOURCE') {
        source.src = source.dataset.src
      }
    }
    video.load()
  }

  const handleVideoClick = async (event, currentOrder) => {
    event.preventDefault()
    // play or pause video
    if (event.target.paused) {
      event.target.play()

      const tab = tabs[0]
      const video = document.querySelector(`video[data-tab-name="${tab.name}"]`)
      loadVideo(video)
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
                    onClick={() => {
                      if (tab.order < 3) {
                        const foo = tabs[tab.order + 1]
                        const video = document.querySelector(
                          `video[data-tab-name="${foo.name}"]`
                        )
                        loadVideo(video)
                      }
                      setSelectedTab(tab)
                    }}
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
      <div className="mx-auto  hidden px-1 sm:inline-block sm:px-6 lg:px-8">
        <div className="mx-auto inline-block bg-slate-50 sm:mt-5 sm:pt-4">
          <div className="-m-2 inline-block rounded-xl bg-slate-900/5 p-2 ring-1 ring-inset ring-slate-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            {tabs.map((tab) => {
              if (selectedTab.name === tab.name && tab.name === 'The App') {
                return (
                  <div key={tab.name}>
                    <video
                      controls
                      onClick={handleVideoClick}
                      playsInline
                      key={`${CLOUDFRONT_URL}/the-app-poster.webp`}
                      data-tab-name={tab.name}
                      className="mx-auto  h-[40rem] rounded-md shadow-2xl ring-1 ring-slate-900/10"
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
                  controls
                  autoPlay={true}
                  muted={true}
                  loop={true}
                  playsInline={true}
                  poster={`./${selectedTab.videoPoster}`}
                  data-tab-name={tab.name}
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
