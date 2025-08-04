import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

// Components
import MatSymbol from '../utils/MatSymbol'

// Style
import styles from './Aside.module.css'

// Imgs
import imgSelfie from '../../assets/img-me2025.png'
import imgSelfieSmall from '../../assets/img-me2025-small.png'
import pdfResume from '../../assets/BCJWalker_2025_Resume.pdf'

function Aside(props) {
  return (
    <>
      {!props.dialogType ? 
      <aside>
        <Infobox dialogType={props.dialogType}/>
      </aside> : 
      <Infobox dialogType={props.dialogType}/>}
    </>
  );
};

function Infobox(props) {
  const [asideOpen, updateAsideOpen] = useState(false);
  const handleAsideUpdate = () => {
    updateAsideOpen((asideOpen) => !asideOpen)
  };

  useEffect(() => {
    if (sessionStorage.getItem('is_first_visit') != 'false') {
      setTimeout(() => {
        updateAsideOpen(true)
      }, 650)
    }
  });

  return (
    <>
      {!props.dialogType ? 
      <>
      <div id={styles['aside-infobox']} className={`${props.dialogType ? styles['infobox-type-dialog'] : null}`}>
        {/* Aside head */}
        <div id={styles['aside-infobox-head']} className={styles['closed']}>
          <h4> Read all about me </h4>
        </div>
        {/* Aside content */}
        <div id={styles['aside-infobox-content']} className={`${asideOpen ? null : styles['closed']}`}>
          <img id={styles['aside-infobox-avatar']} src={imgSelfie} />
          <p className={styles['aside-infobox-p']}> …or, maybe a single picture will do. </p>
          <a
            href={pdfResume}
            target="_blank"
            className={`docket med icon outline-btn outline-3 ${styles['resume-link']}`}>
            <MatSymbol type='material-symbols-rounded' icon='open_in_new'/>
            <label>View resumé</label>
          </a>
        </div>
        {/* Aside expand/hide button */}
        <div id={styles['aside-infobox-btn-container']}>
          <button
            id={styles['aside-infobox-btn']}
            onClick={handleAsideUpdate}
            className={`${asideOpen ? 'icon-btn' : `icon-btn ${styles['closed']}`} ${props.dialogType ? styles['aside-infobox-dialog-btn'] : null}`}>
            <MatSymbol type='material-symbols-sharp' icon='expand_less'/>             
          </button>
        </div>
      </div>
      </> : 
      <>
      {/* Aside expand/hide button */}
      <div id={styles['infobox-btn-wrapper']}>
        <div id={styles['aside-infobox-btn-container']}>
          <button
            id={styles['aside-infobox-btn']}
            onClick={handleAsideUpdate}
            className={`${asideOpen ? null : `${styles['closed']}`} ${props.dialogType ? styles['aside-infobox-dialog-btn'] : null}`}>
            <img className={styles['infobox-btn-img']} src={imgSelfieSmall} />
          </button>
        </div>
      </div>
      </> }
      {asideOpen && props.dialogType ? <InfoboxDialog clicky={handleAsideUpdate}/> : null}
    </>
  );
};

function InfoboxDialog({clicky}) {
  
  return (
    createPortal(
    <>
      {/* Aside dialog */}
      <dialog id={styles['infobox-dialog-wrapper']}>
        <div className={`${styles['btn-close-wrapper']}`}>
          <button className={`${styles['btn-close']} icon-btn overlay-btn`} onClick={() => clicky()}>
            <MatSymbol type='material-symbols-sharp' icon='close'/>
          </button>
        </div>
        <div id={styles['aside-infobox-content']}>
          <h4> Read all about me </h4>
          <img id={styles['aside-infobox-avatar']} src={imgSelfie} />
          <p className={styles['aside-infobox-p']}> …or, maybe a single picture will do. </p>
          <a
            href={pdfResume}
            target="_blank"
            className={`docket med icon outline-btn outline-3 ${styles['resume-link']}`}>
            <MatSymbol type='material-symbols-rounded' icon='open_in_new'/>
            <label>View resumé</label>
          </a>
        </div>
      </dialog>
    </>, document.body)
  );
};

export default Aside
