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
        </>
    )
}

export default Contact