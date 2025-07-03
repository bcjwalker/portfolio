import { useRef, useState, useEffect } from 'react'

// Components
import MatSymbol from '../MatSymbol.jsx'

// Animations :)
import { Fade } from 'react-awesome-reveal'
import { fadeInPushUp } from '../Animations.jsx'

// Styles
import styles from './InfoCard.module.css'

export default function InfoCard() {
  const [open, setOpen] = useState(true)
  const handleClick = () => setOpen((open) => !open)

  return (
    <>
      <div className={`${open ? null : `${styles[`closed`]}`} ${styles['project-infocard-container']}`}>
        <div className={styles['left-wrapper']}>
          <MatSymbol type='material-symbols-rounded' classes={styles['icon-info']} icon='frame_inspect'/>
          <div className={styles['text']}>
            <h4>Image zooming</h4>
            <p>
              Click on any image to view it in <strong>full-screen mode</strong>.
            </p>
          </div>
        </div>
        <button className={`icon-btn ${styles['btn-close']}`} onClick={handleClick}>
          <MatSymbol type='material-symbols-sharp' icon='close'/>
        </button>
      </div>
    </>
  )
}
