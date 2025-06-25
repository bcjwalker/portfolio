// Style
import styles from './Header.module.css'
import { useState, useEffect } from 'react'

// Imgs
import imgSignHead from '../../assets/img-my-signature-head.png'

function Header({ switchNavOpen }) {
  // Lovely scroll tracking from https://stackoverflow.com/questions/62497110/detect-scroll-direction-in-react-js/62497293#62497293
  // Check: can this be cut down?
  const [headerOpen, setHeaderOpen] = useState(false)
  useEffect(() => {
    const threshold = 0
    let lastScrollY = window.scrollY
    let ticking = false

    const updateHeaderOpen = () => {
      const scrollY = window.scrollY

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false
        return
      }
      setHeaderOpen(scrollY < 200 ? false : true)
      lastScrollY = scrollY > 0 ? scrollY : 0
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHeaderOpen)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [headerOpen])

  return (
    <>
      {/* Header, only appears after user has scrolled past signature img */}
      {/* UNDONE: replaced by view anims
        <header className={`${headerOpen ? styles['fade-out'] : styles['fade-in'] }`} > */}

      <header className={`${headerOpen ? styles['fade-in'] : styles['fade-out']}`}>
        {/* Hamburger menu
         * Persistent, remains on top of header
         * Only appears in mobile width */}
        <button className="icon-btn" id={styles['head-hamburger-btn']} onClick={() => switchNavOpen()}>
          <span className="material-symbols-sharp"> menu </span>
        </button>
        <div id={styles['header-headline-wrapper']}>
          <img className={styles['headline-icon']} src={imgSignHead} />
          <p className={styles['headline-text']}> Benjamin Walker </p>
        </div>
      </header>
    </>
  )
}

export default Header
