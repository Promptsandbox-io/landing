import { useState, useRef, useEffect } from 'react'
import { Container } from '@/components/Container'

const tabs = [
  {
    name: 'Step 1',
    videoSource: './step1',
    videoPoster: './step1-poster.png',
  },
  {
    name: 'Step 2',
    videoSource: './step2',
    videoPoster: './step2-poster.png',
  },
  {
    name: 'Step 3',
    videoSource: './step3',
    videoPoster: './step3-poster.png',
  },
  {
    name: 'The App',
    videoSource: './the-app',
    videoPoster: './the-app-poster.png',
  },
]

const videoWidth = '100%'
const videoHeight = '280px'

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
                        Configure Results
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
      <Container className={''}>
        <div className=" mx-auto flow-root bg-slate-50 sm:mt-5 sm:pt-4">
          <div className="-m-2 rounded-xl bg-slate-900/5 p-2 ring-1 ring-inset ring-slate-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            {selectedTab.name == 'The App' ? (
              <video
                controls
                onClick={handleVideoClick}
                preload="none"
                playsInline
                poster={selectedTab.videoPoster}
                key={`${selectedTab.videoSource}.webm`}
                width={videoWidth}
                height={videoHeight}
                className="rounded-md shadow-2xl ring-1 ring-slate-900/10"
              >
                <source
                  src={`${selectedTab.videoSource}.webm`}
                  type="video/webm"
                />
                <source
                  src={`${selectedTab.videoSource}.mp4`}
                  type="video/mp4"
                />
              </video>
            ) : (
              <video
                key={`${selectedTab.videoSource}.webm`}
                // controls
                muted={true}
                autoPlay
                playsInline
                preload="none"
                poster={selectedTab.videoPoster}
                width={videoWidth}
                height={videoHeight}
                className="lazy rounded-m shadow-2xl ring-1 ring-slate-900/10"
              >
                <source
                  src={`${selectedTab.videoSource}.webm`}
                  type="video/webm"
                />
                <source
                  src={`${selectedTab.videoSource}.mp4`}
                  type="video/mp4"
                />
              </video>
            )}
          </div>
        </div>
      </Container>
    </div>
  )
}
