import { Fade } from "react-awesome-reveal";
import { fadeInPushUp, fadeInPushDown } from "../utils/Animations.jsx";

// Style
import styles from './Footer.module.css';

export default function Footer () {
    return (
        <>
        <footer>
            <div className={`${styles['footer-container']}`} id={'footer-container-global'}>
                <Fade keyframes={fadeInPushDown} duration={375} triggerOnce delay={5} cascade damping={0.1}>
                <div id={styles['footer-text-container']}>
                    <div id={styles['msg-wrapper']}>
                        <p> You've reached the end of my website; </p>
                        <p> Thank you so much for making it thus far! </p>
                    </div>
                    <div id={styles['details-wrapper']}>
                        <div className={styles['copyright-wrapper']}>
                            <span className='material-symbols-rounded'> copyright </span>
                            <label>2024-present Benjamin Walker. Built with React.</label>
                        </div>
                    </div>
                </div>
                <div>
                    <button className={`icon-text-btn toned-btn`}
                         onClick={() => document.querySelector('a#intro')?.scrollIntoView({behavior: 'smooth', block: 'start'})}>
                        <span className='material-symbols-rounded'> arrow_upward </span>
                        <label>Back to top</label>
                    </button>
                </div>
                </Fade>
            </div>
        </footer>
        </>
    )
}