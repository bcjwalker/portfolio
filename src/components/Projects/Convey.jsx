import { useNavigate, useLocation, Outlet, useOutletContext } from 'react-router'
import { useState, useRef, useEffect } from 'react'
import { ReactCompareSlider, ReactCompareSliderImage, styleFitContainer } from 'react-compare-slider'
// Animations :)
import { Fade } from 'react-awesome-reveal'
import { fadeInPushDown } from '../utils/Animations.jsx'

// Project info from raw table (not reversed)
// Convey id 2
import { projectData } from '@assets/projects-db.js'
const currentProj = projectData[2]

// Components
// Article wrapper and subnav
import { Article_Wrapper, RenderTab, Subnav } from '../utils/Article_Wrapper.jsx'
// Article body components
import { Details, Details_Static, Nav, ArticleFooter } from '../utils/Article_Misc.jsx'
import VideoPlayerCard from '../utils/Article_VideoPlayer.jsx'
import ImgViewer from '../utils/Article_ImgViewer.jsx'
import CompCard from '../utils/Article_CompCard.jsx'
import InfoCard from '../utils/Article_InfoCard.jsx'
import { WipCard, WipCardFooter } from '../utils/Article_WipCard.jsx'

// Styles
import styles from './Convey.module.css'

const headerImg = `${currentProj.thumb.slice(0, -4)}-full.jpg`

// Glob import
const projectMedia = import.meta.glob(
  [
    '@assets/projects/convey/*/*.{jpg,png,mp4,png}',
    '@assets/projects/convey/*.{jpg,png,mp4,png}',
    '@assets/software/*.ico',
  ],
  { eager: true, query: '?url', import: 'default' }
)
console.log(projectMedia)

