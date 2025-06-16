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

// Load Google API fonts/icons
// function googLoader() {
//     preconnect('https://fonts.gstatic.com')
//     preload(
//         'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=arrow_upward,article,attach_file,biotech,cases,chevron_left,chevron_right,compress,construction,contact_page,copyright,description,expand,frame_inspect,fullscreen,groups_3,home_pin,info,label,lightbulb,mail,open_in_new,pause,play_arrow,school,send,star,volume_off,volume_up',
//         {as: "style"}
//     )
//     preload(
//         'https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=arrow_back,close,expand_less,format_quote,menu',
//         {as: "style"}
//     )
// }

// Page wrapper

function PageWrapper() {
  // googLoader();
  // Fallback
  const BlankPage = () => {
    return (
      <>
        <div style={{ backgroundColor: '#f9f6f1' }}>
          <p style={{ color: '#f9f6f1' }}>Loading...</p>
        </div>
      </>
    )
  }
  // Nav open/close true/false state
  const [navOpen, updateNavOpen] = useState(true)
  const handleNavUpdate = () => {
    updateNavOpen((navOpen) => !navOpen)
  }

  // Execute order 66... just kidding, load Google symbols
  const [fontsLoaded, setFontsLoaded] = useState(false)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const loadGoogleFonts = async () => {
      try {
        // Add Google symbol links to document head
        const fontsToLoad = [
          // Rounded
          'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=arrow_upward,article,attach_file,biotech,cases,chevron_left,chevron_right,compress,construction,contact_page,copyright,description,expand,frame_inspect,fullscreen,groups_3,home_pin,info,label,lightbulb,mail,open_in_new,pause,play_arrow,school,send,star,volume_off,volume_up',
          // Sharp
          'https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=arrow_back,close,expand_less,format_quote,menu',
          // Outfit + Readex Pro
          'https://fonts.googleapis.com/css2?family=Outfit:ital,wght@0,300..900;1,300..900&family=Readex+Pro:wght@160..700&display=swap',
        ]
        // Add all font links to document head
        fontsToLoad.forEach((fontUrl) => {
          const link = document.createElement('link')
          link.href = fontUrl
          link.rel = 'stylesheet'
          document.head.appendChild(link)
        })

        // Wait for fonts to load using Font Loading API
        if ('fonts' in document) {
          await document.fonts.ready

          // Additional verification to ensure specific fonts are loaded
          const fontsToVerify = [
            { family: 'Readex Pro', weight: '400' },
            { family: 'Outfit', weight: '400' },
            { family: 'Material Symbols Sharp', weight: '400' },
            { family: 'Material Symbols Rounded', weight: '400' },
          ];

          // Check if fonts are available
          const fontPromises = fontsToVerify.map(async ({ family, weight }) => {
            try {
              const loaded = await document.fonts.check(`${weight} 16px "${family}"`);
              if (!loaded) {
                await new Promise(resolve => setTimeout(resolve, 200));
              }
              return true;
            } catch (error) {
              console.warn(`Font ${family} verification failed:`, error);
              return false;
            }
          });

          await Promise.all(fontPromises);

        } else {
          // Fallback for browsers without Font Loading API
          await new Promise((resolve) => setTimeout(resolve, 2000))
        }

        setFontsLoaded(true)
      } catch (error) {
        console.warn('Font loading failed:', error)
        // Still show the app even if fonts fail to load
        setFontsLoaded(true)
      } finally {
        setLoading(false)
      }
    }

    loadGoogleFonts()
  }, [])
  if (loading || !fontsLoaded) {
    return <BlankPage />
  }
  return (
    <>
      {/* Render blank page until required fonts have loaded */}
      {/* <Suspense fallback={blankPage}> */}
      <link rel="icon" type="image/png" href={imgFavicon} />
      {/* Finally load Google stuff as stylesheets */}
      {/* <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Outfit:ital,wght@0,300..900;1,300..900&family=Readex+Pro:wght@160..700&display=swap"
      /> */}
      {/* <link rel="stylesheet" 
				href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=arrow_upward,article,attach_file,biotech,cases,chevron_left,chevron_right,compress,construction,contact_page,copyright,description,expand,frame_inspect,fullscreen,groups_3,home_pin,info,label,lightbulb,mail,open_in_new,pause,play_arrow,school,send,star,volume_off,volume_up"/>
			<link rel="stylesheet"
				href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=arrow_back,close,expand_less,format_quote,menu"/> */}
      <div id="site-container" className={`${navOpen ? null : `retract`}`}>
        <Header switchNavOpen={handleNavUpdate} />
        <Nav navOpen={navOpen} switchNavOpen={handleNavUpdate} readNavState={navOpen} />
        <Aside />
        <Outlet />
        <Footer />
      </div>
      {/* </Suspense> */}
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
