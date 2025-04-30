import React, { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
// Animations :)
import { Fade } from "react-awesome-reveal";
import { fadeInPushUp } from "../utils/Animations.jsx";

// Styles
import styles from "./Article_ImgViewer.module.css";

function FullScreenImg ( {clicky, imgSrc, classN} ) {
    return (
        <>
        <div className={`${styles['open-overlay']} dialog-overlay`} >
            <div className={`${styles['btn-close-wrapper']}`}>
                <button className={`${styles['btn-close']} icon-btn overlay-btn`} onClick={() => clicky()}>
                    <span className='material-symbols-sharp'> close </span>
                </button>
            </div>
            <div className={styles['img-container']}  onClick={() => clicky()}>
                <img src={imgSrc} className={`${classN} filter-shadow2 ${styles['full']}`}/>
            </div>
        </div>
        </>
    )
}

export default function ImgViewer( { imgSrc, classN } ) {
    // Basic stuff
    const [open, setOpen] = useState(false);

    const handleClick = () => (
        setOpen(open => !open)
    );

    return (
        <>
        <img src={imgSrc} className={`${classN} ${styles['zoom-on-me']} ${open ? `${styles['opened']}` : null}`} onClick={handleClick}/>
        {open && createPortal(
            <FullScreenImg clicky={handleClick} imgSrc={imgSrc} classN={classN}/>,
            document.body
        )}
        </>
    )
}
