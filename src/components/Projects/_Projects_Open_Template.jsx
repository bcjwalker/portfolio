import { useNavigate } from 'react-router';
import {useState, useRef, useEffect} from 'react';


// Styles
const projectImgs = import.meta.glob(['@assets/projects/sunstop/*.jpg', '@assets/projects/sunstop/*.png']);
console.log(projectImgs)

function Projects_Open_Template( {children} ) {
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate(-1);
    };

    // Refs
    const mainScrollRef = useRef();
    const stickyHeadRef = useRef();

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

    return (
        <>
        {/* Project open template, replaces the projects card grid */}
            <div className='project-big-open'>
                {/* Header */}
                <div className='header-topdtls-container'>
                    {/* UNDONE: replaced by view anims
                    <div className={`header-topdtls ${headerSticky ? 'sticky' : null }`}> */}
                    <div className={`header-topdtls`}>
                        <button className='stdbtn icon header-backbtn'
                        onClick={handleBackClick}>
                            <span className='material-symbols-rounded'> arrow_back </span> 
                        </button>
                        <h1>Sunstop</h1>
                    </div>
                </div>
                <div className='header-container'>
                    <div className='header'>
                        <div className='header-main'>
                            <div className='header-bottomdtls'>
                                <div className='header-taglist'>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Main wrapper */}
                <div className='project-body-container' ref={mainScrollRef}> 
                    {children}
                </div>
            </div>
        </>
    )
}

export default Projects_Open_Template