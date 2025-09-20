import { Link, useOutletContext, useLocation } from 'react-router'
import { useState, useEffect, useRef } from 'react'
import { Fade } from 'react-awesome-reveal'
import { nullAnim, fadeInPushRight, fadeInPushDown } from './utils/Animations.jsx'

// Components
import MatSymbol from './utils/MatSymbol'

// Styles
import styles from './Projects.module.css'

// Get project DB
import { projectData } from '../assets/projects-db.js'
import fade from 'web-scrolling-text/modules/fade'
// First project gets emphasis in card grid
const leadProject = projectData[0]
// Others get smaller cards
const trailingProjects = projectData.slice(1)

// Glob file paths (https://vite.dev/guide/features#glob-import)
const projectImgs = import.meta.glob('@assets/projects/**/*.jpg', {
  eager: true,
  query: '?url',
  import: 'default',
})
console.log(projectImgs)

// Conditionally render card fade-in anim
function RenderCondCardFade({ children, delay, returning }) {
  // Lead card returns null, and trailing cards return their array index
  // So apply delay only if not null
  let fadeDelay
  if (delay == null) {
    fadeDelay = 0
  } else {
    fadeDelay = (delay + 1) * 50
  }

  console.log(returning)

  if (returning) {
    return (
      <>
        <Fade keyframes={fadeInPushDown} duration={375} triggerOnce delay={fadeDelay}>
          {children}
        </Fade>
      </>
    )
  } else {
    return <> {children} </>
  }
}

// Render card with project info as props
function RenderProjectCard(props, index, returningCheck) {
  // Render tags
  const tagsProps = props.cardTags
  let tagsList = []
  for (const [key, value] of Object.entries(tagsProps)) {
    tagsList.push(RenderProjectCardTag(key, value))
  }
  let tagsListCallout = []
  for (const [key, value] of Object.entries(tagsProps)) {
    tagsListCallout.push(RenderProjectCardTag(key, value, 'callout'))
  }

  return (
    <>
      <RenderCondCardFade delay={index} returning={returningCheck}>
        <Link
          className={`${styles['project-card-container']}`}
          style={{ viewTransitionName: `post-card-${props.dir}` }} key={props.id}
          to={`/projects/${props.dir}`} viewTransition>

          {/* Thumb wrapper with image and tags */}
          <div className={styles['card-thumb-wrapper']}>
            {/* At the top of the thumb, draw little metadata tags */}
            <div className={styles['thumb-taglist-wrapper']}>
              {/* Year + info */}
              <div className={styles['taglist']}>
                <div className={`card-tag ${styles['details-year']} ${styles['thumb-tag']}`}>
                  <label>{props.date}</label>
                </div>
                {tagsList}
              </div>
              {/* Callouts */}
              <div className={styles['taglist']}>
                {tagsListCallout}
              </div>
            </div>
            {/* Thumb img */}
            <img className={styles['thumb-img']} src={projectImgs[props.thumb]} />
          </div>

          {/* Details text */}
          <div className={styles['card-details-wrapper']}>
            <div className={styles['details-title']}>
              <h3 style={{ viewTransitionName: `post-title-${props.dir}` }}> {props.title} </h3>
            </div>
            <span className={styles['details-desc']}> {props.desc} </span>
          </div>
        </Link>
      </RenderCondCardFade>
    </>
  )
}
// Simple tag component
// Key = tag | Value = tag text | Type = metadata type (left/right end of wrapper)
function RenderProjectCardTag(key, value, type) {
  let colour;
  let icon;
  let status;

  // Type is either:
  // null (default, left of tag wrapper)
  if (type !== 'callout') {
    if (key == 'recent') {
      return;
    }
    if (key == 'links') {
      icon='open_in_new'
    }
  }
  // callout (right of tag wrapper)
  if (type == 'callout') {
    colour = 'green';
    if (key == 'links') {
      return; 
    }
    if (key == 'recent') {
      icon = value == 'New' ? 'star' : 'construction'
      status = value == 'WIP' ? 'force-open' : null
    }
  }
  return (
    <>
      <button
        className={`${styles['thumb-tag']} ${colour} ${styles[status]} card-tag tag-icontext tag-links`}>
        <MatSymbol type='material-symbols-rounded' icon={icon}/>{' '}
        <label className={`${styles['tag-desc']}`}>{value}</label>
      </button>
    </>
  )
}

function Projects() {
  let location = useLocation()
  console.log(location)
  const sectionTopRef = useRef()

  // Check if we're returning from /projects/*
  let returningCheck = true
  if (location.state != null) {
    if (location.state.returning == true) {
      returningCheck = false
    }
  }
  // Use state to determine if we pull works section to top of viewport
  // on return from /projects/*
  useEffect(() => {
    if (location.state != null) {
      if (location.state.returning == true) {
        sectionTopRef.current.scrollIntoView({ behavior: 'instant' })
      }
    }
  })
  // Clear state after check
  window.history.replaceState({}, '')

  // Draw project cards as list of html objects
  const trailingCardsList = trailingProjects.map((project, index) =>
    RenderProjectCard(trailingProjects[index], index, returningCheck)
  )

  return (
    <>
      <a className="anchor" id="project-top" ref={sectionTopRef} />
      <div id={styles['main-projects']}>
        {/* Projects big grid, for my best works */}
        <div id={styles['projects-big']}>
          <div id={styles['projects-big-head-container']}>
            <h1 id={styles['projects-big-h1']} className="main-section-h1">
              {' '}
              Works{' '}
            </h1>
            <p className="h1-sub" id={styles['projects-big-desc']}>
              {' '}
              Browse the projects I'm most proud of{' '}
            </p>
          </div>
          <div id={styles['projects-little-head-container']}>
            <div className={styles['subhead-wrapper']}>
              <MatSymbol type='material-symbols-rounded' icon='school'/>
              <h2 id={styles['projects-uni-h2']} className="main-section-h2">
                {' '}
                University projects{' '}
              </h2>
            </div>
            {/* <p className='h2-sub'> Projects I've completed for uni </p> */}
          </div>
          {/* Cards carousel */}
          <div id={styles['projects-cardousel']}>
            {/* Wrap in a conditional fade-in which only occurs on first load */}
            <div id={styles['cardousel-lead']}>{RenderProjectCard(leadProject, null, returningCheck)}</div>
            <div id={styles['cardousel-trailing']}>{trailingCardsList}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
