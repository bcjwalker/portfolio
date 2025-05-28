import { useNavigate } from 'react-router'
import { useState, useRef, useEffect } from 'react'
import { useInView } from "react-intersection-observer";

// Animations :)
import { Fade } from "react-awesome-reveal";
import { fadeInPushUp, fadeInPushDown } from "./Animations.jsx";

// Project info from raw table (not reversed);
import { projectData } from '../../assets/projects-db.js';

// Glob import
const projectMedia = import.meta.glob(
    ['@assets/projects/*/*/*.{jpg,png,mp4,png}',
    '@assets/projects/*/*.{jpg,png,mp4,png,pdf}',
    '@assets/software/*.ico'], 
    {eager: true, query: '?url', import: 'default'});
// console.log(projectMedia)

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


/*  
####################
## ARTICLE SUBNAV ##
####################
*/
// Tab renderer
export function RenderTab( props ) {
    return (
        <>
        <button className={`btn-tab-wrapper icon-text-btn ${props.state} ${props.type}`}
        onClick={props.setActiveSection}>
            <div className={`tab-label`}>
                <span className='material-symbols-rounded'> {props.icon} </span>
                <label>{props.name}</label>
            </div>
            <div className={`tab-active-bar`}></div>
        </button>
        </>
    )
}
// Tablist
export function Subnav( { children, index, activeSection, handleBackClick, tabListStuck, headerSticky } ) {
    return (
        <>
        <div className={`project-subhead-container ${tabListStuck ? null : `stuck`} ${headerSticky ? `active` : null}`}>
            <div className={`subnav-label-wrapper`} onClick={(e) => e.stopPropagation()}>
                <button title="Go back" className='icon-btn small nav-backbtn'
                onClick={handleBackClick}>
                    <span className='material-symbols-sharp'> arrow_back </span> 
                </button>
                <label> {projectData[index].title} </label>
            </div>
            {/* Tab list */}
            <div className='project-subnav-container'>
                {/* Tab list head */}
                <div className='subnav-head-wrapper'>
                    <span className='material-symbols-rounded'> article </span>
                    <label>Sections</label>
                </div>
                <div className='subnav-tablist-wrapper'>
                    <div className='tablist'>
                        {children}
                    </div>
                </div>
            </div>
            {/* UNDONE: Tab list toolbar 
            <button className={`btn-tab-arrow icon-btn ${activeSection == 0 ? `hide` : null}`}
                    onClick={handleLastClick}> 
                        <span className="material-symbols-rounded"> chevron_left </span> 
                    </button> 
            <button className={`btn-tab-arrow icon-btn ${activeSection != maxSections ? null : `hide`}`}
                    onClick={handleNextClick}>
                        <span className="material-symbols-rounded"> chevron_right </span> 
                    </button> */}
        </div>
        </>
    )
}

