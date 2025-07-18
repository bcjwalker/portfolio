import { useState, useRef, useEffect } from 'react'
import ScrollingText from 'web-scrolling-text/react'
// import { MeshGradient } from '@blur-ui/mesh-gradient';

// Components
import Aside from './App/Aside';

// Style
import styles from './Intro.module.css';

// Imgs
import imgSignMain from '../assets/img-my-signature-main.png';

function Intro() {
  const scrollTxtRef = useRef()

  /* No longer needed with new scroll text module
	const [ tagline, setTagline ] = useState('expression & simplicity');
	useEffect(() => {
		setTimeout(()=>{
			setTagline('derp')
		}, 4250)
	}, [tagline]) */

  // const colors = {
  //     color1: '#f9f6f1',
  //     color2: '#f4f0e7',
  //     color3: '#e2ddcf',
  //     color4: '#ffffff'
  // }

  return (
    <>
      {/* Intro holds two columns, titles + graphic & one row, a short about */}
      <div id="main-intro-container" className="main-section">
        {/* Graphics background holds my parallax background */}
        <div id={styles['intro-graphicbg']}></div>

        {/* Titles holds signature, print name, job title & a short description */}
        <div id={styles['intro-titles']}>
          {/* Names holds signature & print name */}
          <div id={styles['intro-titles-names']}>
            <img id={styles['Intro']} src={imgSignMain} />
            <h2> Benjamin Walker </h2>
          </div>
          <div id={styles['intro-titles-dlts-wrap']}>
            {/* <label className={styles['intro-titles-location']}>
              <span className={`${styles['location-pin']} material-symbols-rounded`}> home_pin </span>
            </label> */}
            <h3 className={styles['intro-titles-role']}>
              {' '}
              Product <br /> Designer{' '}
            </h3>
            {/* <p id={styles['intro-titles-role-add']} className={styles['intro-titles-desc']}>
              /front-end web dev
            </p> */}
            <p className={styles['intro-titles-desc']}>
              Recent <strong>Design Computing</strong> graduate from the <strong>University of Sydney</strong>
            </p>
            <Aside dialogType={true}/>
          </div>
        </div>


        {/* <MeshGradient colors={colors} className={styles['intro-graphic-mesh']} animationDuration={200}/> */}

        <div id={styles['intro-graphicbg']}></div>
        {/* Graphics foreground holds quote */}
        <div id={styles['intro-graphicfg']}>
          {/* Box for quote, no ids for cleanliness */}
          <blockquote id={styles['intro-graphic-quotebox']}>
            I design
            <div className={styles['rotating-text']}>
              <ScrollingText
                ref={scrollTxtRef}
                options={{
                  enterAnimation: 'flipREnter',
                  exitAnimation: 'flipRExit',
                  interval: 3500,
                }}>
                <div className={styles['rotating-text']}>interfaces</div>
                <div className={styles['rotating-text']}>experiences</div>
                <div className={styles['rotating-text']}>applications</div>
                <div className={styles['rotating-text']}>products</div>
              </ScrollingText>
            </div>
            balancing
            <div className={styles['rotating-text']}>
              <ScrollingText
                ref={scrollTxtRef}
                options={{
                  enterAnimation: 'flipLEnter',
                  exitAnimation: 'flipLExit',
                  interval: 3500,
                }}>
                <div className={styles['rotating-text']}>
                  expression &<br />
                  simplicity
                </div>
                <div className={styles['rotating-text']}>
                  novelty &<br />
                  familiarity
                </div>
                <div className={styles['rotating-text']}>
                  whimsy &<br />
                  utility
                </div>
              </ScrollingText>
            </div>
          </blockquote>
        </div>
      </div>
    </>
  )
}

export default Intro
