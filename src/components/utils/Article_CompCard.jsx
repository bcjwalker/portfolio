import React, { useRef, useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

// Compare slider
import { ReactCompareSlider, ReactCompareSliderHandle, styleFitContainer } from 'react-compare-slider'

// Animations :)
import { Fade } from 'react-awesome-reveal'
import { fadeInPushDown } from '../utils/Animations.jsx'

// Styles
import styles from './Article_CompCard.module.css'

export default function CompCard(props) {
  console.log(props)
  // Basic stuff
  const [activeComp, setActiveComp] = useState('compA')
  const [labelOpacity, setLabelOpacity] = useState(1)
  const labelStyle = {
    fontSize: '.75rem',
    position: 'absolute',
    padding: '.275rem',
    color: 'hsl(090, 65%, 100%)',
    opacity: labelOpacity,
    borderRadius: '.25rem',
    backgroundColor: 'hsla(042, 8%, 35%, 0.55)',
    transition: 'opacity 0.125s ease-out',
  }

  // Thumb gallery button
  const renderThumbButton = (comp, id) => {
    return (
      // If our
      <button
        className={`${styles['thumb-btn']} ${activeComp == id ? `${styles['active']}` : null}`}
        onClick={() => setActiveComp(id)}>
        <img className={styles['thumb-btn-img']} src={comp[0]} />
      </button>
    )
  }

  // Button with thumbs
  const compEntries = Object.entries(props)
  const compBtnList = compEntries.map((link, index) => renderThumbButton(compEntries[index][1], link[0]))

  return (
    <>
      <Fade keyframes={fadeInPushDown} duration={375} triggerOnce delay={100} cascade damping={0.1}>
        <div className={`project-compare-container extra-margins ${styles['compare-container']}`}>
          {/* Compare slider figure */}
          <figure className={`media-wrapper extra-margins ${styles['compare-media-wrapper']}`}>
            <div className="video-wrapper bordered outline-3">
              <ReactCompareSlider
                transition="0.2s ease-out"
                onPointerDown={() => setLabelOpacity(0)}
                onPointerUp={() => setLabelOpacity(1)}
                // Handle w/ before/after labels
                handle={
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      height: '100%',
                    }}>
                    <ReactCompareSliderHandle
                      buttonStyle={{
                        boxShadow:
                          '0px 1px 2px 0px hsla(090, 20%, 20%, 0.25), 0px 1px 2px 1px hsla(090, 20%, 20%, 0.125)',
                        borderWidth: 3,
                        borderColor: 'hsl(090, 0%, 98%)',
                        borderStyle: 'solid',
                        color: 'hsl(090, 65%, 98%)',
                      }}
                      linesStyle={{
                        boxShadow:
                          '0px 1px 2px 0px hsla(090, 20%, 20%, 0.25), 0px 1px 2px 1px hsla(090, 20%, 20%, 0.125)',
                        opacity: 1,
                        width: 3,
                        color: 'hsl(090, 0%, 98%)',
                      }}
                    />
                    <div
                      style={{
                        ...labelStyle,
                        translate: '-117% 0',
                        left: 0,
                      }}>
                      Before
                    </div>
                    <div
                      style={{
                        ...labelStyle,
                        translate: '120% 0',
                        right: 0,
                      }}>
                      After
                    </div>
                  </div>
                }
                itemOne={props[activeComp][1]()}
                itemTwo={props[activeComp][2]()}
              />
            </div>
            <figcaption>{props[activeComp][3]}</figcaption>
          </figure>
          {/* Buttons */}
          <div className={`text-margins project-buttons-wrapper ${styles['buttons-wrapper']}`}>
            {compBtnList}
          </div>
        </div>
      </Fade>
    </>
  )
}
