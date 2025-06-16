import { useNavigate, useLocation, Outlet, useOutletContext } from 'react-router'
import { useState, useRef, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

// Animations :)
import { Fade } from 'react-awesome-reveal'
import { fadeInPushUp, fadeInPushDown } from '../utils/Animations.jsx'

// Project info from raw table (not reversed);
// Sunstop id 0
import { projectData } from '@assets/projects-db.js'
const currentProj = projectData[0]

// Components
// Article wrapper and subnav
import { Article_Wrapper, RenderTab, Subnav } from '../utils/Article_Wrapper.jsx'
// Article body components
import { Details, Details_Static, Nav, ArticleFooter } from '../utils/Article_Misc.jsx'
import VideoPlayerCard from '../utils/Article_VideoPlayer.jsx'
import ImgViewer from '../utils/Article_ImgViewer.jsx'
import CompCard from '../utils/Article_CompCard.jsx'
import InfoCard from '../utils/Article_InfoCard.jsx'

// Styles
import styles from './Sunstop.module.css'

const headerImg = `${currentProj.thumb.slice(0, -4)}-full.jpg`

// Glob import
const projectMedia = import.meta.glob(
  [
    '@assets/projects/sunstop/*/*.{jpg,png,mp4,png}',
    '@assets/projects/sunstop/*.{jpg,png,mp4,png,pdf}',
    '@assets/software/*.ico',
  ],
  { eager: true, query: '?url', import: 'default' }
)
console.log(projectMedia)

// Article sections
function MainSection_Solution(props) {
  return (
    <>
      <section className={`projects-body-section`} id={styles['section1']}>
        <h2 className="article-h2 text-margins" lang="de" id={`sunstop-section${props.num}`}>
          Sunscreen-as-a-service
        </h2>
        <p className="text-margins">
          {' '}
          Whereas most solutions to Australia's skin cancer crisis have focused on education, my team and I
          decided to focus on <strong>how the sunscreen experience could be reframed</strong>. We also wanted
          to target Australian young males, who have the highest rate of sunscreen neglect.
        </p>
        <p className="text-margins">
          {' '}
          Our innovative solution to this problem was <strong className="special">Sunstop</strong>.
        </p>

        <Fade keyframes={fadeInPushDown} duration={375} triggerOnce delay={20} cascade damping={0.1}>
          <figure className={`${styles['section1a-media-double']} media-container double extra-margins`}>
            <figure className={`${styles['lead']} media-wrapper`}>
              <div className="video-wrapper bordered">
                <ImgViewer
                  classN={`${styles['section1-img1']}`}
                  imgSrc={projectMedia['/src/assets/projects/sunstop/screens/screen-landing.png']}
                />
              </div>
              <figcaption>Sunstop's landing page, with UV index and call to action</figcaption>
            </figure>

            <figure className={`${styles['side']} media-wrapper nowrap`}>
              <div className={`img-wrapper bordered transparent ${styles['section1-img2-wrapper']}`}>
                <ImgViewer
                  classN={`${styles['section1-img2']}`}
                  imgSrc={projectMedia['/src/assets/projects/sunstop/img-kiosk.png']}
                />
              </div>
              <figcaption>A digital render of the kiosk</figcaption>
            </figure>
          </figure>
        </Fade>

        <div className="body-two-col extra-margins">
          <div className="col-left">
            <p className="text-margins">
              {' '}
              Sunstop's core product is an interactive kiosk, delivering sunscreen as a service with an
              in-built <strong>tablet-size touchscreen and sunscreen dispenser</strong>. Users are encouraged
              to build healthier sunscreen habits through the <strong>targeted rewards system</strong>, which
              is unlocked after sign up.{' '}
            </p>
            <p className="text-margins">
              {' '}
              If rolled out a scale, these kiosks could be placed all around a city in strategic locations,
              enabling sunscreen application wherever and whenever.{' '}
            </p>

            <h3 className="article-h3 text-margins">Verifying & dispensing</h3>
            <p className="text-margins">
              {' '}
              One of our first tasks in designing the kiosk was to work out how users would choose sunscreen
              amounts, depending on the situation. We came up with an elegant solution, with{' '}
              <strong>presets based on how much skin is covered by ones' outfit</strong>. To enhance user
              freedom, we also included the option to dispense extra sunscreen at the end of the flow:
            </p>
          </div>
          <div className="col-right">
            <blockquote className="col-right">
              <span className={`material-symbols-sharp quote-glyph`}> format_quote </span>
              <span className="quote-text desc">
                My team and I decided to focus on{' '}
                <strong>how the sunscreen experience could be reframed</strong>
              </span>
            </blockquote>
          </div>
        </div>

        <VideoPlayerCard
          margins="text-margins"
          title="Dispense flow"
          id="vid-signup"
          audio={false}
          type="no-bg-no-radius"
          caption="Dispense flow: users pick how much sunscreen they get by picking an outfit, which corresponds to how many limbs are covered">
          <source src={projectMedia[`/src/assets/projects/sunstop/vid-dispense.mp4`]} type="video/mp4" />
        </VideoPlayerCard>

        <p className="text-margins">
          Given the transient nature of the Sunstop experience — each kiosk is its own device — we went back
          and forth on how to best verify that a user is actually in front of a machine. In the end, we
          decided that a standard <strong>two-factor authentication login/signup</strong> was best suited for
          user needs.
        </p>

        <VideoPlayerCard
          margins="text-margins"
          id="vid-signup"
          audio={false}
          type="no-bg-no-radius"
          caption="Onboarding flow: new users instantly get free sunscreen after joining, paving the way for the first reward">
          <source
            src={projectMedia[`/src/assets/projects/sunstop/vid-signup-w-dispense.mp4`]}
            type="video/mp4"
          />
        </VideoPlayerCard>

        {/* <figure className={`media-wrapper text-margins`}>
                <div className={`${styles['landscape']} img-wrapper bordered`}>
                    <ImgViewer classN={`${styles['section1-video']}`} imgSrc={projectMedia['/src/assets/projects/sunstop/img-about-trans.png']}/>
                </div>
                <figcaption>The kiosk's 4-step information plaque</figcaption>
            </figure>  */}

        <h3 className="article-h3 text-margins">Apply sunscreen, get rewards</h3>
        <p className="text-margins">
          {' '}
          To provide a hook and incentive for building a sun protection habit, we implemented a{' '}
          <strong>rewards system to encourage continued use</strong>. By dispensing sunscreen, users
          accumulate points along a score tracker, building towards a set of rewards.
        </p>

        <Fade keyframes={fadeInPushDown} duration={375} triggerOnce delay={20} cascade damping={0.1}>
          <div className={`${styles['section1b-media-double']}`}>
            <div className={`${styles['double-media']} media-container double extra-margins`}>
              <figure className={`${styles['lead']} media-wrapper`}>
                <div className={`img-wrapper bordered ${styles['img1-wrapper']}`}>
                  <ImgViewer
                    classN={`${styles['img1']}`}
                    imgSrc={projectMedia['/src/assets/projects/sunstop/screens/screen-home-redeem.png']}
                  />
                </div>
                <figcaption>Home page, with score tracker - one reward has been unlocked</figcaption>
              </figure>
              <figure className={`${styles['side']} media-wrapper nowrap`}>
                <div className={`img-wrapper bordered ${styles['img2-wrapper']}`}>
                  <ImgViewer
                    classN={`${styles['img2']}`}
                    imgSrc={projectMedia['/src/assets/projects/sunstop/screens/screen-redeem.png']}
                  />
                </div>
                <figcaption>Dialog for confirming reward redemption</figcaption>
              </figure>
            </div>
          </div>
        </Fade>

        <p className="text-margins">
          {' '}
          Sadly, for reasons of time, we were only able to finalise a set of mockup rewards, in lieu of a
          fully comprehensive, market-driven reward service. We had a few ideas for a final design that
          weren't able to be completed, such as:
        </p>
        <ul className="text-margins">
          <li>
            <strong>Franchise Sunstop kiosks</strong> for external organisations, who could implement targeted
            rewards for their specific target users;
          </li>
          <li>
            <strong>A rotating set of rewards</strong> that would change throughout the year, potentially
            giving the service a sense of <strong>FOMO</strong>;
          </li>
          <li>
            And <strong>seasonal collaborations</strong> with popular brands, possibly featuring coupons as
            rewards.
          </li>
        </ul>

        <h3 className="article-h3 text-margins">Marketing campaign</h3>
        <p className="text-margins">
          We also considered the market entry for Sunstop developing the accompanying{' '}
          <strong>'Don't be macho about sunscreen'</strong> advertisement campaign. While I didn't have too
          much involvement with this side of the project, I was able to provide some feedback as a member of
          the target audience.
        </p>

        <Fade keyframes={fadeInPushDown} duration={375} triggerOnce delay={20} cascade damping={0.1}>
          <figure className={`media-container gallery-3 extra-margins ${styles['section1c-media-gallery']}`}>
            <figure className="media-wrapper lead" id={styles['section1c-lead']}>
              <div className="img-wrapper bordered" id={styles['wrapper']}>
                <ImgViewer
                  classN={`${styles['img1']}`}
                  imgSrc={projectMedia['/src/assets/projects/sunstop/insitu/concept-1.jpg']}
                />
              </div>
            </figure>
            <div className="side-media-wrapper">
              <figure className="media-wrapper side-1" id={styles['section1c-side-1']}>
                <div className="img-wrapper bordered" id={styles['section1c-side-1-wrapper']}>
                  <ImgViewer
                    classN={`${styles['img2']}`}
                    imgSrc={projectMedia['/src/assets/projects/sunstop/insitu/concept-2.jpg']}
                  />
                </div>
              </figure>
              <figure className="media-wrapper side-2" id={styles['section1c-side-2']}>
                <div className="img-wrapper bordered" id={styles['section1c-side-2-wrapper']}>
                  <ImgViewer
                    classN={`${styles['img3']}`}
                    imgSrc={projectMedia['/src/assets/projects/sunstop/insitu/concept-4.jpg']}
                  />
                </div>
              </figure>
            </div>
            <figcaption>
              A sample of pages I wrote, and a styleguide I developed for the team to use
            </figcaption>
          </figure>
        </Fade>
      </section>
    </>
  )
}

// Section - Research
function MainSection_Solution_Comparisons(props) {
  // Interface comparisons
  // First comparison
  const compAitem1 = () => {
    return (
      <img
        className="compare-media"
        loading="lazy"
        src={projectMedia['/src/assets/projects/sunstop/screens/screen-verif-before.png']}
        alt="Image one"
      />
    )
  }
  const compAitem2 = () => {
    return (
      <video className="compare-media" autoPlay={true} loop muted>
        <source src={projectMedia['/src/assets/projects/sunstop/vid-verif-loop02.mp4']} type="video/mp4" />{' '}
        Your browser does not support the video tag.{' '}
      </video>
    )
  }
  // Second comparison
  const compBitem1 = () => {
    return (
      <img
        className="compare-media"
        loading="lazy"
        src={projectMedia['/src/assets/projects/sunstop/screens/screen-landing-before.png']}
        alt="Image one"
      />
    )
  }
  const compBitem2 = () => {
    return (
      <img
        className="compare-media"
        loading="lazy"
        src={projectMedia['/src/assets/projects/sunstop/screens/screen-landing.png']}
        alt="Image one"
      />
    )
  }
  // Third comparison
  const compCitem1 = () => {
    return (
      <img
        className="compare-media"
        loading="lazy"
        src={projectMedia['/src/assets/projects/sunstop/screens/screen-login-before.png']}
        alt="Image one"
      />
    )
  }
  const compCitem2 = () => {
    return (
      <img
        className="compare-media"
        loading="lazy"
        src={projectMedia['/src/assets/projects/sunstop/screens/screen-login.png']}
        alt="Image two"
      />
    )
  }
  // Fourth comparison
  const compDitem1 = () => {
    return (
      <img
        className="compare-media"
        loading="lazy"
        src={projectMedia['/src/assets/projects/sunstop/screens/screen-home-before.png']}
        alt="Image one"
      />
    )
  }
  const compDitem2 = () => {
    return (
      <img
        className="compare-media"
        loading="lazy"
        src={projectMedia['/src/assets/projects/sunstop/screens/screen-home-redeem.png']}
        alt="Image two"
      />
    )
  }

  return (
    <>
      <section className={`projects-body-section`} id={styles['section2']}>
        <h2 className="article-h2 text-margins" lang="de" id={`sunstop-section${props.num}`}>
          Selected contributions
        </h2>
        <h3 className="article-h3 text-margins">Overhauling the interface</h3>
        <p className="text-margins">
          {' '}
          At one point late in prototyping, visual changes on the app slowed to a crawl. So I led a push to{' '}
          <strong>boost Sunstop's visual expression</strong> as well as{' '}
          <strong>generally improving user control, clarity of copy and visibility of system status</strong>
          .{' '}
        </p>
        <p className="text-margins">
          {' '}
          Below are some before/after comparisons to demonstrate the visual changes I singlehandedly oversaw.
          It seems like a lot of work for one person, but every difference between these two iterations was
          done <strong>solely</strong> by me:
        </p>

        <CompCard
          compA={[
            projectMedia['/src/assets/projects/sunstop/screens/screen-landing.png'],
            compBitem1,
            compBitem2,
            'Landing page: shows the more modern colour palette I created; plus redesigned call-to-action button; also note the persistent header clock I added',
          ]}
          compB={[
            projectMedia['/src/assets/projects/sunstop/screens/screen-login.png'],
            compCitem1,
            compCitem2,
            'Login/signup page: added progress bar to track login process; completely rewrote copy to modern standards; note absence of about button, which I removed due to the page being printed on the kiosk itself',
          ]}
          compC={[
            projectMedia['/src/assets/projects/sunstop/screens/screen-verif.png'],
            compAitem1,
            compAitem2,
            'Verification page: designed spinner to inform user of system status; updated button sizes for tablet interactions; updated button copy for clarity',
          ]}
          compD={[
            projectMedia['/src/assets/projects/sunstop/screens/screen-home-redeem.png'],
            compDitem1,
            compDitem2,
            'Home page: made buttons more interesting; added flavour text to congratulate user; scaled up progress tracker for clarity',
          ]}
        />

        <p className="text-margins">
          {' '}
          As seen above, I also added a user profile button, helping to communicate login state and serve as a
          hub for user-related interactions. Up to this point, there had not actually been a way to modify
          user details, a major issue for user control and freedom.{' '}
        </p>

        <Fade keyframes={fadeInPushDown} duration={375} triggerOnce delay={20} cascade damping={0.1}>
          <div className={`${styles['section2b-media-double']}`}>
            <div className={`${styles['double-media']} media-container double extra-margins`}>
              <figure className={`${styles['lead']} media-wrapper`}>
                <div className={`img-wrapper bordered ${styles['img1-wrapper']}`}>
                  <ImgViewer
                    classN={`${styles['img1']}`}
                    imgSrc={projectMedia['/src/assets/projects/sunstop/screens/screen-home-profile.png']}
                  />
                </div>
                <figcaption>Home page featuring new profile button I added, w/ menu open</figcaption>
              </figure>
              <figure className={`${styles['side']} media-wrapper nowrap`}>
                <div className={`img-wrapper bordered ${styles['img2-wrapper']}`}>
                  <ImgViewer
                    classN={`${styles['img2']}`}
                    imgSrc={projectMedia['/src/assets/projects/sunstop/screens/screen-home-profile-open.png']}
                  />
                </div>
                <figcaption>Dialog I created for editing user details</figcaption>
              </figure>
            </div>
          </div>
        </Fade>

        <h3 className="article-h3 text-margins">Managing the report</h3>
        <p className="text-margins">
          {' '}
          In addition to redesigning much of the interface, I also oversaw the design and layout of each
          visual report we submitted. We had a limited page count, so I put together a composition that
          emphasised information density, while also providing enough whitespace for readability.{' '}
        </p>

        <Fade keyframes={fadeInPushDown} duration={375} triggerOnce cascade delay={20} damping={0.1}>
          <figure className={`media-container gallery-3 extra-margins ${styles['section2c-media-gallery']}`}>
            <figure className="media-wrapper lead" id={styles['section2-lead']}>
              <div className="img-wrapper bordered" id={styles['lead-wrapper']}>
                <ImgViewer
                  classN={`${styles['img1']}`}
                  imgSrc={projectMedia['/src/assets/projects/sunstop/report/report-page1.jpg']}
                />
              </div>
            </figure>
            <div className="side-media-wrapper">
              <figure className="media-wrapper side-1">
                <div className="img-wrapper bordered" id={styles['side-1-wrapper']}>
                  <ImgViewer
                    classN={`${styles['img2']}`}
                    imgSrc={projectMedia['/src/assets/projects/sunstop/report/report-page2.jpg']}
                  />
                </div>
              </figure>
              <figure className="media-wrapper side-2">
                <div className="img-wrapper bordered" id={styles['side-2-wrapper']}>
                  <ImgViewer
                    classN={`${styles['img3']}`}
                    imgSrc={projectMedia['/src/assets/projects/sunstop/report/report-guide.jpg']}
                  />
                </div>
              </figure>
            </div>
            <figcaption>
              A sample of pages I wrote, and a styleguide I developed for the team to use
            </figcaption>
          </figure>
        </Fade>
      </section>
    </>
  )
}

// Section - Research
function MainSection_Research(props) {
  return (
    <>
      <section className={`projects-body-section ${styles['rsrch-section1']}`}>
        <div className="body-two-col extra-margins">
          <div className="col-left">
            <p className="text-margins">
              We have one of the worst rates of skin cancer in the world: in 2025,{' '}
              <strong>2 in 3 Australians</strong> will be diagnosed with a skin cancer in their lifetimes.
              Despite this,{' '}
              <a
                className="external-link" target="_blank">
                href="https://www.health.gov.au/ministers/the-hon-mark-butler-mp/media/breaking-australias-suntanning-obsession"
                74% of young Australians
              </a>{' '}
              believe their risk of getting skin cancer is unlikely. Australian men, however, are uniquely
              vulnerable, accounting for 58% of cancer diagnoses, and 65% of deaths.{' '}
            </p>
            <p className="text-margins">
              Clearly, traditional campaigns like 'Slop, Slop, Slap' have not had the intended impact for this
              generation.
            </p>
            <p className="text-margins">
              Hence, <strong>we decided to aim for a solution angled towards younger Australian men</strong>,
              while also keeping it appealing for other groups, particularly young people at large.{' '}
            </p>
          </div>
          <div className="col-right">
            <blockquote className="col-right card green">
              <span className={`material-symbols-sharp quote-glyph`}> format_quote </span>
              <span className="quote-text callout">2 in 3</span>
              <span className="quote-text desc">
                Australians will be diagnosed with a skin cancer in their lifetimes
              </span>
            </blockquote>
          </div>
        </div>
      </section>

      <section className={`projects-body-section ${styles['rsrch-section2']}`}>
        <h2 className="article-h2 text-margins" lang="de" id={`sunstop-section1`}>
          User research
        </h2>
        <p className="text-margins">
          Conducting interviews, questionnaires and diary studies (among mostly male participants), we
          assembled several key insights:
        </p>
        <div className="details-wrapper extra-margins insights-wrapper">
          <div className="details-row-wrapper extra-margins">
            <Details_Static
              title="Convenience and sensory experiences are critical"
              type="insight-card"
              colour="prmry">
              <p className="details-content">
                Young men are more likely to use sunscreen if it is easy to apply, feels good on the skin, and
                aligns with a desire for convenience.
              </p>
              <p className="details-content">
                <strong>Reframe:</strong> this doesn't necessarily have to refer to sensory experience, it
                perhaps could feel more natural by becoming a regular, unchanging habit, something users don't
                have to think much about
              </p>
            </Details_Static>
            <Details_Static
              title="Social influence plays a major role in sun safety"
              type="insight-card"
              colour="prmry">
              <p className="details-content">
                The behaviors and attitudes of peers significantly impact whether young men use sunscreen.
                This suggests a strong social component — social norms and peer pressure can either positively
                or negatively influence sun protection behaviors.
              </p>
              <p className="details-content">
                If sunscreen use is normalised and seen as a shared practice among friends, young men are more
                likely to adopt it.
              </p>
            </Details_Static>
          </div>
          <Details
            title="Knowledge gaps and a lack of awareness are barriers to good habits"
            type="insight-card"
            colour="scndry">
            <p className="details-content">
              There is a lack of awareness and understanding about the importance of sun protection as well as
              the consequences of sun exposure among young men. This knowledge gap directly impacts their sun
              safety practices.
            </p>
            <p className="details-content">
              For example, young men who are aware of statistics of sun cancer say that they are more inclined
              to practice sun safety.
            </p>
          </Details>
          <Details
            title="Personal experiences with sun exposure is a motivator for forming good sun protection habits"
            type="insight-card"
            colour="scndry">
            <p className="details-content">
              Personal experiences & values, such as past sunburns, knowing someone affected by skin cancer,
              not wanting to age increases the motivation of young men to adopt sun protection habits.
            </p>
            <p className="details-content">
              How can we get people to care about sun exposure if they haven't personally had any strong
              experiences?
            </p>
          </Details>
        </div>
      </section>

      <section className={`projects-body-section ${styles['rsrch-section3']}`}>
        <h2 className="article-h2 text-margins" lang="de" id={`sunstop-section3`}>
          Ideation & further problem definition
        </h2>
        <p className="text-margins">
          Mobilising these insights, we set about designing a solution, shooting off ideas like a{' '}
          <strong>social media platform</strong> for sunscreen reminders, a{' '}
          <strong>marketing campaign</strong> featuring screens with cameras to simulate what viewers would
          look like in the future without sun protection, and last but not least, an{' '}
          <strong>interactive kiosk</strong> for easily dispensing sunscreen.
        </p>
        <ul className="text-margins">
          <li>
            <strong>Rayminder:</strong> A social media platform based around sunscreen application 'nudges'
            for your friends
          </li>
          <li>
            <strong>SkinRay:</strong> A marketing campaign for sunscreen via public screens equipped with
            camera tech, simulating what the user might look like in the future without adequate sun
            protection
          </li>
          <li>
            <strong>UVGo:</strong> an interactive kiosk for easily dispensing sunscreen
          </li>
        </ul>
        <p className="text-margins">
          Through <strong>design matrices</strong>, a <strong>PMI chart</strong> and{' '}
          <strong>further user feedback</strong>, we decided to synthesise the first two concepts into the
          third, leading to the creation of <strong>SunStop</strong>.{' '}
        </p>
        <h4 className="article-h4 text-margins">Gamifying sunscreen</h4>
        <div className="body-two-col extra-margins">
          <div className="col-left">
            <p className="text-margins">
              Essentially, we approached the problem of Australia's dire skin cancer rate (see below) as one
              of <strong>trying to engage users with a new habit</strong>. Many healthy habits considered
              'boring', like learning and exercise, have been successfully built into a service in apps like
              Duolingo and Strava. Similarly, our goal was to turn the young (particularly male) Australian's
              neglected regular sunscreen routine into an engaging experience.
            </p>
            <p className="text-margins details-content">
              And so, delving deep into the literature I asked myself:{' '}
              <strong>how can app design promote positive habits in end users?</strong> What design choices
              make boring routines, e.g. exercise, seem more appealing? Eventually, narrowing my search to
              design/health studies on the psychology behind habit formation, and the aspects that make up the
              design of successful health apps.{' '}
            </p>
            <p className="text-margins details-content">
              I found a promising avenue in the use of <strong>gamification</strong>, particularly in
              rewards-for-exercise apps, which had been proven to increase user engagement and encourage
              healthy habits. This was the piece of research that eventually led to Sunstop's rewards system.
            </p>
          </div>
          <div className="col-right">
            <blockquote className="col-right">
              <span className={`material-symbols-sharp quote-glyph`}> format_quote </span>
              <span className="quote-text desc">
                I asked myself: how can app design promote positive habits in end users?
              </span>
            </blockquote>
          </div>
        </div>
      </section>
    </>
  )
}
function MainSection_Grad(props) {
  return (
    <>
      <section className={`projects-body-section ${styles['section5']}`}>
        <h2 className="article-h2" id={`sunstop-section${props.num}`}>
          Epilogue: the grad show
        </h2>
        <p className="text-margins">
          {' '}
          For final-year uni students studying in the Faculty of Architecture/Design, a grad show for final
          projects was put on in December of 2024. Finalising the kiosk prototype and putting together some
          showcase assets, my team made a really great booth to show off Sunstop.{' '}
        </p>
        <p className="text-margins">
          {' '}
          While we didn't win any awards at the show amongst tough competition, we had the honour of getting
          the <strong>highest mark in our class</strong>, the web design cohort.{' '}
        </p>
        <p className="text-margins">
          {' '}
          Overall, I felt incredibly happy with this project. It was a fitting end for my degree, and I think
          the results speak for themselves.{' '}
        </p>

        <Fade keyframes={fadeInPushDown} duration={375} triggerOnce delay={20} cascade damping={0.1}>
          <figure className={`media-container gallery-3 extra-margins ${styles['section5a-media-gallery']}`}>
            <figure className="media-wrapper lead" id={styles['section5-lead']}>
              <div className="img-wrapper bordered" id={styles['lead-wrapper']}>
                <ImgViewer
                  classN={`${styles['img1']}`}
                  imgSrc={projectMedia['/src/assets/projects/sunstop/grad/poster.png']}
                />
              </div>
            </figure>
            <div className="side-media-wrapper">
              <figure className="media-wrapper side-1" id={styles['section5a-side-1']}>
                <div className="img-wrapper bordered" id={styles['side-1-wrapper']}>
                  <ImgViewer
                    classN={`${styles['img2']}`}
                    imgSrc={projectMedia['/src/assets/projects/sunstop/grad/final-build-cropped.jpg']}
                  />
                </div>
              </figure>
              <figure className="media-wrapper side-2" id={styles['section5a-side-2']}>
                <div className="img-wrapper bordered" id={styles['side-2-wrapper']}>
                  <ImgViewer
                    classN={`${styles['img3']}`}
                    imgSrc={projectMedia['/src/assets/projects/sunstop/grad/family.jpg']}
                  />
                </div>
              </figure>
            </div>
            <figcaption>
              {' '}
              The poster created for our grad booth; the grad booth; and me with my parents{' '}
            </figcaption>
          </figure>
        </Fade>
      </section>
    </>
  )
}
function MainSection_Skills(props) {
  return (
    <>
      <section className={`projects-body-section ${styles['section3']}`}>
        <h2 className="article-h2" id={`sunstop-section${props.num}`}>
          Updating skills for 2024
        </h2>
        <p className="text-margins">Sunstop presented me with two new challenges:</p>
        <ul className="text-margins">
          <li>
            Designing for a <strong>tablet interface</strong>
          </li>
          <li>
            Coding with <strong>React.js</strong>
          </li>
        </ul>
        <p className="text-margins">
          Despite having to rapidly learn these new frameworks, I quickly brought some of my design skills up
          to a more modern standard, and I was able to become a leading force in the project.
        </p>
      </section>
    </>
  )
}

// Section 1 - the solution
function Sunstop_Main_Section1() {
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
        <h2 className="article-h2 text-margins article-top" id="sunstop-section0" ref={topRef}>
          (Top)
        </h2>

        {firstViewing ? <InfoCard /> : null}

        <figure className={`media-wrapper extra-margins`}>
          <div className={`img-wrapper bordered`}>
            <ImgViewer imgSrc={projectMedia[headerImg]} />
          </div>
          <figcaption>
            The info panel we developed to explain the service, alongside a mockup of the kiosk
          </figcaption>
        </figure>

        {/* Start article bulk */}
        <section className="project-sections-wrapper">
          {/* Section 1 */}
          <Fade keyframes={fadeInPushDown} duration={375} triggerOnce delay={100} cascade damping={0.1}>
            <MainSection_Solution num="1" />
          </Fade>

          {/* Section 2 - comparisons*/}
          <Fade keyframes={fadeInPushDown} duration={375} triggerOnce delay={100}>
            <MainSection_Solution_Comparisons num="2" />
          </Fade>

          <ArticleFooter article={'Sunstop'} articleSection={'The solution'} lastUpdate={'28-05-25'} />
        </section>
        {/* End article bulk */}
      </div>
    </>
  )
}
// Section 2 - research
function Sunstop_Main_Section2() {
  return (
    <>
      {/* Nav with dynamic article TOC */}
      <div className="project-left-container">
        <Nav />
      </div>
      {/* Article main */}
      <div className="project-main-container">
        <h2 className="article-h2 text-margins article-top" id="sunstop-section0">
          (Top)
        </h2>

        {/* Start article bulk */}
        <section className="project-sections-wrapper">
          {/* Section 4 */}
          <Fade keyframes={fadeInPushDown} duration={375} triggerOnce delay={100} damping={0.1}>
            {/* <hr className='extra-margins article-hr'/> */}
            <MainSection_Research num="1" />
          </Fade>

          <ArticleFooter article={'Sunstop'} articleSection={'The solution'} lastUpdate={'28-05-25'} />
        </section>
        {/* End article bulk */}
      </div>
    </>
  )
}

