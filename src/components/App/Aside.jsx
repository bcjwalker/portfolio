import { useState, useEffect } from 'react';

// Style
import styles from '../../scss/modules/App/Aside.module.scss';

// Imgs
import imgSelfie from '../../assets/img-me2022.png';

function Aside () {
    const [asideOpen, updateAsideOpen] = useState(true);
    const handleAsideUpdate = () => {
        updateAsideOpen(asideOpen => !asideOpen)
    }

    return (
        <>
            <aside>
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
                        className={`${asideOpen ? 'iconbtn'  : ` iconbtn ${styles['closed']}`}`}> 
                            <span className='material-symbols-rounded'> expand_less </span>
                        </button>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default Aside