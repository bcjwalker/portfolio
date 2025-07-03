// Components
import MatSymbol from '../utils/MatSymbol'

import { Fade } from 'react-awesome-reveal'
import { fadeInPushUp, fadeInPushDown } from '../utils/Animations.jsx'

// Style
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer>
        <div className={`${styles['footer-container']}`} id={'footer-container-global'}>
          <Fade keyframes={fadeInPushDown} duration={250} triggerOnce delay={0} cascade damping={0.1}>
            <div id={styles['footer-text-container']}>
              <div id={styles['msg-wrapper']}>
                <p> You've reached the end of my website; </p>
                <p> Thank you so much for making it thus far! </p>
              </div>
              <div id={styles['details-wrapper']}>
                <label className={styles['copyright-wrapper']}>
                  <MatSymbol type='material-symbols-rounded' icon='copyright'/>
                  2024-present Benjamin Walker. Built with React.
                </label>
              </div>
            </div>
            <div>
              <button
                className={`icon-text-btn toned-btn`}
                onClick={() =>
                  document.querySelector('a#intro')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }>
                <MatSymbol type='material-symbols-rounded' icon='arrow_upward'/>
                <label>Back to top</label>
              </button>
            </div>
          </Fade>
        </div>
      </footer>
    </>
  )
}
