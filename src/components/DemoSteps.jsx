import { useState, useRef, useEffect } from 'react'
import { Container } from '@/components/Container'
import clsx from 'clsx'

const CLOUDFRONT_URL = 'https://d7hr8xy52mtba.cloudfront.net'

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
    } else {
      event.target.pause()
    }
  }

  return (
    <div className="mx-auto bg-gradient-to-b from-blue-50 to-blue-100 px-4 pb-16 text-center sm:px-6 lg:px-8 lg:pt-2">
      <div className="mx-auto  hidden px-1 sm:inline-block sm:px-6 lg:px-8">
        <div className="mx-auto inline-block bg-slate-50 sm:mt-5 sm:pt-4">
          <div className="-m-2 inline-block rounded-xl bg-slate-900/5 p-2 ring-1 ring-inset ring-slate-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <div>
              <video
                controls
                onClick={handleVideoClick}
                playsInline
                poster={`${CLOUDFRONT_URL}/output.webp`}
                key={`${CLOUDFRONT_URL}/output.webp`}
                className="mx-auto  h-[40rem] rounded-md shadow-2xl ring-1 ring-slate-900/10"
              >
                {/* <source
                        src={`${CLOUDFRONT_URL}/${selectedTab.videoSource}.webm`}
                        type="video/webm"
                      /> */}
                <source
                  src={`${CLOUDFRONT_URL}/compressed-landing-final.mp4`}
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
