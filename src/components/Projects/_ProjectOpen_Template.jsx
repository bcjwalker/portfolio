import { useNavigate, useOutletContext } from 'react-router'
import { useState, useRef, useEffect } from 'react'
import TableOfContents from '../utils/Article_TableOfContents.jsx';

// Animations :)
import { Fade } from "react-awesome-reveal";
import { fadeInPushUp, fadeInPushDown } from "../utils/Animations.jsx";

// Project info from raw table (not reversed);
// Sunstop id 0, first in table
import { projectData } from '../../assets/projects-db.js';

// Glob import
const projectMedia = import.meta.glob(
    ['@assets/projects/*/*/*.{jpg,png,mp4,png}',
    '@assets/projects/*/*.{jpg,png,mp4,png,pdf}',
    '@assets/software/*.ico'], 
    {eager: true, query: '?url', import: 'default'});
console.log(projectMedia)

// Simple tag component
function RenderProjectThumbTag( props ) {
    return (
        <>
        <span className='metadata-tag'>
            {props}
        </span>
        </>
    );
}

// LeadCard spits out different kinds of cards for the project overview
export function LeadCard(props) {
    console.log(props)
    const currentProj = projectData[props.index];
    console.log(props.index)
    console.log(currentProj)
    // Docket for collab card
    const RenderLeadCard1CollabEntry = (props) => { 
        return (<>
            <div className='collab-wrapper'>
                <div className='lead-icon'>
                    <img src={projectMedia[props.thumb]}/>
                </div>
                <label>{props.name}</label>
            </div>
            </>
        )};
        const collabsKeys = Object.entries(currentProj.collabs);
        const collabsList = collabsKeys.map ( (colleague, index) =>
            RenderLeadCard1CollabEntry(collabsKeys[index][1])
        );

    // 1: Important collaborators
    if (props.cardType == 'Collaborators') return (
        <>
        <div className='lead-card'>
            <h4>{props.cardType}</h4>
            <div className='collabs-container'>
                {collabsList}
            </div>
        </div>
        </>);

    // 2: My roles :)
    const rolesList = currentProj.roles.map ( function (colleague, index) {
        return (<span>{currentProj.roles[index]}</span>)
    });
    if (props.cardType == 'My roles') return (
        <>
        <div className='lead-card'>
            <h4>{props.cardType}</h4>
            <div className='roles-container'>
                {rolesList}
            </div>
        </div>
        </>);

    // 3: Project stack
    const softwareList = currentProj.software.map ( function (software, index) {
        return (<>
            <div className='software-wrapper'>
                <img src={projectMedia[`/src/assets/software/${software}.ico`]}></img>
                <label>{currentProj.software[index]}</label>
            </div>
            </>)
    });
    if (props.cardType == 'Project stack') return (
        <>
        <div className='lead-card'>
            <h4>{props.cardType}</h4>
            <div className='software-container'>
                {softwareList}
            </div>
        </div>
        </>);

    // 4: Timeline
    if (props.cardType == 'Timeline') return (
        <>
        <div className='lead-card'>
            <h4>{props.cardType}</h4>
            <div className='timeline-container'>
                <h5>{currentProj.timeline[0]}</h5>
                <span>{currentProj.timeline[1]}</span>
            </div>
        </div>
        </>);
}

// Details card
export function Details( props ) {
    // Card type label
    let cardType = '';
    if (props.colour === 'prmry') {
        cardType = 'Primary insight'
    } 
    else if (props.colour === 'scndry') {
        cardType = 'Secondary insight'
    }

    return (
    <>
    <details className={`details-card ${props.type} ${props.colour}`}>
        <summary>
            <div className='summary-header-wrapper'>
                <span className='summary-label'>{cardType}</span>
                <h5>{props.title}</h5>
            </div>
            <span className='material-symbols-sharp expand-btn'> expand_less </span>
        </summary>
        <div className='details-content-wrapper'>
            {props.children}
        </div>
    </details>
    </>);
}
// Details card static
export function Details_Static( props ) {
    // Card type label
    let cardType = '';
    if (props.colour === 'prmry') {
        cardType = 'Primary insight'
    } 
    else if (props.colour === 'scndry') {
        cardType = 'Secondary insight'
    }

    return (
    <>
    <div className={`details-card static ${props.type} ${props.colour}`}>
        <div className='summary-header-wrapper'>
            <span className='summary-label'>{cardType}</span>
            <h5>{props.title}</h5>
        </div>
        <div className='details-content-wrapper'>
            {props.children}
        </div>
    </div>
    </>);
}

