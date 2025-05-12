import { useNavigate, useLocation } from 'react-router';
import {useState, useRef, useEffect} from 'react'
import { ReactCompareSlider, ReactCompareSliderImage, styleFitContainer } from 'react-compare-slider';
// Animations :)
import { Fade } from "react-awesome-reveal";
import { fadeInPushDown } from "../utils/Animations.jsx";

// Project info from raw table (not reversed)
// Bio id 1
import { projectData } from '@assets/projects-db.js';
const currentProj = projectData[3];

// Components
import { ProjectOpen_Template, LeadCard, Details, Details_Static, Nav } from './_ProjectOpen_Template.jsx';
import VideoPlayerCard from '../utils/Article_VideoPlayer.jsx';
import ImgViewer from '../utils/Article_ImgViewer.jsx';
import CompCard from '../utils/Article_CompCard.jsx';
import InfoCard from '../utils/Article_InfoCard.jsx';
import { WipCard, WipCardFooter } from '../utils/Article_WipCard.jsx';

// Styles
import styles from './Studbud.module.css';

// Glob import
const projectMedia = import.meta.glob(
    ['@assets/projects/studbud/*/*.{jpg,png,mp4,png}',
    '@assets/projects/studbud/*.{jpg,png,mp4,png}',
    '@assets/software/*.ico'], 
    {eager: true, query: '?url', import: 'default'});
console.log(projectMedia)


// Article sections
function MainSection_Temp(props) {
    return (
        <>
        <section className={`projects-body-section`} id={styles['section1']}>
            <h2 className='article-h2 text-margins'  id={`studbud-section${props.num}`}>Everything you need for study</h2> 
            <p className='text-margins'> My first introduction to responsive design philosophies. For this project, we were required to create an integrated study tool, with a kanban board, task management tools and a pomodoro timer. I managed to integrate it all into one all-in-one tool. </p>

            <h3 className='article-h3 text-margins'>Kanban board</h3> 

            <Fade keyframes={fadeInPushDown} duration={375} triggerOnce delay={20} cascade damping={0.1}>
            <div className={`${styles['section1a-media-double']}`}>
                <div className={`${styles['double-media']} media-container double extra-margins`}>
                    <figure className={`${styles['lead']} media-wrapper`}>
                        <div className={`img-wrapper bordered ${styles['img1-wrapper']}`}>
                            <ImgViewer classN={`${styles['img1']}`} imgSrc={projectMedia['/src/assets/projects/studbud/screen-kanban-3.png']}/>
                        </div>
                        <figcaption>The kanban board; desktop view</figcaption>
                    </figure>
                    <figure className={`${styles['side']} media-wrapper nowrap`}>
                        <div className={`img-wrapper bordered ${styles['img2-wrapper']}`}>
                            <ImgViewer classN={`${styles['img2']}`} imgSrc={projectMedia['/src/assets/projects/studbud/screen-kanban-3-mobile.png']}/>
                        </div>
                        <figcaption>Mobile view</figcaption>
                    </figure>
                </div>
            </div>
            </Fade>

            <h3 className='article-h3 text-margins'>Pomodoro timer</h3> 

            <Fade keyframes={fadeInPushDown} duration={375} triggerOnce delay={20} cascade damping={0.1}>
            <div className={`${styles['section1b-media-double']}`}>
                <div className={`${styles['double-media']} media-container double extra-margins`}>
                    <figure className={`${styles['lead']} media-wrapper`}>
                        <div className={`img-wrapper bordered ${styles['img1-wrapper']}`}>
                            <ImgViewer classN={`${styles['img1']}`} imgSrc={projectMedia['/src/assets/projects/studbud/screen-timer-3.png']}/>
                        </div>
                        <figcaption>The pomodoro timer and music player; desktop view</figcaption>
                    </figure>
                    <figure className={`${styles['side']} media-wrapper nowrap`}>
                        <div className={`img-wrapper bordered ${styles['img2-wrapper']}`}>
                            <ImgViewer classN={`${styles['img2']}`} imgSrc={projectMedia['/src/assets/projects/studbud/screen-timer-2-mobile.png']}/>
                        </div>
                        <figcaption>Mobile view</figcaption>
                    </figure>
                </div>
            </div>
            </Fade>

        </section>
        </>
    )
}

// Body content
function Main() {
    const location = useLocation();
    // If this is our first article, display InfoCard
    // Otherwise, hide it
    let firstViewing = true;
    if (sessionStorage.getItem('is_first_article') == null) {
        sessionStorage.setItem('is_first_article', 'false');
    } else if (sessionStorage.getItem('is_first_article') == 'false'){
        firstViewing = false;
    }

    return (
        <>
        {/* Nav with dynamic article TOC */}
        <div className='project-left-container'>
            <Nav/>
        </div>
        {/* Article main */}
        <div className='project-main-container'>
            <h2 className='article-h2 text-margins article-top'  id='studbud-section0'>(top)</h2>
            
            <WipCard/>

            {firstViewing ? <InfoCard/> : null }

            {/* 4 info cards */}
            <div className='project-overview-cards-wrapper'>
                <LeadCard cardType='My roles' index={3}/>
                <LeadCard cardType='Project stack' index={3}/>
                <LeadCard cardType='Timeline' index={3}/>
            </div>
            
            {/* Start article bulk */}
            <section className='project-sections-wrapper'>
                {/* Section 1 */}
                <Fade keyframes={fadeInPushDown} duration={375} triggerOnce delay={100} cascade damping={0.1}>
                    <MainSection_Temp num='1'/>
                </Fade>
                
                <hr className='project-footer-hr'/>

                <div className='project-footer-container'>
                    <div className='msg-wrapper'>
                        <label>Welcome to the end of the article...</label>
                        <p>Works • Studbud</p>
                    </div>
                    <div className='dtls-wrapper'>
                        <label>Last updated...</label>
                        <p>12-05-25</p>
                    </div>
                </div>
            </section>
            {/* End article bulk */}
        </div>
        </>
    )
}

function Projects_Studbud( ) {
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate(-1);
    };
    // Extract dispensing template from Dispense page using useLocation
    const location = useLocation();
    //const project = location.state.props;
    //console.log(project);

    return (
        <>
        <ProjectOpen_Template article={'studbud'} index={3}>
            <Main/>
        </ProjectOpen_Template>
        </>
    )
}

export default Projects_Studbud