import React, { useRef, useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

// Components
import MatSymbol from '../MatSymbol.jsx'

// Animations :)
import { Fade } from 'react-awesome-reveal'
import { fadeInPushUp } from '../Animations.jsx'

// Styles
import styles from './ImgViewer.module.css'

function FullScreenImg({ clicky, imgSrc, classN }) {
  return (
    <>
      <dialog open className={`${styles['open-overlay']} dialog-overlay`}>
        <div className={`${styles['btn-close-wrapper']}`}>
          <button className={`${styles['btn-close']} icon-btn overlay-btn`} onClick={() => clicky()}>
            <MatSymbol type='material-symbols-sharp' icon='close'/>
          </button>
        </div>
        <div className={styles['img-container']} onClick={() => clicky()}>
          <img src={imgSrc} className={`${classN} filter-shadow2-dark ${styles['full']}`} />
        </div>
      </dialog>
    </>
  )
}

export default function ImgViewer({ imgSrc, classN }) {
  // Basic stuff
  const [open, setOpen] = useState(false)

  const handleClick = () => setOpen((open) => !open)

  return (
    <>
      <img
        src={imgSrc}
        className={`${classN} ${styles['zoom-on-me']} ${open ? `${styles['opened']}` : null}`}
        onClick={handleClick}
      />
      {open &&
        createPortal(<FullScreenImg clicky={handleClick} imgSrc={imgSrc} classN={classN} />, document.body)}
    </>
  )
}
