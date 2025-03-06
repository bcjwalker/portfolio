// Style
import styles from '../scss/modules/Intro.module.scss';

// Imgs
import imgSignMain from '../assets/img-my-signature-main.png';

function Intro() {
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

            {/* Graphics foreground holds quote */}
            <div id={styles['intro-graphicfg']}>
                {/* Box for quote, no ids for cleanliness */}
                <div id={styles['intro-graphic-quotebox']}> 
                    <h3> ❝ </h3>
                    <blockquote> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </blockquote>
                </div>
            </div>
        </div>
        </>
    )
}

export default Intro