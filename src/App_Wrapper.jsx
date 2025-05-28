import { Outlet } from "react-router";
import { useState, useEffect, Suspense } from "react";

// Wrapper sections
import Header from './components/App/Header';
import Nav from './components/App/Nav';
import Aside from './components/App/Aside';
import Footer from './components/App/Footer';

// Main sections
import Intro from './components/Intro';
import Contact from './components/Contact';


// Page wrapper
function PageWrapper() {
    // Fallback
    const blankPage = () => {
        return (
            <>
            <div style={{backgroundColor:'#f9f6f1'}}>
                <p style={{color:'#f9f6f1'}}>Loading...</p>
            </div>  
            </>
        )
    }
    // Nav open/close true/false state
    const [navOpen, updateNavOpen] = useState(true);
    const handleNavUpdate = () => {
        updateNavOpen(navOpen => !navOpen);
    }

    /* UNDONE: Wait til fonts are loaded for the site to properly load
    const [fontsLoaded, setFontsLoaded] = useState(false);
    useEffect(() => {
        async function loadFonts() {
            try {
                await document.fonts.ready;
                setFontsLoaded(true);
            } catch (error) {
                console.error("Error loading fonts:", error);
            }
        }

        loadFonts();
    }, []);

    if (!fontsLoaded) {
        return (
            <>
            <div style={{backgroundColor:'#f9f6f1'}}>
                <p style={{color:'#f9f6f1'}}>Loading...</p>
            </div>  
            </>
        )
    } */

    return (
        <>
        {/* Render blank page until required fonts have loaded */}
        <Suspense fallback={blankPage}>
            <link rel="stylesheet" 
                href="https://fonts.googleapis.com/css2?family=Outfit:ital,wght@0,300..900;1,300..900&family=Readex+Pro:wght@160..700&display=swap" precedence="default" />
            <link rel="stylesheet" 
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=arrow_upward,article,attach_file,biotech,cases,chevron_left,chevron_right,compress,construction,contact_page,copyright,description,expand,frame_inspect,fullscreen,groups_3,home_pin,info,label,lightbulb,mail,open_in_new,pause,play_arrow,school,send,star,volume_off,volume_up" precedence="high" />
            <link rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=arrow_back,close,expand_less,format_quote,menu" precedence="high" />
            <div id='site-container' className={`${navOpen ? null : `retract` }`}>
                <Header switchNavOpen={handleNavUpdate}/>
                <Nav navOpen={navOpen} switchNavOpen={handleNavUpdate} readNavState={navOpen}/>
                <Aside/>
                {/* Main */}
                <Outlet/>
                <Footer/>
            </div>
        </Suspense>
        </>
    )
}

// Main
function Main() {
    // Check/set session storage to see if we play card fade-in anim or not
    useEffect(() => {
        if (sessionStorage.getItem('is_first_visit') == null) {
            sessionStorage.setItem('is_first_visit', 'false');
        }
    });

    return (
        <>
        {/* Main w/ anchors above each section to prevent header overlap */}
        <main>
            <a className='anchor' id='intro'/>
            <Intro/>

            <a className='anchor' id='works'/>
            <div id="main-projects-container" className='main-section'>
                <Outlet/>
            </div>
            
            <a className='anchor' id='contact'/>
            <Contact/>
        </main>
        </>
    )
}

export {
    PageWrapper,
    Main
}