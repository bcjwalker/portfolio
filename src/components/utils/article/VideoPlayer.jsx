import { useRef, useState, useEffect } from 'react'
// Animations :)
import { Fade } from 'react-awesome-reveal'
import { fadeInPushDown } from '../Animations.jsx'

import CheckisDesktop from '../CheckIsMob.jsx'

// Styles
import styles from './VideoPlayer.module.css'

const minChecker = (time) => {
  let videoMins = 0
  let videoMinsSecs = 0
  // If we're < 1 min
  if (time < 60) {
    // Give timestamp extra 0 if it's single digit
    if (`${~~time}`.length == 1) {
      return `${videoMins}:0${~~time}`
    } else {
      return `${videoMins}:${~~time}`
    }
    // If >= 1 min, do extra code
  } else if (time >= 60) {
    videoMins = ~~(time / 60)
    videoMinsSecs = ~~(time % 60)
    // Give timestamp extra 0 if it's single digit
    if (videoMinsSecs < 10) {
      return `${videoMins}:0${videoMinsSecs}`
    } else {
      return `${videoMins}:${videoMinsSecs}`
    }
  }
}

function VideoPlayerCard({ children, margins, id, audio, type, caption, title }) {
  // Cheers to https://stackoverflow.com/a/79600668 for this neat solution
  // If mobile dimensions, display mobile version of video component
  const [isDesktop, setIsDesktop] = useState(window.innerWidth < 900 ? false : true)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900) {
        setIsDesktop(false)
      } else {
        setIsDesktop(true)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isDesktop])

  return (
    <>
      <Fade keyframes={fadeInPushDown} duration={375} triggerOnce delay={20}>
        {isDesktop ? (
          <VideoPlayerDesktop
            margins={margins}
            id={id}
            audio={audio}
            type={type}
            caption={caption}
            title={title}>
            {children}
          </VideoPlayerDesktop>
        ) : (
          <VideoPlayerMobile
            margins={margins}
            id={id}
            audio={audio}
            type={type}
            caption={caption}
            title={title}>
            {children}
          </VideoPlayerMobile>
        )}
      </Fade>
    </>
  )
}

