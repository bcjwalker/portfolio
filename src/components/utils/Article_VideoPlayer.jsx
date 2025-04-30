import React, { useRef, useState, useEffect } from 'react';

// Styles
import styles from "./Article_VideoPlayer.module.css";

function VideoPlayerCard( {children, margins, id, type, caption, title} ) {
    // Basic stuff
    const videoRef = useRef();
    const [loaded, setLoaded] = useState(false);
    // Test if video has loaded
    const setVideoLoaded = () => {
        console.log("video loaded");
        setLoaded(true);
    };
    // Video stats
    const [play, setPlay] = useState(false);
    const [videoTime, setVideoTime] = useState(0);
        const [videoTimeDisplay, setVideoTimeDisplay] = useState('0:00');
    const [videoDuration, setVideoDuration] = useState(0);
        const [videoDurationDisplay, setVideoDurationDisplay] = useState('0:00');
    const [videoSeekTime, setVideoSeekTime] = useState(0);

    // Get video duration
    useEffect(() => {
        setVideoDuration(videoRef.current.duration);
        // Give timestamp extra 0 if it's single digit
        if (`${~~videoRef.current.duration}`.length == 1) {
            setVideoDurationDisplay(`0:0${~~videoRef.current.duration}`);
        } else {
            setVideoDurationDisplay(`0:${~~videoRef.current.duration}`);
        }
    }, [loaded, setLoaded]);
    // Get video current time
    useEffect(() => {
        // Only proceed if the video is playing, and it's been loaded
        if(play & loaded) {
            // Check every 1ms while playing
            const timer = setInterval(() => {
                setVideoTime(videoRef.current.currentTime);
                // Give timestamp extra 0 if it's single digit
                if (`${~~videoRef.current.currentTime}`.length == 1) {
                    setVideoTimeDisplay(`0:0${~~videoRef.current.currentTime}`);
                } else {
                    setVideoTimeDisplay(`0:${~~videoRef.current.currentTime}`);
                }
            }, 100);
            return () => clearInterval(timer);
        }
    }, [play, setPlay])

    // Handle start/stop
    useEffect(() => {
        if (play === true) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    }, [play, setPlay]);
    const handleStopClick = () => (
        setPlay(play => !play)
    );
    // Handle seek
    useEffect(() => {
        videoRef.current.currentTime = videoSeekTime;
    }, [videoSeekTime, setVideoSeekTime]);
    const handleSeek = (e) => {
        setVideoTime(e);
        setVideoSeekTime(e);
        // Give timestamp extra 0 if it's single digit
        if (`${~~e}`.length == 1) {
            setVideoTimeDisplay(`0:0${~~e}`);
        } else {
            setVideoTimeDisplay(`0:${~~e}`);
        }
    }
    const toggleFullScreen = () => {
        var vid = videoRef.current;
        if (vid.requestFullscreen) {
          vid.requestFullscreen();
        } else if (vid.msRequestFullscreen) {
          vid.msRequestFullscreen();
        } else if (vid.mozRequestFullScreen) {
          vid.mozRequestFullScreen();
        } else if (vid.webkitRequestFullscreen) {
          vid.webkitRequestFullscreen();
        }
      };

    return (
        <>
        <figure className={`${margins}  media-wrapper`}>
            <div className={`${styles['video-card-container']}`}>
                <figure className={styles['video-figure']}>
                    <div className={`video-wrapper ${type}`}>
                        <video 
                        className={styles[type]}
                        id={id}
                        preload='auto' 
                        autoPlay={false} 
                        muted 
                        loop
                        ref={videoRef}
                        onClick={handleStopClick}
                        onLoadedData={() => {
                            setVideoLoaded();
                        }}>
                            {children}                        
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </figure> 
                <div className={styles['footer-container']}>
                    <div className={styles['header-container']}>
                    {/* <div className={styles['label-wrapper']}>
                        <label className={styles['label-type']}>Video</label>
                        <span className={styles['dividing-dot']}>•</span>
                        <label className={styles['label-type']}>Interface</label>
                    </div> */}
                    <div className={styles['title-wrapper']}>
                        <h5 className={styles['title']}>{title}</h5>
                    </div>
                </div>
                    <div className={styles['buttons-wrapper']}>
                        <button className={`icon-btn toned-btn ${styles[`btn-stop`]}`} onClick={handleStopClick}>
                            <span className='material-symbols-rounded'>{`${play ? `pause` : `play_arrow` }`}</span>
                        </button>
                        <div className={styles['btn-slider']}>
                            {loaded ? 
                            <input 
                                className={`range-slider ${styles['video-slider']}`}
                                type='range' 
                                value={videoTime} 
                                min={0}  
                                max={videoDuration} 
                                onChange={(e) => {handleSeek(e.target.value)}}/>
                            : null }

                            <div className={styles['video-timer']}>
                                <span className={styles['timer-stat']}>{videoTimeDisplay}</span> 
                                <span className={styles['stat-slash']}> / </span>
                                <span className={styles['timer-stat']}>{videoDurationDisplay}</span>
                            </div>
                        </div>
                        <button className={`icon-btn ${styles[`btn-fullscreen`]}`} onClick={toggleFullScreen}>
                            <span className='material-symbols-rounded'>fullscreen</span>
                        </button>
                    </div>
                </div>
            </div>   
            <figcaption className={styles['video-player-figcaption']}>{caption}</figcaption>
        </figure>
        </>
    )
}

export default VideoPlayerCard