import { Outlet } from 'react-router'
import { useState, useEffect, Suspense } from 'react'
import { preload, preconnect } from 'react-dom'

// Wrapper sections
import Header from './components/App/Header'
import Nav from './components/App/Nav'
import Aside from './components/App/Aside'
import Footer from './components/App/Footer'

// Main sections
import Intro from './components/Intro'
import Contact from './components/Contact'

// Favicon
import imgFavicon from './assets/favicon.ico'


function PageWrapper() {
  // Nav open/close true/false state
  const [navOpen, updateNavOpen] = useState(true)
  const handleNavUpdate = () => {
    updateNavOpen((navOpen) => !navOpen)
  }
  return (
    <>
      {/* Favicon */}
      <link rel="icon" type="image/png" href={imgFavicon} />

      {/* Site container */}
      <div id="site-container" className={`${navOpen ? null : `retract`}`}>
        <Header switchNavOpen={handleNavUpdate} />
        <Nav navOpen={navOpen} switchNavOpen={handleNavUpdate} readNavState={navOpen} />
        <Aside dialogType={false}/>
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

// Main
function Main() {
  // Check/set session storage to see if we play card fade-in anim or not
  useEffect(() => {
    if (sessionStorage.getItem('is_first_visit') == null) {
      sessionStorage.setItem('is_first_visit', 'false')
    }
  })

  return (
    <>
      {/* Main w/ anchors above each section to prevent header overlap */}
      <main>
        <a className="anchor" id="intro" />
        <Intro />

        <a className="anchor" id="works" />
        <div id="main-projects-container" className="main-section">
          <Outlet />
        </div>

        <a className="anchor" id="contact" />
        <Contact />
      </main>
    </>
  )
}

export { PageWrapper, Main }
