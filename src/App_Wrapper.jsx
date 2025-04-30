import { Outlet } from "react-router";
import { useState } from "react";

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