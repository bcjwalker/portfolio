import { useState, useEffect } from 'react';

// Styles
import styles from './Contact.module.css';

// Imgs
import imgSelfie from '../assets/img-me2022.png';

function Contact() {
        const [asideOpen, updateAsideOpen] = useState(true);
        const handleAsideUpdate = () => {
            updateAsideOpen(asideOpen => !asideOpen)
        }
    return (
        <>       
        <div id="main-contact-container">
            <div id="contact-box">
                <h1 className="main-section-h1"> Contact </h1>
            </div>
        </div>
        <div id={styles['aside-infobox']}>
            {/* Aside head div */}
            <div id={styles['aside-infobox-head']} className={styles['closed']}>
                <h4> Read all about me </h4> 
            </div>
            {/* Aside content div */}
            <div id={styles['aside-infobox-content']} 
            className={`${asideOpen ? null : styles['closed'] }`}>
                <img id={styles['aside-infobox-avatar']} src={imgSelfie} />
                <p className={styles['aside-infobox-p']}> …or, maybe a single picture will do. </p>    
            </div>
            {/* Aside expand/hide button div */}
            <div id={styles['aside-infobox-btn-container']}>
                <button id={styles['aside-infobox-btn']}
                onClick={handleAsideUpdate}
                className={`${asideOpen ? 'icon-btn'  : ` icon-btn ${styles['closed']}`}`}> 
                    <span className='material-symbols-rounded'> expand_less </span>
                </button>
            </div>
        </div>
        </>
    )
}

export default Contact