// Article sections
function Convey_Main_Temp(props) {
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
        <h2 className="article-h2 text-margins article-top" id="convey-section0" ref={topRef}>
          (Top)
        </h2>

        <WipCard />

        {firstViewing ? <InfoCard /> : null}

        <figure className={`media-wrapper extra-margins`}>
          <div className={`img-wrapper bordered`}>
            <ImgViewer imgSrc={projectMedia[headerImg]} />
          </div>
          <figcaption>A slice of branding from the promotional video I helped create</figcaption>
        </figure>

        <section className={`projects-body-section`} id={styles['section1']}>
          <h2 className="article-h2 text-margins" lang="de" id={`convey-section${props.num}`}>
            Populist transport planning
          </h2>
          <p className="text-margins">
            Convey had an incredibly interesting core idea: what if Sydney bus routes were planned by
            averaging data from peoples' everyday routes? Instead of static routes planned by city planners
            for older needs of the city, we could theoretically plan the city's public transport by averaging
            out peoples' starting place and destination.
          </p>

          <Fade keyframes={fadeInPushDown} duration={375} triggerOnce delay={20} cascade damping={0.1}>
            <div className={`${styles['section1a-media-double']}`}>
              <div className={`${styles['double-media']} media-container double extra-margins`}>
                <figure className={`${styles['lead']} media-wrapper`}>
                  <div className={`img-wrapper bordered ${styles['img1-wrapper']}`}>
                    <ImgViewer
                      classN={`${styles['img1']}`}
                      imgSrc={projectMedia['/src/assets/projects/convey/screens/screen-routes-new-1.png']}
                    />
                  </div>
                  <figcaption>The step-by-step process for creating a new route</figcaption>
                </figure>
                <figure className={`${styles['side']} media-wrapper nowrap`}>
                  <div className={`img-wrapper bordered ${styles['img2-wrapper']}`}>
                    <ImgViewer
                      classN={`${styles['img2']}`}
                      imgSrc={
                        projectMedia['/src/assets/projects/convey/screens/screen-routes-new-2-open.png']
                      }
                    />
                  </div>
                  <figcaption>A preview of the new route</figcaption>
                </figure>
              </div>
            </div>
          </Fade>

          <Fade keyframes={fadeInPushDown} duration={375} triggerOnce delay={20} cascade damping={0.1}>
            <figure
              className={`media-container gallery-3 extra-margins ${styles['section1b-media-gallery']}`}>
              <figure className="media-wrapper lead" id={styles['section1b-lead']}>
                <div className="img-wrapper bordered" id={styles['lead-wrapper']}>
                  <ImgViewer
                    classN={`${styles['img1']}`}
                    imgSrc={projectMedia['/src/assets/projects/convey/screens/screen-routes-1-closed.png']}
                  />
                </div>
              </figure>
              <div className="side-media-wrapper">
                <figure className="media-wrapper side-1" id={styles['section1b-side-1']}>
                  <div className="img-wrapper bordered" id={styles['side-1-wrapper']}>
                    <ImgViewer
                      classN={`${styles['img2']}`}
                      imgSrc={projectMedia['/src/assets/projects/convey/screens/screen-map-1-open.png']}
                    />
                  </div>
                </figure>
                <figure className="media-wrapper side-2" id={styles['section1b-side-2']}>
                  <div className="img-wrapper bordered" id={styles['side-2-wrapper']}>
                    <ImgViewer
                      classN={`${styles['img3']}`}
                      imgSrc={
                        projectMedia['/src/assets/projects/convey/screens/screen-route-update-1-share.png']
                      }
                    />
                  </div>
                </figure>
              </div>
              <figcaption> A variety of views from the Figma prototype </figcaption>
            </figure>
          </Fade>

          <h2 className="article-h2 text-margins" lang="de" id={`convey-section2`}>
            Visual report
          </h2>

          <Fade keyframes={fadeInPushDown} duration={375} triggerOnce cascade delay={20} damping={0.1}>
            <figure
              className={`media-container gallery-3 extra-margins ${styles['section2c-media-gallery']}`}>
              <figure className="media-wrapper lead" id={styles['section2-lead']}>
                <div className="img-wrapper bordered" id={styles['lead-wrapper']}>
                  <ImgViewer
                    classN={`${styles['img1']}`}
                    imgSrc={projectMedia['/src/assets/projects/convey/report/report-page1.jpg']}
                  />
                </div>
              </figure>
              <div className="side-media-wrapper">
                <figure className="media-wrapper side-1">
                  <div className="img-wrapper bordered" id={styles['side-1-wrapper']}>
                    <ImgViewer
                      classN={`${styles['img2']}`}
                      imgSrc={projectMedia['/src/assets/projects/convey/report/report-page2.jpg']}
                    />
                  </div>
                </figure>
                <figure className="media-wrapper side-2">
                  <div className="img-wrapper bordered" id={styles['side-2-wrapper']}>
                    <ImgViewer
                      classN={`${styles['img3']}`}
                      imgSrc={projectMedia['/src/assets/projects/convey/report/report-page3.jpg']}
                    />
                  </div>
                </figure>
              </div>
              <figcaption>A sample of pages I wrote</figcaption>
            </figure>
          </Fade>

          <h2 className="article-h2 text-margins" lang="de" id={`convey-section3`}>
            Promo video
          </h2>

          <VideoPlayerCard
            margins="text-margins"
            id="vid-signup"
            audio={true}
            type="no-bg-no-radius"
            caption="A promo video designed for Convey; I handled the visuals while Jonathan created the music">
            <source
              src={projectMedia[`/src/assets/projects/convey/DECO2200_A3_Video.mp4`]}
              type="video/mp4"
            />
          </VideoPlayerCard>

          <ArticleFooter article={'Convey'} articleSection={'The solution'} lastUpdate={'28-05-25'} />
        </section>
      </div>
    </>
  )
}

function Projects_Convey() {
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
    navigate(`/projects/convey${activeSection}`)
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
        article="convey"
        index={2}
        topPos={topPos}
        tabListStuck={tabListStuck}
        setTabListStuck={tabListStateHandler}
        headerSticky={headerSticky}
        setHeaderSticky={setHeaderSticky}>
        <Subnav
          index={2}
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

export { Projects_Convey, Convey_Main_Temp }
