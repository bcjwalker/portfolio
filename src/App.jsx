import { BrowserRouter as Router, Route, Routes } from 'react-router';
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router';
// Retain scorll state
window.history.scrollRestoration = 'manual'

// Style
import './scss/manifest.scss';

// Wrapper sections
import Header from './components/App/Header';
import Nav from './components/App/Nav';
import Aside from './components/App/Aside';

// Main sections
import Intro from './components/Intro';
import Projects from './components/Projects';
    import Project_Open from './components/Projects_Open';
    import Projects_Sunstop from './components/Projects/Sunstop';
import Contact from './components/Contact';

function PageWrapper() {
    // Nav open/close true/false state
    const [navOpen, updateNavOpen] = useState(true);
    const handleNavUpdate = () => {
        updateNavOpen(navOpen => !navOpen)
    }

    return (
        <>
            <div id='site-container' className={`${navOpen ? null : `retract` }`}>
                <Header navOpen={navOpen} />
                <Nav navOpen={navOpen} switchNavOpen={handleNavUpdate} />
                <Aside/>

                {/* Main w/ anchors above each section to prevent header overlap */}
                <main>
                    <a className='anchor' id='intro'/>
                    <Intro/>
                    <a className='anchor' id='works'/>
                    {/* Projects */}
                    <div id="main-projects-container">
                        <Outlet />
                    </div>
                    <a className='anchor' id='contact'/>
                    <Contact/>
                </main>
            </div>
        </>
    )
}

export default function App () {
  return (
    <>
    <Router>
        <Routes>
            {/* Wrap  */}
            <Route element={<PageWrapper />}> 
                <Route path='/' element={<Projects />} /> 
                <Route path='/project_open' element={<Project_Open />} /> 
                <Route path='/projects/sunstop' element={<Projects_Sunstop />} /> 
            </Route>
        </Routes>
    </Router>
    </>
  );
}