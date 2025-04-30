import { Link, useOutletContext } from 'react-router';
import { useState, useEffect } from 'react';
import { Fade } from "react-awesome-reveal";
import { nullAnim, fadeInPushRight } from "./utils/Animations.jsx"

// Styles
import styles from './Projects.module.css';

// Get project DB
import { projectData } from '../assets/projects-db.js';
// First project gets emphasis in card grid
const leadProject = projectData[0];
// Others get smaller cards
const trailingProjects = projectData.slice(1);

// Glob file paths (https://vite.dev/guide/features#glob-import)
const projectImgs = import.meta.glob('@assets/projects/**/*.jpg', {eager: true, query: '?url', import: 'default'});
console.log(projectImgs);


// Conditionally render card fade-in anim
function RenderCondCardFade ( { children, type } ) {
    if (sessionStorage.getItem('is_first_render') === null) {
        console.log(sessionStorage.getItem('is_first_render'));
        return (
            <>
            <Fade className={`${styles[type]}`} keyframes={fadeInPushRight} duration={500} triggerOnce cascade damping={0.1}>
                {children}
            </Fade>
            </>
        )
    } else if (sessionStorage.getItem('is_first_render') === 'false') {
        return (
        <>
        <div className={`${styles[type]}`}>
            {children}
        </div>
        </>
        )
    }
}

// Render card with project info as props
function RenderProjectCard( { props } ) {
    console.log(props);
    const tagsProps = props.cardTags;
    console.log(tagsProps);
    let tagsList = [];
    for (const [key, value] of Object.entries(tagsProps)) {
        tagsList.push(RenderProjectCardTag(key, value));
    }

    // Check/set session storage to see if we play card fade-in anim or not
    useEffect(() => {
        if (sessionStorage.getItem('is_first_render') === null) {
            sessionStorage.setItem('is_first_render', 'false');
        }
    });

    return (
        <>
        <RenderCondCardFade>
            <Link className={`${styles['projects-card']}`} key={props.id} 
            to={`/projects/${props.dir}`} viewTransition style={{viewTransitionName: `post-card-${props.dir}`}}> 
                <div className={styles['projects-card-thumb']}>
                    <div className={styles['card-details-meta-container']}>
                        <div className={`projects-card-tag ${styles['details-year']} ${styles['thumb-tag']}`}>
                            <label>{props.date}</label>
                        </div>
                        <div className={styles['details-taglist-wrapper']}>
                            {tagsList}
                        </div>
                    </div>
                    <img className={styles['projects-card-thumb-img']} src={projectImgs[props.thumb]}/>
                </div>
                <div className={styles['projects-card-details-container']}> 
                    <div className={styles['projects-card-details-title']}>
                        <h3 style={{viewTransitionName: `post-title-${props.dir}`}}
                        > {props.title} </h3>  
                    </div>
                    <span className={styles['projects-card-details-desc']}
                    > {props.desc} </span>
                </div>
            </Link>
        </RenderCondCardFade>
        </>
    )
}
// Simple tag component
function RenderProjectCardTag( key, value ) {
    if (key == 'recent') {
        return (
            <>
            <button className={`${styles['thumb-tag']} ${styles['green']} projects-card-tag tag-icontext tag-recent`}>
                <span className='material-symbols-rounded'> star </span> <label className={`${styles['tag-desc']}`}>{value}</label> 
            </button>
            </>
        );
    } 
    if (key == 'links') {
        return (
            <>
            <button className={`${styles['thumb-tag']} ${styles['green']} projects-card-tag tag-icontext tag-links`}>
                <span className='material-symbols-rounded'> attach_file </span> <label className={`${styles['tag-desc']}`}>{value}</label> 
            </button>
            </>
        );
    }
}

// Render card with project info as props
function RenderProjectCardTrailing( props ) {
    return (
        <>
        <RenderProjectCard props={props}/>
        </>
    )
}
// Render card with project info as props
function RenderProjectCardLead( props ) {
    return (
        <>
        <RenderProjectCard props={props}/>
        </>
    )
}

function Projects() {
    // Draw project cards as list of html objects
    const leadCard = RenderProjectCardLead(leadProject);
    // Draw project cards as list of html objects
    const trailingCardsList = trailingProjects.map ( (project, index) =>
        RenderProjectCardTrailing(trailingProjects[index], index)
    );

    return (
        <>
        <div id={styles['main-projects']}>
        {/* Projects big grid, for my best works */}
        <div id={styles['projects-big']}>
            <div id={styles['projects-big-head-container']}>
                <h1 id={styles['projects-big-h1']}> Works </h1>
                <p className='h1-sub' id={styles['projects-big-desc']}> Browse the projects I'm most proud of </p>
            </div>
            {/* Cards carousel */}
            <div id={styles['projects-cardousel']}>
                <div id={styles['cardousel-lead']}>
                    {leadCard}
                </div>
                <div id={styles['cardousel-trailing']}>
                    {trailingCardsList}
                </div>  
            </div> 
        </div>
        </div>
        </>
    )
}

export default Projects