import { useRef, useState, useEffect } from 'react'

// Components
import MatSymbol from '../MatSymbol.jsx'

// Styles
import styles from './WipCard.module.css'

export function WipCard() {
  return (
    <>
      <div className={`${styles['projects-wip-announce-container']} extra-margins`}>
        <MatSymbol type='material-symbols-rounded' icon='construction'/>

        <div className={styles['left-wrapper']}>
          <label>Article under construction</label>
          <p>Below are some previews from the original project</p>
        </div>
      </div>

      <hr className={`${styles['projects-wip-announce-hr']} extra-margins`} />
    </>
  )
}

export function WipCardFooter() {
  return (
    <>
      <div className={styles['projects-wip-footer-container']}>
        <p>Article t</p>
      </div>
    </>
  )
}