// Left nav-TOC column
export function Nav( index ) {
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/', { viewTransition: true } );
    };
    return (
        <>
        <div className='project-nav-wrapper'>
            <div className={`nav-topdtls`} onClick={(e) => e.stopPropagation()}>
                <button title="Go back" className='icon-btn nav-backbtn green-btn'
                onClick={handleBackClick}>
                    <span className='material-symbols-sharp'> arrow_back </span> 
                </button>
            </div>
            <TableOfContents/>
            <div className='nav-btns-wrapper'>
                <label className='projects-nav-label'>External links</label>
                <div className='btns'>
                    <a href='https://nicolexylow.github.io/sunstop/' target='_blank' className='docket med icon prmry-btn metadata-link'>
                        <span className='material-symbols-rounded'> open_in_new </span> 
                        <label>View interface</label> 
                    </a>
                    <a href={projectMedia["/src/assets/projects/sunstop/DECO4200_A4_report.pdf"]} target='_blank' className='docket outline-btn outline-3 med icon metadata-link'>
                        <span className='material-symbols-rounded'> open_in_new </span> <label>Read case study</label> 
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}

{/* <a href='https://nicolexylow.github.io/sunstop/' target='_blank' className='docket med icon prmry-btn metadata-link'>
<span className='material-symbols-rounded'> open_in_new </span> 
<label>View interface</label> 
</a>
<a href={projectMedia["/src/assets/projects/sunstop/DECO4200_A1_report.pdf"]} target='_blank' className='docket outline-btn outline-3 med icon metadata-link'>
<span className='material-symbols-rounded'> description </span> <label>Read research report</label> 
</a>
<a href={projectMedia["/src/assets/projects/sunstop/DECO4200_A4_report.pdf"]} target='_blank' className='docket outline-btn outline-3 med icon metadata-link'>
<span className='material-symbols-rounded'> description </span> <label>Read case study</label> 
</a> */}

function RenderLinkList ( props ) {
    const RenderLink = (props) => { 
        let icon;
        let classList;
        if (props.type == 'prmry') {
            icon = "open_in_new";
            classList = "docket med icon prmry-btn metadata-link";
        } else if (props.type == "doc") {
            icon = "description";
            classList = "docket outline-btn outline-3 med icon metadata-link";
        }
    
        return (
            <>
            <a href={props.link} target='_blank' className={classList}>
                <span className='material-symbols-rounded'> {icon} </span> 
                <label>{props.label}</label> 
            </a>
            </>
        )
    }
    const linkKeys = Object.entries(props);
    const linkList = linkKeys.map ( (link, index) =>
        RenderLink(linkKeys[index][1])
    );
    return linkList;
}