function VideoPlayerDesktop({ children, margins, id, audio, type, caption, title }) {
  // Basic stuff
  const videoRef = useRef()
  const [loaded, setLoaded] = useState(false)
  // Test if video has loaded
  const setVideoLoaded = () => {
    setLoaded(true)
  }
  // Video stats
  const [play, setPlay] = useState(false)
  const [muted, setMuted] = useState(true)
  const [videoTime, setVideoTime] = useState(0)
  const [videoTimeDisplay, setVideoTimeDisplay] = useState('0:00')
  const [videoDuration, setVideoDuration] = useState(0)
  const [videoDurationDisplay, setVideoDurationDisplay] = useState('0:00')
  const [videoSeekTime, setVideoSeekTime] = useState(0)

  // Get video duration
  useEffect(() => {
    setVideoDuration(videoRef.current.duration)
    setVideoDurationDisplay(minChecker(videoDuration))
  })

  // Get video current time
  useEffect(() => {
    // Only proceed if the video is playing, and it's been loaded
    if (play & loaded) {
      // Check every 1ms while playing
      const timer = setInterval(() => {
        setVideoTime(videoRef.current.currentTime)
        setVideoTimeDisplay(minChecker(videoTime))
      }, 100)
      return () => clearInterval(timer)
    }
  })

  // Handle start/stop
  useEffect(() => {
    if (play === true) {
      videoRef.current.play()
    } else {
      videoRef.current.pause()
    }
  }, [play, setPlay])
  const handleStopClick = () => setPlay((play) => !play)

  // Handle audio mute
  const handleAudioClick = () => setMuted((muted) => !muted)

  // Handle seek
  useEffect(() => {
    videoRef.current.currentTime = videoSeekTime
    setVideoTimeDisplay(minChecker(videoSeekTime))
  }, [videoSeekTime, setVideoSeekTime])
  const handleSeek = (e) => {
    setPlay(false)
    setVideoTime(e)
    setVideoSeekTime(e)
    setVideoTimeDisplay(minChecker(videoSeekTime))
  }
  const handleDragEnd = (e) => {
    setPlay(true)
  }
  const toggleFullScreen = () => {
    var vid = videoRef.current
    if (vid.requestFullscreen) {
      vid.requestFullscreen()
    } else if (vid.msRequestFullscreen) {
      vid.msRequestFullscreen()
    } else if (vid.mozRequestFullScreen) {
      vid.mozRequestFullScreen()
    } else if (vid.webkitRequestFullscreen) {
      vid.webkitRequestFullscreen()
    }
  }

  return (
    <>
      <figure className={`${margins} media-wrapper`}>
        <div className={`${styles['video-card-container']}`}>
          <figure className={styles['video-figure']}>
            {/* <div className={`${styles[`video-state`]} ${play ? `${styles[`state-paused`]}` : `${styles[`state-played`]}`}`}>
                        <span className='material-symbols-rounded'>{`${play ? `pause` : `play_arrow` }`}</span>
                    </div> */}
            <div className={`video-wrapper ${type}`}>
              <video
                muted={muted}
                className={styles[type]}
                id={id}
                preload="auto"
                autoPlay={false}
                disableRemotePlayback
                loop
                ref={videoRef}
                onClick={handleStopClick}
                onLoadedData={() => {
                  setVideoLoaded()
                }}>
                {children}
                Your browser does not support the video tag.
              </video>
            </div>
          </figure>
          <div className={styles['footer-container']}>
            {/* <div className={styles['header-container']}> */}
            {/* <div className={styles['label-wrapper']}>
                        <label className={styles['label-type']}>Video</label>
                        <span className={styles['dividing-dot']}>•</span>
                        <label className={styles['label-type']}>Interface</label>
                    </div> 
                    </div> */}
            <div className={styles['title-wrapper']}>
              <h5 className={styles['title']}>{title}</h5>
            </div>
            <div className={styles['buttons-wrapper']}>
              <button className={`icon-btn toned-btn ${styles[`btn-stop`]}`} onClick={handleStopClick}>
                <span className="material-symbols-rounded">{`${play ? `pause` : `play_arrow`}`}</span>
              </button>
              {/* Draw audio button if video has sound */}
              {audio ? (
                <button
                  className={`icon-btn outline-btn outline-1 ${styles[`btn-audio`]}`}
                  onClick={handleAudioClick}>
                  <span className="material-symbols-rounded">{`${muted ? `volume_off` : `volume_up`}`}</span>
                </button>
              ) : null}
              <div className={styles['btn-slider']}>
                <input
                  className={`range-slider ${styles['video-slider']}`}
                  type="range"
                  value={videoTime}
                  min={0}
                  max={videoDuration}
                  onChange={(e) => {
                    handleSeek(e.target.value)
                  }}
                  onDragLeave={handleDragEnd}
                />

                <div className={styles['video-timer']}>
                  <span className={styles['timer-stat']}>{videoTimeDisplay}</span>
                  <span className={styles['stat-slash']}> / </span>
                  <span className={styles['timer-stat']}>{videoDurationDisplay}</span>
                </div>
              </div>
              <button className={`icon-btn ${styles[`btn-fullscreen`]}`} onClick={toggleFullScreen}>
                <span className="material-symbols-rounded">fullscreen</span>
              </button>
            </div>
          </div>
        </div>
        <figcaption className={styles['video-player-figcaption']}>{caption}</figcaption>
      </figure>
    </>
  )
}

function VideoPlayerMobile({ children, margins, id, audio, type, caption, title }) {
  return (
    <>
      <figure className={`${margins} media-wrapper`}>
        <div className={`${styles['video-card-container']}`}>
          <figure className={styles['video-figure']}>
            <div className={`video-wrapper ${type}`}>
              <video className={styles[type]} preload="auto" autoPlay={false} disableRemotePlayback controls>
                {children}
                Your browser does not support the video tag.
              </video>
            </div>
          </figure>
        </div>
        <figcaption className={styles['video-player-figcaption']}>{caption}</figcaption>
      </figure>
    </>
  )
}

export default VideoPlayerCard
