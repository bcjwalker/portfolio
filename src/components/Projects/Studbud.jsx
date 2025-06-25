import { useNavigate, useLocation, Outlet, useOutletContext } from 'react-router'
import { useState, useRef, useEffect } from 'react'
import { ReactCompareSlider, ReactCompareSliderImage, styleFitContainer } from 'react-compare-slider'
// Animations :)
import { Fade } from 'react-awesome-reveal'
import { fadeInPushDown } from '../utils/Animations.jsx'

// Project info from raw table (not reversed)
// Studbud id 3
import { projectData } from '@assets/projects-db.js'
const currentProj = projectData[3]

// Components
// Article wrapper and subnav
import { Article_Wrapper, RenderTab, Subnav } from '../utils/Article_Wrapper.jsx'
// Article body components
import { Details, Details_Static, Nav, ArticleFooter } from '../utils/article/Misc.jsx'
import VideoPlayerCard from '../utils/article/VideoPlayer.jsx'
import ImgViewer from '../utils/article/ImgViewer.jsx'
import CompCard from '../utils/article/CompCard.jsx'
import InfoCard from '../utils/article/InfoCard.jsx'
import { WipCard, WipCardFooter } from '../utils/article/WipCard.jsx'

// Styles
import styles from './Studbud.module.css'

const headerImg = `${currentProj.thumb.slice(0, -4)}-full.jpg`

// Glob import
const projectMedia = import.meta.glob(
  [
    '@assets/projects/studbud/*/*.{jpg,png,mp4,png}',
    '@assets/projects/studbud/*.{jpg,png,mp4,png}',
    '@assets/software/*.ico',
  ],
  { eager: true, query: '?url', import: 'default' }
)
console.log(projectMedia)

// Article sections
function Studbud_Main_Temp(props) {
  const [topPos, setTopPos] = useOutletContext()
  const topRef = useRef()
  useEffect(() => {
    setTopPos(topRef.current.getBoundingClientRect().top)
  })

  // If this is our first article, display InfoCard
  // Otherwise, hide it
  let firstViewing = true
  if (sessionStorage.getItem('is_first_article') == null) {
    sessionStorage.setItem('is_first_article', 'false')
  } else if (sessionStorage.getItem('is_first_article') == 'false') {
    firstViewing = false
  }

  return (
    <>
      {/* Nav with dynamic article TOC */}
      <div className="project-left-container">
        <Nav />
      </div>
      {/* Article main */}
      <div className="project-main-container">
        <h2 className="article-h2 text-margins article-top" id="studbud-section0" ref={topRef}>
          (Top)
        </h2>

        <WipCard />

        {firstViewing ? <InfoCard /> : null}

        <figure className={`media-wrapper extra-margins`}>
          <div className={`img-wrapper bordered`}>
            <ImgViewer imgSrc={projectMedia[headerImg]} />
          </div>
          <figcaption>Mockup of a possible branding direction for Studbud</figcaption>
        </figure>

        <section className={`projects-body-section`} id={styles['section1']}>
          <h2 className="article-h2 text-margins" lang="de" id={`studbud-section${props.num}`}>
            Everything you need for study
          </h2>
          <p className="text-margins">
            {' '}
            My first introduction to responsive design philosophies. For this project, we were required to
            create an integrated study tool, with a kanban board, task management tools and a pomodoro timer.
            I managed to integrate it all into one all-in-one tool.{' '}
          </p>

          <h3 className="article-h3 text-margins">Kanban board</h3>

          <Fade keyframes={fadeInPushDown} duration={375} triggerOnce delay={20} cascade damping={0.1}>
            <div className={`${styles['section1a-media-double']}`}>
              <div className={`${styles['double-media']} media-container double extra-margins`}>
                <figure className={`${styles['lead']} media-wrapper`}>
                  <div className={`img-wrapper bordered ${styles['img1-wrapper']}`}>
                    <ImgViewer
                      classN={`${styles['img1']}`}
                      imgSrc={projectMedia['/src/assets/projects/studbud/screen-kanban-3.png']}
                    />
                  </div>
                  <figcaption>The kanban board; desktop view</figcaption>
                </figure>
                <figure className={`${styles['side']} media-wrapper nowrap`}>
                  <div className={`img-wrapper bordered ${styles['img2-wrapper']}`}>
                    <ImgViewer
                      classN={`${styles['img2']}`}
                      imgSrc={projectMedia['/src/assets/projects/studbud/screen-kanban-3-mobile.png']}
                    />
                  </div>
                  <figcaption>Mobile view</figcaption>
                </figure>
              </div>
            </div>
          </Fade>

          <h3 className="article-h3 text-margins">Pomodoro timer</h3>

          <Fade keyframes={fadeInPushDown} duration={375} triggerOnce delay={20} cascade damping={0.1}>
            <div className={`${styles['section1b-media-double']}`}>
              <div className={`${styles['double-media']} media-container double extra-margins`}>
                <figure className={`${styles['lead']} media-wrapper`}>
                  <div className={`img-wrapper bordered ${styles['img1-wrapper']}`}>
                    <ImgViewer
                      classN={`${styles['img1']}`}
                      imgSrc={projectMedia['/src/assets/projects/studbud/screen-timer-3.png']}
                    />
                  </div>
                  <figcaption>The pomodoro timer and music player; desktop view</figcaption>
                </figure>
                <figure className={`${styles['side']} media-wrapper nowrap`}>
                  <div className={`img-wrapper bordered ${styles['img2-wrapper']}`}>
                    <ImgViewer
                      classN={`${styles['img2']}`}
                      imgSrc={projectMedia['/src/assets/projects/studbud/screen-timer-2-mobile.png']}
                    />
                  </div>
                  <figcaption>Mobile view</figcaption>
                </figure>
              </div>
            </div>
          </Fade>

          <ArticleFooter article={'Studbud'} articleSection={'The solution'} lastUpdate={'28-05-25'} />
        </section>
      </div>
    </>
  )
}

