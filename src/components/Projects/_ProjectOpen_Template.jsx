import { useNavigate } from 'react-router'
import {useState, useRef, useEffect} from 'react'

// Project info from raw table (not reversed);
// Sunstop id 3, 3rd in table
import { projectData } from '../../assets/projects-db.js';
const currentProj = projectData[0];

// Styles

// Glob import
const projectImgs = import.meta.glob(['@assets/projects/sunstop/*.jpg', '@assets/projects/sunstop/*.png', '@assets/projects/sunstop/*.pdf']);
console.log(projectImgs);

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

function Projects_Open_Template( {children, article} ) {
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/');
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
        <article className={`project-big-open ${article}`}>
            {/* Header */}
            <div className='header-topdtls-container'  onClick={(e) => e.stopPropagation()}>
                {/* UNDONE: replaced by view anims
                <div className={`header-topdtls ${headerSticky ? 'sticky' : null }`}> */}
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
            </div>
            <div className='project-open-header'>
                <div className='header-main'>
                    <div className='header-main-left-wrapper'>
                        <div>
                            <p className='desc-text'>{currentProj.descFull}</p>
                            <p className='desc-text'>{currentProj.descFull2}</p>
                        </div>
                        <div className='header-metadata'>
                            <div className='metadata-btns-wrapper'>
                                <label className='metadata-section-label'>Links:</label>
                                <div className='btns'>
                                    <a href='https://nicolexylow.github.io/sunstop/' target='_blank' className='docket med icon prmry-btn metadata-link'>
                                        <span className='material-symbols-rounded'> open_in_new </span> 
                                        <label>View interface</label> 
                                    </a>
                                    <a href="/src/assets/projects/sunstop/DECO4200_A4_report.pdf" className='docket outline-btn outline-3 med icon metadata-link'>
                                        <span className='material-symbols-rounded'> open_in_new </span> <label>Read case study</label> 
                                    </a>
                                </div>
                            </div>
                            <div className='metadata-tags-wrapper'>
                                <label className='metadata-year'>{currentProj.date}</label>
                                <span className='dividing-dot'>•</span>
                                {tagsList}
                            </div>
                        </div>
                    </div>
                    <img className='header-main-right-wrapper' src="/src/assets/projects/sunstop/thumb.jpg"/>
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

export default Projects_Open_Template