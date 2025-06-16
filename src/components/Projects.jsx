import { Link, useOutletContext, useLocation } from 'react-router'
import { useState, useEffect, useRef } from 'react'
import { Fade } from 'react-awesome-reveal'
import { nullAnim, fadeInPushRight, fadeInPushDown } from './utils/Animations.jsx'

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
    fadeDelay = (delay + 1) * 150
  }

  console.log(returning)

  if (returning) {
    return (
      <>
        <Fade keyframes={fadeInPushDown} duration={500} triggerOnce delay={fadeDelay}>
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

  return (
    <>
      <RenderCondCardFade delay={index} returning={returningCheck}>
        <Link
          className={`${styles['projects-card']}`}
          key={props.id}
          to={`/projects/${props.dir}`}
          viewTransition
          style={{ viewTransitionName: `post-card-${props.dir}` }}>
          <div className={styles['projects-card-thumb']}>
            <div className={styles['card-details-meta-container']}>
              <div className={`projects-card-tag ${styles['details-year']} ${styles['thumb-tag']}`}>
                <label>{props.date}</label>
              </div>
              <div className={styles['details-taglist-wrapper']}>{tagsList}</div>
            </div>
            <img className={styles['projects-card-thumb-img']} src={projectImgs[props.thumb]} />
          </div>
          <div className={styles['projects-card-details-container']}>
            <div className={styles['projects-card-details-title']}>
              <h3 style={{ viewTransitionName: `post-title-${props.dir}` }}> {props.title} </h3>
            </div>
            <span className={styles['projects-card-details-desc']}> {props.desc} </span>
          </div>
        </Link>
      </RenderCondCardFade>
    </>
  )
}
// Simple tag component
function RenderProjectCardTag(key, value) {
  if (key == 'recent') {
    let icon = value == 'New' ? 'star' : 'construction'
    let status = value == 'WIP' ? 'force-open' : null
    return (
      <>
        <button
          className={`${styles['thumb-tag']} ${styles['green']} ${styles[status]} projects-card-tag tag-icontext tag-recent`}>
          <span className="material-symbols-rounded"> {icon} </span>{' '}
          <label className={`${styles['tag-desc']}`}>{value}</label>
        </button>
      </>
    )
  }
  if (key == 'links') {
    return (
      <>
        <button
          className={`${styles['thumb-tag']} ${styles['green']} projects-card-tag tag-icontext tag-links`}>
          <span className="material-symbols-rounded"> attach_file </span>{' '}
          <label className={`${styles['tag-desc']}`}>{value}</label>
        </button>
      </>
    )
  }
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
              <span className="material-symbols-rounded"> school </span>
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
