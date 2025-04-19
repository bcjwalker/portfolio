import React from "react";
import {useState, useRef, useEffect} from 'react'
import ScrollingText from "web-scrolling-text/react";

// Style
import styles from './Intro.module.css';

// Imgs
import imgSignMain from '../assets/img-my-signature-main.png';

function Intro() {
    const scrollTxtRef = useRef();

    /* No longer needed with new scroll text module
    const [ tagline, setTagline ] = useState('expression and simplicity');
    useEffect(() => {
        setTimeout(()=>{
            setTagline('derp')
        }, 4250)
    }, [tagline]) */

    return (
        <>
        {/* Intro holds two columns, titles + graphic and one row, a short about */}
        <div id='main-intro-container'> 
            {/* Graphics background holds my parallax background */}
            <div id={styles['intro-graphicbg']}>

            </div>
            
            {/* Titles holds signature, print name, job title and a short description */}
            <div id={styles['intro-titles']}>
                {/* Names holds signature and print name */}
                <div id={styles['intro-titles-names']}>
                    <img id={styles['Intro']} src={imgSignMain} />
                    <h2> Benjamin Walker </h2>
                </div>
                <h3 className={styles['intro-titles-role']}> UI+UX <br/> Designer </h3>
                <p className={styles['intro-titles-desc']}> 
                    2025 graduate <strong>Design Computing</strong> student 
                    <br/> 
                    from the <strong>University of Sydney</strong> 
                </p>
            </div>

            <div id={styles['intro-graphicbg']}></div>
            {/* Graphics foreground holds quote */}
            <div id={styles['intro-graphicfg']}>
                {/* Box for quote, no ids for cleanliness */}
                <div id={styles['intro-graphic-quotebox-container']}>
                    <blockquote id={styles['intro-graphic-quotebox']}> 
                        I'm a Sydney-based designer captivated by balance between
                        <ScrollingText className={styles['rotating-text']} ref={scrollTxtRef} 
                        options={{enterAnimation:'flipEnter', exitAnimation:'flipExit' }}>
                        <div className={styles['rotating-text']}>expression and<br/>simplicity</div>
                        <div className={styles['rotating-text']}>novelty and<br/>familiarity</div>
                        <div className={styles['rotating-text']}>form and<br/>function</div>
                        </ScrollingText>
                    </blockquote>
                </div>
            </div>
        </div>
        </>
    )
}

export default Intro