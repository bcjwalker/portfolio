import { useState, useEffect } from 'react'

// Style
import styles from './Aside.module.css'

// Imgs
import imgSelfie from '../../assets/img-me2025.png'
import pdfResume from '../../assets/BCJWalker_2025_Resume.pdf'

function Aside() {
  const [asideOpen, updateAsideOpen] = useState(false)
  const handleAsideUpdate = () => {
    updateAsideOpen((asideOpen) => !asideOpen)
  }
  useEffect(() => {
    if (sessionStorage.getItem('is_first_visit') != 'false') {
      setTimeout(() => {
        updateAsideOpen(true)
      }, 650)
    }
  })

  return (
    <>
      <aside>
        <div id={styles['aside-infobox']}>
          {/* Aside head div */}
          <div id={styles['aside-infobox-head']} className={styles['closed']}>
            <h4> Read all about me </h4>
          </div>
          {/* Aside content div */}
          <div id={styles['aside-infobox-content']} className={`${asideOpen ? null : styles['closed']}`}>
            <img id={styles['aside-infobox-avatar']} src={imgSelfie} />
            <p className={styles['aside-infobox-p']}> …or, maybe a single picture will do. </p>
            <a
              href={pdfResume}
              target="_blank"
              className={`docket med icon outline-btn outline-3 ${styles['resume-link']}`}>
              <span className="material-symbols-rounded"> open_in_new </span>
              <label>View resumé</label>
            </a>
          </div>
          {/* Aside expand/hide button div */}
          <div id={styles['aside-infobox-btn-container']}>
            <button
              id={styles['aside-infobox-btn']}
              onClick={handleAsideUpdate}
              className={`${asideOpen ? 'icon-btn' : ` icon-btn ${styles['closed']}`}`}>
              <span className="material-symbols-sharp"> expand_less </span>
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Aside
