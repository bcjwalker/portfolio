import { Outlet } from "react-router";
import { useState, useEffect } from "react";

// Wrapper sections
import Header from './components/App/Header';
import Nav from './components/App/Nav';
import Aside from './components/App/Aside';

// Main sections
import Intro from './components/Intro';
import Contact from './components/Contact';


// Page wrapper
function PageWrapper() {
    // Nav open/close true/false state
    const [navOpen, updateNavOpen] = useState(true);
    const handleNavUpdate = () => {
        updateNavOpen(navOpen => !navOpen)
    }

    // Wait til fonts are loaded for the site to properly load
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
    }

    return (
        <>
        <div id='site-container' className={`${navOpen ? null : `retract` }`}>
            <Header switchNavOpen={handleNavUpdate}/>
            <Nav navOpen={navOpen} switchNavOpen={handleNavUpdate} readNavState={navOpen}/>
            <Aside/>
            {/* Main */}
            <Outlet/>
        </div>
        </>
    )
}

// Main
function Main() {
    return (
        <>
        {/* Main w/ anchors above each section to prevent header overlap */}
        <main>
            <a className='anchor' id='intro'/>
            <Intro/>

            <a className='anchor' id='works'/>
            <div id="main-projects-container">
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