function Projects_Sunstop() {
  // Handle nav
  const navigate = useNavigate()
  const handleBackClick = () => {
    navigate('/', {
      viewTransition: true,
      state: { returning: true },
    })
  }

  // Tab handling
  // Is header stickied
  const [headerSticky, setHeaderSticky] = useState(false)
  // Active tab
  const [activeSection, setActiveSection] = useState('')
  const activeSectionStateHandler = (data) => {
    if (activeSection != data && !tabListStuck) {
      document.getElementById('sunstop-section0')?.scrollIntoView({ behavior: 'instant', block: 'start' })
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
  // Navigate to page when activeSection changes
  useEffect(() => {
    navigate(`/projects/sunstop${activeSection}`)
    console.log(activeSection)
  }, [activeSection, setActiveSection])

  const [topPos, setTopPos] = useState(0)
  useEffect(() => {
    console.log(topPos)
  }, [topPos, setTopPos])

  const sections = ['', '/research', '/testing']

  return (
    <>
      <Article_Wrapper
        article="sunstop"
        index={0}
        topPos={topPos}
        tabListStuck={tabListStuck}
        setTabListStuck={tabListStateHandler}
        headerSticky={headerSticky}
        setHeaderSticky={setHeaderSticky}>
        <Subnav
          index={0}
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
          <RenderTab
            name={'Research'}
            id={1}
            icon={'biotech'}
            state={activeSection == sections[1] ? 'active' : null}
            setActiveSection={() => activeSectionStateHandler(sections[1])}
          />
          {/* <RenderTab name={'User testing'} id={2} icon={'groups_3'}
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

export { Projects_Sunstop, Sunstop_Main_Section1, Sunstop_Main_Section2 }