export function ProjectOpen_Template( {children, article, index} ) {
    const currentProj = projectData[index];

    // Route us   
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/', { viewTransition: true } );
    };

    // Tags
    const tagsProps = currentProj.tags;
    const tagsList = tagsProps.map ( (project, index) =>
        RenderProjectThumbTag(tagsProps[index])
    );

    // Refs
    const mainScrollRef = useRef();
    const articleTopRef = useRef();

    /* UNDONE: Replaced by view anims
    // Lovely scroll tracking from https://stackoverflow.com/questions/62497110/detect-scroll-direction-in-react-js/62497293#62497293
    // Check: can this be cut down?
    const [headerSticky, setHeaderSticky] = useState(false);
    useEffect(() => {
        // Position of main content, determines when we attach sticky class
        // to the sticky header*
        const mainScrollPos = mainScrollRef.current.offsetTop - 220;
        //console.log(mainScrollPos)

        const threshold = 0;
        let lastScrollY = window.scrollY;
        let ticking = false;
        //console.log(window.scrollY)
    
        const updateheaderSticky = () => {
        const scrollY = window.scrollY;
    
        if (Math.abs(scrollY - lastScrollY) < threshold) {
            ticking = false;
            return;
        }
        setHeaderSticky(scrollY < mainScrollPos ? false : false);
        lastScrollY = scrollY > 0 ? scrollY : 0;
        ticking = false;
        };
    
        const onScroll = () => {
        if (!ticking) {
            window.requestAnimationFrame(updateheaderSticky);
            ticking = true;
        }
        };
    
        window.addEventListener('scroll', onScroll);
        //console.log(headerSticky);
    
        return () => window.removeEventListener('scroll', onScroll);
    }, [headerSticky]); */

    // DEV: disable while working on article
    //useEffect(() => { articleTopRef.current.scrollIntoView({ behavior: "instant" }); })

    return (
        <>
        <a className='anchor' id='project-open-top'  ref={articleTopRef}/>
        {/* Project open template, replaces the projects card grid */}
        <article className={`project-big-open ${article}`}  style={{viewTransitionName: `post-card-${article}`}}>
            {/* UNDONE: Cut sticky header
            <div className='header-topdtls-container'  onClick={(e) => e.stopPropagation()}>
                UNDONE: replaced by view anims
                <div className={`header-topdtls ${headerSticky ? 'sticky' : null }`}> 
                <div className={`header-topdtls`} onClick={(e) => e.stopPropagation()}>
                    <button className='icon-btn header-backbtn'
                    onClick={handleBackClick}>
                        <span className='material-symbols-sharp'> arrow_back </span> 
                    </button>
                    <h1>Sunstop</h1>
                    <div className='btns-header'>
                        <a href="https://nicolexylow.github.io/sunstop/" target='_blank' className='docket med icon prmry-btn metadata-link'>
                            <span className='material-symbols-rounded'> open_in_new </span> 
                            <label>View interface</label> 
                        </a>
                        <a href="/src/assets/projects/sunstop/DECO4200_A4_report.pdf" target='_blank' className='docket outline-btn outline-3 med icon metadata-link'>
                            <span className='material-symbols-rounded'> open_in_new </span> <label>Read case study</label> 
                        </a>
                    </div>
                </div>
            </div> */}

            {/* Header */}
            <div className='project-open-header'>
                <div className='header-main'>
                    <div className='header-main-left-wrapper'>
                        <div className={`header-topdtls`}>
                            <button title="Go back" className='icon-btn header-backbtn'
                            onClick={handleBackClick}>
                                <span className='material-symbols-sharp'> arrow_back </span> 
                            </button>
                            <h1 style={{viewTransitionName: `post-title-${article}`}}>{currentProj.title}</h1>
                        </div>

                        <Fade keyframes={fadeInPushDown} triggerOnce duration={500} delay={150} cascade damping={0.1}>
                            <p className='desc-text'>{currentProj.descFull}</p>
                            <p className='desc-text'>{currentProj.descFull2}</p>

                            <div className='header-metadata'>
                                <div className='metadata-btns-wrapper'>
                                    <label className='metadata-section-label'>Links:</label>
                                    {RenderLinkList(currentProj.links)}
                                </div>
                                <div className='metadata-tags-wrapper'>
                                    <label className='metadata-year'>{currentProj.date}</label>
                                    <span className='dividing-dot'>•</span>
                                    {tagsList}
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div className='header-main-right-wrapper'>
                        <img src={projectMedia[currentProj.thumb]}/>
                    </div>
                </div>
            </div>
            {/* Main wrapper */}
            <div className='project-body-container' ref={mainScrollRef}> 
                {children}
            </div>
        </article>
        </>
    )
}