import { useNavigate, useLocation } from 'react-router';
import {useState, useRef, useEffect} from 'react'
import { ReactCompareSlider, ReactCompareSliderImage, styleFitContainer } from 'react-compare-slider';
// Animations :)
import { Fade } from "react-awesome-reveal";
import { fadeInPushUp } from "../utils/Animations.jsx";

// Project info from raw table (not reversed)
// Bio id 1
import { projectData } from '@assets/projects-db.js';
const currentProj = projectData[1];

// Components
import { ProjectOpen_Template, LeadCard, Details, Details_Static, Nav } from './_ProjectOpen_Template.jsx';
import VideoPlayerCard from '../utils/Article_VideoPlayer.jsx';
import ImgViewer from '../utils/Article_ImgViewer.jsx';

// Styles
import styles from './Biodiversity.module.css';

// Glob import
const projectMedia = import.meta.glob(
    ['@assets/projects/biodiversity/*/*.{jpg,png,mp4,png}',
    '@assets/projects/biodiversity/*.{jpg,png,mp4,png}',
    '@assets/software/*.ico'], 
    {eager: true, query: '?url', import: 'default'});
console.log(projectMedia)


// Article sections
function MainSection_Temp(props) {
    return (
        <>
        <p className='text-margins'>Article under construction</p>
        </>
    )
}

// Body content
function Main() {
    const location = useLocation();
    console.log(location);
    return (
        <>
        {/* Nav with dynamic article TOC */}
        <div className='project-left-container'>
            {/* <Nav/> */}
        </div>
        {/* Article main */}
        <div className='project-main-container'>
            <h2 className='article-h2 text-margins article-top'  id='sunstop-section0'>(top)</h2>
            {/* 4 info cards */}
            <div className='project-overview-cards-wrapper'>
                <LeadCard cardType='My roles' index={1}/>
                <LeadCard cardType='Project stack' index={1}/>
                <LeadCard cardType='Timeline' index={1}/>
            </div>
            
            {/* Start article bulk */}
            {/* Section 1 */}
            <Fade keyframes={fadeInPushUp} duration={375} triggerOnce delay={750} cascade damping={0.1}>
                <MainSection_Temp num='1'/>
            </Fade>
            
        {/* End article bulk */}
        </div>
        </>
    )
}

function Projects_Biodiversity( ) {
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
        <ProjectOpen_Template article={'biodiversity'} index={1}>
            <Main/>
        </ProjectOpen_Template>
        </>
    )
}

export default Projects_Biodiversity