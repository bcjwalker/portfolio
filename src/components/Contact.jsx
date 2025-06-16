import { useState, useEffect } from 'react'
// Animations :)
import { Fade } from 'react-awesome-reveal'
import { fadeInPushUp, fadeInPushRight, fadeInPushDown } from './utils/Animations.jsx'

// Styles
import styles from './Contact.module.css'

// Imgs
import imgSelfie from '../assets/img-contact-me.png'
import imgLogoIg from '../assets/img-contact-ig.png'
import imgLogoLnkdIn from '../assets/img-contact-lnkdin.png'
import imgLogoFb from '../assets/img-contact-fb.png'

function Contact() {
  const [asideOpen, updateAsideOpen] = useState(true)
  const handleAsideUpdate = () => {
    updateAsideOpen((asideOpen) => !asideOpen)
  }
  return (
    <>
      <div id="main-contact-container" className="main-section">
        <div id={styles['contact-graphicbg']} />
        <div id={styles['contact-container']}>
          <div id={styles['contact-header-wrapper']}>
            <h1 className="main-section-h1"> Contact </h1>
            {/* <p className='h1-sub'> Get in touch </p> */}
          </div>
          <div id={styles['contact-content-container']}>
            <Fade keyframes={fadeInPushDown} duration={375} triggerOnce delay={150}>
              <div id={styles['content-left-container']}>
                <div id={styles['avatar-container']}>
                  <img src={imgSelfie} />
                </div>
                <div id={styles['title-container']}>
                  <h2>
                    Benjamin
                    <br />
                    Walker
                  </h2>
                  <div id={styles['details-wrapper']}>
                    <label>Freshly graduated</label>
                    <h4>UI+UX Designer</h4>
                    {/* <span>/front-end webdev</span> */}
                  </div>
                </div>
              </div>
            </Fade>
            <div id={styles['content-right-container']}>
              <Fade keyframes={fadeInPushRight} duration={500} triggerOnce delay={100} cascade damping={0.1}>
                <div id={styles['contacts-list-wrapper']}>
                  <div id={styles['contacts-formal']} className={styles['contacts-wrap']}>
                    <a
                      className={`icon-text-btn ${styles['contact-entry-wrapper']}`}
                      href="mailto:bwal9030@gmail.com"
                      target="_blank">
                      <span className="material-symbols-rounded"> mail </span>
                      <label>bwal9030@gmail.com</label>
                    </a>
                    <a
                      className={`icon-text-btn ${styles['contact-entry-wrapper']}`}
                      href="https://www.linkedin.com/in/benjamin-walker-1200/"
                      target="_blank">
                      <div className={styles['img-wrapper']}>
                        <img className={styles['logo-img']} src={imgLogoLnkdIn} />
                      </div>
                      <label>/benjamin-walker-1200</label>
                    </a>
                  </div>
                  <div id={styles['contacts-informal']} className={styles['contacts-wrap']}>
                    <a
                      className={`icon-text-btn ${styles['contact-entry-wrapper']}`}
                      href="https://www.facebook.com/benjw2001/"
                      target="_blank">
                      <div className={styles['img-wrapper']}>
                        <img className={styles['logo-img']} src={imgLogoFb} />
                      </div>
                      <label>@benjw2001</label>
                    </a>
                    <a
                      className={`icon-text-btn ${styles['contact-entry-wrapper']}`}
                      href="https://www.instagram.com/benjw2001/"
                      target="_blank">
                      <div className={styles['img-wrapper']}>
                        <img className={styles['logo-img']} src={imgLogoIg} />
                      </div>
                      <label>@benjw2001</label>
                    </a>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