/*  
####################
## ARTICLE HEADER ##
####################
*/
function Header ( props ) {
    // Tags
    const tagsProps = props.currentProj.tags;
    const tagsList = tagsProps.map ( (project, index) =>
        RenderProjectThumbTag(tagsProps[index])
    );
    console.log(props.currentProj.collabs)

    return (
        <>
        <div className='project-open-header' ref={props.ref}>
            <div className='header-main'>
                <div className='header-main-left-wrapper'>
                    <div className={`header-topdtls`}>
                        <button title="Go back" className='icon-btn header-backbtn'
                        onClick={props.handleBackClick}>
                            <span className='material-symbols-sharp'> arrow_back </span> 
                        </button>
                        <h1 style={{viewTransitionName: `post-title-${props.article}`}}>{props.currentProj.title}</h1>
                    </div>
                    <Fade keyframes={fadeInPushDown} triggerOnce duration={500} delay={150} cascade damping={0.1}>
                        <p className='desc-text'>{props.currentProj.descFull}</p>
                        <p className='desc-text'>{props.currentProj.descFull2}</p>

                        <div className='header-metadata'>
                            <div className='metadata-btns-wrapper'>
                                <span className='metadata-section-label'>
                                    <span className='material-symbols-rounded'> attach_file </span>
                                </span>
                                <div className='btns-list'>
                                    {RenderLinkList(props.currentProj.links)}
                                </div>
                            </div>
                            <br/>
                            <div className='metadata-tags-wrapper'>
                                <span className='material-symbols-rounded'> label </span>
                                <label className='metadata-year'>{props.currentProj.date}</label>
                                <span className='dividing-dot'>•</span>
                                {tagsList}
                            </div>
                        </div>
                    </Fade>
                </div>
                {/* style={{ backgroundImage: `url("${projectMedia[headerImg]}")` }} */}
                <div className='header-main-right-wrapper'>
                    {/* 4 info cards */}
                    <summary className='project-overview-cards-wrapper'>
                        {props.currentProj.collabs != 'none' ? 
                        <LeadCard cardType='Collaborators' index={props.index}/>
                        : null}
                        <LeadCard cardType='My roles' index={props.index}/>
                        <LeadCard cardType='Project stack' index={props.index}/>
                        <LeadCard cardType='Timeline' index={props.index}/>
                    </summary>
                </div>
            </div>
        </div>
        </>
    )
}
// Link dockets for header metadata
function RenderLinkList ( props ) {
    if (props != "none") {
        const RenderLink = (props) => { 
            let icon;
            let classList;
            let link = props.link;
            if (props.type == 'prmry') {
                icon = "open_in_new";
                classList = "docket med icon prmry-btn metadata-link";
            } else if (props.type == "doc") {
                icon = "open_in_new";
                classList = "docket outline-btn outline-3 med icon metadata-link";
                link=projectMedia[link];
            }
        
            return (
                <>
                <a href={link} target='_blank' className={classList}>
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
    } else {
        return;
    }
}
// LeadCard spits out different kinds of cards for the project overview
export function LeadCard(props) {
    const currentProj = projectData[props.index];
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
            <div className='collabs-container container'>
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
            <div className='roles-container container'>
                {rolesList}
            </div>
        </div>
        </>);

    // 3: Project stack
    const softwareList = currentProj.software.map ( function (software, index) {
        return (<>
            <div className='software-wrapper container'>
                <img src={projectMedia[`/src/assets/software/${software}.ico`]}></img>
                <label>{currentProj.software[index]}</label>
            </div>
            </>)
    });
    if (props.cardType == 'Project stack') return (
        <>
        <div className='lead-card'>
            <h4>{props.cardType}</h4>
            <div className='software-container container'>
                {softwareList}
            </div>
        </div>
        </>);

    // 4: Timeline
    if (props.cardType == 'Timeline') return (
        <>
        <div className='lead-card'>
            <h4>{props.cardType}</h4>
            <div className='timeline-container container'>
                <h5>{currentProj.timeline[0]}</h5>
                <span>{currentProj.timeline[1]}</span>
            </div>
        </div>
        </>);
}


/*  
#####################
## ARTICLE WRAPPER ##
#####################
*/
// Wrap header, children (subhead + article page) in one function
export function Article_Wrapper( {children, article, index, tabListStuck, setTabListStuck, headerSticky, setHeaderSticky, topPos} ) {
    const currentProj = projectData[index];

    // Edit thumb.jpg to be thumb-full.jpg
    const headerImg = `${(currentProj.thumb).slice(0,-4)}-full.jpg`;
    
    // Route us   
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/', { 
            viewTransition: true,
            state: {returning: true}
        } );
    };

    // Refs
    const articleTopRef = useRef();
    useEffect(() => {
        console.log(articleTopRef.current.offsetTop)
    })
    // Check if header is still visible
    const { ref, inView, headEntry } = useInView({
        /* Optional options */
        threshold: 0,
        rootMargin: '-64px 0px 0px 0px'
    });
    // Pass header visibility to state
    useEffect(() => {
        setTabListStuck(inView)
    },[inView])

    // Cheers to https://stackoverflow.com/a/79600668 for this neat solution
    // If mobile dimensions, run scroll tracking
    const [isDesktop, setIsDesktop] = useState(window.innerWidth < 899 ? false : true);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 899) {
                setIsDesktop(false);
            } else {
                setIsDesktop(true)
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isDesktop]);

    // Lovely scroll tracking from https://stackoverflow.com/questions/62497110/detect-scroll-direction-in-react-js/62497293#62497293
    // Check: can this be cut down?
    useEffect(() => {
        if (!isDesktop) {
            //console.log(mainScrollPos)

            let threshold = 0;
            let lastScrollY = window.scrollY;
            let ticking = false;
            //console.log(window.scrollY)
        
            const updateheaderSticky = () => {
                const scrollY = window.scrollY;
            
                if (Math.abs(scrollY - lastScrollY) < threshold) {
                    ticking = false;
                    return;
                }
                setHeaderSticky(lastScrollY < scrollY && scrollY > topPos ? false : true);
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
        }
    }, [headerSticky]); 

    // DEV: disable while working on article
    //useEffect(() => { articleTopRef.current.scrollIntoView({ behavior: "instant" }); }, [])

    return (
        <>
        {/* Article template */}
        <a className='anchor' id='project-open-top'  ref={articleTopRef}/>

        <article className={`project-big-open ${article}`}  
        style={{viewTransitionName: `post-card-${article}`}}>
            {/* Header */}
            <Header ref={ref} currentProj={currentProj} article={article} index={index}
            handleBackClick={handleBackClick}/>
            {/* Main content */}
            {children}
            <button className={`icon-btn topscroll-btn prmry-green-btn ${headerSticky ? `active` : null}`} title='Scroll to top'
            onClick={() => document.getElementById('project-open-top')?.scrollIntoView({behavior: 'smooth', block: 'start'})}>
                <span className='material-symbols-rounded'> arrow_upward </span>
            </button>
        </article>
        </>
    )
}