function Projects_Studbud() {
  // Handle nav
  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate('/', {
      viewTransition: true,
      state: { returning: true },
    })
  }

  // Extract dispensing template from Dispense page using useLocation
  const location = useLocation()

  const [headerSticky, setHeaderSticky] = useState(false)

  // Tab handling
  // Active tab
  const [activeSection, setActiveSection] = useState(`/`)
  const activeSectionStateHandler = (data) => {
    if (activeSection != data && !tabListStuck) {
      document.getElementById('convey-section0')?.scrollIntoView({ behavior: 'instant', block: 'start' })
    }
    setActiveSection(data)
  }
  // Check if we sticky the tab list toolbar or not
  const [tabListStuck, setTabListStuck] = useState(false)
  const tabListStateHandler = (data) => {
    if (activeSection != data) {
    }
    setTabListStuck(data)
  }
  // Last/next tab buttons
  const handleLastClick = () => {
    setActiveSection(activeSection - 1)
  }
  const handleNextClick = () => {
    setActiveSection(activeSection + 1)
  }
  useEffect(() => {
    navigate(`/projects/studbud${activeSection}`)
    console.log(activeSection)
  }, [activeSection, setActiveSection])

  const [topPos, setTopPos] = useState(0)
  useEffect(() => {
    console.log(topPos)
  }, [topPos, setTopPos])

  const sections = ['/']

  return (
    <>
      <Article_Wrapper
        article="studbud"
        index={3}
        topPos={topPos}
        tabListStuck={tabListStuck}
        setTabListStuck={tabListStateHandler}
        headerSticky={headerSticky}
        setHeaderSticky={setHeaderSticky}>
        <Subnav
          index={3}
          handleBackClick={handleBackClick}
          maxSections={2}
          activeSection={activeSection}
          tabListStuck={tabListStuck}
          headerSticky={headerSticky}>
          <RenderTab
            name={'The solution'}
            id={0}
            icon={'lightbulb'}
            type={'primary'}
            state={activeSection == sections[0] ? 'active' : null}
            setActiveSection={() => activeSectionStateHandler(sections[0])}
          />
          {/* <hr className='tab-div divider-v'/> */}
          {/* <RenderTab name={'Research'} id={1} icon={'biotech'}
                state={activeSection == sections[1] ? 'active' : null}
                setActiveSection={() => activeSectionStateHandler(sections[1])}/>
                <RenderTab name={'User testing'} id={2} icon={'groups_3'}
                state={activeSection == sections[2] ? 'active' : null} 
                setActiveSection={() => activeSectionStateHandler(sections[2])}/> */}
        </Subnav>
        <div className="project-body-container">
          <Outlet context={[topPos, setTopPos]} />
        </div>
      </Article_Wrapper>
    </>
  )
}

export { Projects_Studbud, Studbud_Main_Temp }
