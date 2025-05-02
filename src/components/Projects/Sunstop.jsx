import { useNavigate, useLocation } from 'react-router';
import {useState, useRef, useEffect} from 'react'
import { ReactCompareSlider, ReactCompareSliderImage, styleFitContainer } from 'react-compare-slider';
// Animations :)
import { Fade } from "react-awesome-reveal";
import { fadeInPushUp, fadeInPushDown } from "../utils/Animations.jsx";

// Project info from raw table (not reversed);
// Sunstop id 0, first in table
import { projectData } from '@assets/projects-db.js';
const currentProj = projectData[0];

// Components
import { ProjectOpen_Template, LeadCard, Details, Details_Static, Nav } from './_ProjectOpen_Template.jsx';
import VideoPlayerCard from '../utils/Article_VideoPlayer.jsx';
import ImgViewer from '../utils/Article_ImgViewer.jsx';

// Styles
import styles from './Sunstop.module.css';

// Glob import
const projectMedia = import.meta.glob(
    ['@assets/projects/sunstop/*/*.{jpg,png,mp4,png}',
    '@assets/projects/sunstop/*.{jpg,png,mp4,png}',
    '@assets/software/*.ico'], 
    {eager: true, query: '?url', import: 'default'});
console.log(projectMedia)


// Article sections
function MainSection_Solution(props) {
    return (
        <>
        <section className={`projects-body-section`} id={styles['section1']}>  
            <h2 className='article-h2 text-margins'  id={`sunstop-section${props.num}`}>Sunscreen-as-a-service</h2>    
            <p className='text-margins'> Whereas most solutions to Australia's skin cancer crisis have focused on education, my team and I decided to focus on <strong>how the sunscreen experience could be reframed</strong>. We also wanted to target Australian young males, who have the highest rate of sunscreen neglect.</p>  
            <p className='text-margins'> Our innovative solution to this problem was <strong className='special'>Sunstop</strong>.</p> 

            <div className={`${styles['section1a-media-double']}`}>
                <div className={`${styles['double-media']} media-container double extra-margins`}>
                    <figure className={`${styles['lead']} media-wrapper`}>
                        <div className='video-wrapper bordered'>
                            <ImgViewer classN={`${styles['section1-img1']}`} imgSrc={projectMedia['/src/assets/projects/sunstop/screens/screen-landing.png']}/>
                        </div>
                        <figcaption>Sunstop's landing page, with UV index and call to action</figcaption>
                    </figure>

                    <figure className={`${styles['side']} media-wrapper nowrap`}>
                        <div className={`img-wrapper bordered transparent ${styles['section1-img2-wrapper']}`}>
                            <ImgViewer classN={`${styles['section1-img2']}`} imgSrc={projectMedia['/src/assets/projects/sunstop/img-kiosk.png']}/>
                        </div>
                        <figcaption>A digital render of the kiosk</figcaption>
                    </figure>
                </div>
            </div>

            
            <p className='text-margins'> Sunstop's core product is an interactive kiosk, delivering sunscreen as a service with an in-built <strong>tablet-size touchscreen and sunscreen dispenser</strong>. Users are encouraged to build healthier sunscreen habits through the <strong>targeted rewards system</strong>, which is unlocked after sign up. </p>
            <p className='text-margins'> If rolled out a scale, these kiosks could be placed all around a city in strategic locations, enabling sunscreen application wherever and whenever. </p>

            <VideoPlayerCard margins='text-margins' title='Dispense flow' id='vid-signup' type='no-bg-no-radius' caption='Onboarding flow: new users instantly get free sunscreen after joining, paving the way for the first reward'>
            <source src={projectMedia[`/src/assets/projects/sunstop/vid-dispense.mp4`]} type="video/mp4"/>
            </VideoPlayerCard>

            {/* <figure className={`media-wrapper text-margins`}>
                <div className={`${styles['landscape']} img-wrapper bordered`}>
                    <ImgViewer classN={`${styles['section1-video']}`} imgSrc={projectMedia['/src/assets/projects/sunstop/img-about-trans.png']}/>
                </div>
                <figcaption>The kiosk's 4-step information plaque</figcaption>
            </figure>  */}

            <h3 className='article-h3 text-margins'>Dispense sunscreen, get rewards</h3>
            <p className='text-margins'> To provide a hook and incentive for building a sun protection habit, we implemented a basic rewards system for continued use. By dispensing sunscreen, users accumulate points along a score tracker, building up to one or more seasonal rewards. </p>
            
            {/* <VideoPlayerCard margins='text-margins' id='vid-signup' type='no-bg-no-radius' caption='Onboarding flow: new users instantly get free sunscreen after joining, paving the way for the first reward'>
            <source src={projectMedia[`/src/assets/projects/sunstop/vid-redeem.mp4`]} type="video/mp4"/>
            </VideoPlayerCard> */}

            {/* <figure className={`media-container gallery-3 extra-margins ${styles['section1b-media-gallery']}`}>
                <figure className='media-wrapper lead'>
                    <div className={`img-wrapper bordered`}>
                        <ImgViewer classN={`${styles['img1']}`} imgSrc={projectMedia['/src/assets/projects/sunstop/screens/screen-home-redeem.png']}/>
                    </div>
                </figure>
                <div className='side-media-wrapper'>
                    <figure className={`media-wrapper ${styles['side-1']}`}>
                        <div className={`img-wrapper ${styles['side-1']} bordered`}>
                        <ImgViewer classN={`${styles['img2']}`} imgSrc={projectMedia['/src/assets/projects/sunstop/screens/screen-redeem-crop.png']}/>
                        </div>
                    </figure>
                    <figure className={`media-wrapper ${styles['side-2']}`}>
                        <div className={`img-wrapper ${styles['side-2']} bordered`}>
                        <ImgViewer classN={`${styles['img3']}`} imgSrc={projectMedia['/src/assets/projects/sunstop/mockups/showcase_rewards.jpg']}/>
                        </div>
                    </figure>
                </div>
                <figcaption>Left</figcaption>
            </figure>  */}

            <div className={`${styles['section1b-media-double']}`}>
                <div className={`${styles['double-media']} media-container double extra-margins`}>
                    <figure className={`${styles['lead']} media-wrapper`}>
                        <div className={`img-wrapper bordered ${styles['img1-wrapper']}`}>
                            <ImgViewer classN={`${styles['img1']}`} imgSrc={projectMedia['/src/assets/projects/sunstop/screens/screen-home-redeem.png']}/>
                        </div>
                        <figcaption>Home page, with score tracker - one reward has been unlocked</figcaption>
                    </figure>
                    <figure className={`${styles['side']} media-wrapper nowrap`}>
                        <div className={`img-wrapper bordered ${styles['img2-wrapper']}`}>
                            <ImgViewer classN={`${styles['img2']}`} imgSrc={projectMedia['/src/assets/projects/sunstop/screens/screen-redeem.png']}/>
                        </div>
                        <figcaption>Dialog for confirming reward redemption</figcaption>
                    </figure>
                </div>
            </div>

            <p className='text-margins'> To provide a hook and incentive for building a sun protection habit, we implemented a basic rewards system for continued use. By dispensing sunscreen, users accumulate points along a score tracker, building up to one or more seasonal rewards. </p>
            
            <h3 className='article-h3 text-margins'>How to verify a user</h3>
            <p className='text-margins'>Given Sunstop's transient nature We did a </p>

            <VideoPlayerCard margins='text-margins' id='vid-signup' type='no-bg-no-radius' caption='Onboarding flow: new users instantly get free sunscreen after joining, paving the way for the first reward'>
            <source src={projectMedia[`/src/assets/projects/sunstop/vid-signup-w-dispense.mp4`]} type="video/mp4"/>
            </VideoPlayerCard>

            <h3 className='article-h3 text-margins'>Marketing campaign</h3>
            <p className='text-margins'>We also considered the market entry for Sunstop, developing the accompanying <strong>'Don't be macho about sunscreen'</strong> advertisement campaign. Promoting both the service and healthy sun protection habits, the ads speak directly to our target users, highlighting the fact that true strength and success includes self-care.</p>
            
            <div className={`media-container gallery-3 extra-margins ${styles['sunstop-section3-gallery']}`}>
                <figure className='media-wrapper lead'>
                    <div className='img-wrapper bordered'>
                        <img className={`${styles['section1-video']}`} src={projectMedia[`/src/assets/projects/sunstop/insitu/final-build-cropped.jpg`]}/>
                    </div>
                </figure>
                <div className='side-media-wrapper'>
                    <figure className='media-wrapper side-1'>
                        <div className='img-wrapper bordered transparent'>
                            <img className={`${styles['section1-video']}`} src={projectMedia[`/src/assets/projects/sunstop/img-kiosk.png`]}/>
                        </div>
                    </figure>
                    <figure className='media-wrapper side-2'>
                        <div className='img-wrapper bordered'>
                            <img className={`${styles['section1-video']}`} src={projectMedia[`/src/assets/projects/sunstop/thumb.jpg`]}/>
                        </div>
                    </figure>
                </div>
            </div> 
        </section>
        </>
    )
}

function MainSection_Comparisons(props) {
    return (
        <>
        <section className={`projects-body-section ${styles['section2']}`}>
            <h2 className='article-h2 text-margins' id={`sunstop-section${props.num}`}>Selected contributions</h2>
            <div className={`${styles['section2-bodytext-wrapper']}`}>
                <p className='text-margins'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
            </div>
            
            <figure className='media-wrapper'>
                <div className='text-margins video-wrapper bordered'>
                    <ReactCompareSlider style={{ borderRadius: '18px' }}
                        itemOne={<img loading="lazy" src={projectMedia["/src/assets/projects/sunstop/screens/screen-verif-before.png"]} alt="Image one" />}
                        itemTwo={<video className={`${styles['section2-video']}`} autoPlay={true} loop muted>
                            <source src={projectMedia["/src/assets/projects/sunstop/vid-verif-loop02.mp4"]} type="video/mp4"/>
                            Your browser does not support the video tag. </video>} 
                    />
                </div>
            </figure>
        </section>
        </>
    )
}

function MainSection_Research(props) {
    return (
        <>
        <section className={`projects-body-section ${styles['section3']}`}>
            <hr className='extra-margins'/>
            <h2 className='article-h2 text-margins' id={`sunstop-section${props.num}`}>Background: our national cancer</h2>
            <h3 className='article-h3 text-margins'>The problem space</h3>
            <div className='body-two-col extra-margins'>
                <div className='col-left'>
                    <p className='text-margins'>We have one of the worst rates of skin cancer in the world: in 2025, <strong>2 in 3 Australians</strong> will be diagnosed with a skin cancer in their lifetimes. Despite this, <a className='external-link' href="https://www.health.gov.au/ministers/the-hon-mark-butler-mp/media/breaking-australias-suntanning-obsession" target='_blank'>74% of young Australians</a> believe their risk of getting skin cancer is unlikely. Australian men, however, are uniquely vulnerable, accounting for 58% of cancer diagnoses, and 65% of deaths. </p>
                    <p className='text-margins'>Clearly, traditional campaigns like 'Slop, Slop, Slap' have not had the intended impact for this generation.</p>
                    <p className='text-margins'>Hence, <strong>we decided to aim for a solution angled towards younger Australian men</strong>, while also keeping it appealing for other groups, particularly young people at large. </p> 
                </div>
                <div className='col-right'>
                    <blockquote className='col-right card green'>
                        <span className={`material-symbols-sharp quote-glyph`}> format_quote </span>
                        <span className='quote-text callout'>2 in 3</span>
                        <span className='quote-text desc'>Australians will be diagnosed with a skin cancer in their lifetimes</span>
                    </blockquote>
                </div>
            </div>

            <h3 className='article-h3 text-margins'>User research</h3>
            <p className='text-margins'>Conducting interviews, questionnaires and diary studies (among mostly male participants), we assembled several key insights:</p>
            <div className='details-wrapper text-margins insights-wrapper'>
                <div className='details-row-wrapper extra-margins'>
                    <Details_Static title='Convenience and sensory experiences are critical' type='insight-card' colour='prmry'>
                        <p className='details-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                    </Details_Static>
                    <Details_Static title='Social influence plays a major role in sun safety' type='insight-card' colour='prmry'>
                        <p className='details-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                    </Details_Static>
                </div>
                <Details title='Knowledge gaps and a lack of awareness are barriers to good habits' type='insight-card' colour='scndry' >
                    <p className='details-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                </Details>
                <Details title='Personal experiences with sun exposure is a motivator for forming good sun protection habits' type='insight-card' colour='scndry' >
                    <p className='details-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                </Details>
            </div>
            {/* UNDONE: Cut for brevity  
            <ul className='text-margins'>
                <li><strong>Rayminder:</strong> A social media platform based around sunscreen application 'nudges' for your friends</li>
                <li><strong>SkinRay:</strong> A marketing campaign for sunscreen via public screens equipped with camera tech, simulating what the user might look like in the future without adequate sun protection</li>
                <li><strong>UVGo:</strong> an interactive kiosk for easily dispensing sunscreen</li>
            </ul> */}

            <h3 className='article-h3 text-margins'>Ideation & further research</h3>
            <p className='text-margins'>Mobilising these insights, we set about designing a solution, shooting off ideas like a <strong>social media platform</strong> for sunscreen reminders, a <strong>marketing campaign</strong> featuring screens with cameras to simulate what viewers would look like in the future without sun protection, and last but not least, an <strong>interactive kiosk</strong> for easily dispensing sunscreen.</p>
            <p className='text-margins'>Through <strong>design matrices</strong>, a <strong>PMI chart</strong> and <strong>further user feedback</strong>, we decided to synthesise the first two concepts into the third, leading to the creation of <strong>SunStop</strong>. </p>
            <div className='body-two-col extra-margins'>
                <div className='col-left'>
                    <p className='text-margins'>Essentially, we approached the problem of Australia's dire skin cancer rate (see below) as one of <strong>trying to engage users with a new habit</strong>. Many healthy habits considered 'boring', like learning and exercise, have been successfully built into a service in apps like Duolingo and Strava. Similarly, our goal was to turn the young (particularly male) Australian's neglected regular sunscreen routine into an engaging experience.</p>  
                    <p className='text-margins'> So, Sunstop, our <strong>Sunscreen-as-a-service</strong> platform, was born. </p>  
                    <p className='text-margins details-content'>Because of a personal inkling that <strong>the insights above were not strong to create an interesting design,</strong> before moving to the final design, I would undertake a further segment of research.</p>
                    <p className='text-margins details-content'>And so, delving deep into the literature I asked myself: <strong>how can app design promote positive habits in end users?</strong> What design choices make boring routines, e.g. exercise, seem more appealing? Eventually, narrowing my search to design/health studies on the psychology behind habit formation, and the aspects that make up the design of successful health apps. </p>
                    <p  className='text-margins details-content'>I found a promising avenue in the use of gamification. particularly rewards-for-exercise apps, which had been proven to</p>
                </div>
                <div className='col-right'>
                    <blockquote className='col-right'>
                        <span className={`material-symbols-sharp quote-glyph`}> format_quote </span>
                        <span className='quote-text desc'>I asked myself: how can app design promote positive habits in end users?</span>
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
        <section className={`projects-body-section ${styles['section4']}`}>   
            <h2 className='article-h2' id={`sunstop-section${props.num}`}>The grad show</h2>
        </section>
        </>
    )
}
function MainSection_Skills(props) {
    return (
        <>
        <section className={`projects-body-section ${styles['section5']}`}>
            <h2 className='article-h2' id={`sunstop-section${props.num}`}>Updating skills for 2024</h2>
            <p className='text-margins'>Sunstop presented me with two new challenges:</p> 
            <ul className='text-margins'>
                <li>Designing for a <strong>tablet interface</strong></li>
                <li>Coding with <strong>React.js</strong></li>
            </ul>
            <p className='text-margins'>Grappling with these two hurdles rapidly brought some of my design skills up to a more modern standard, and despite being new to these new ways of designing content and writing code, I was able to become a leading force in the project.</p>
        </section>
        </>
    )
}

// Body content
function Main() {
    const location = useLocation();
    console.log(location);
    return (
        <>
        {/* Nav with dynamic article TOC */}
        <div className='project-left-container'>
            <Nav index={0}/>
        </div>
        {/* Article main */}
        <div className='project-main-container'>
            <h2 className='article-h2 text-margins article-top'  id='sunstop-section0'>(top)</h2>
            {/* 4 info cards */}
            <div className='project-overview-cards-wrapper'>
                <LeadCard cardType='Collaborators' index={0}/>
                <LeadCard cardType='My roles' index={0}/>
                <LeadCard cardType='Project stack' index={0}/>
                <LeadCard cardType='Timeline' index={0}/>
            </div>
            
            {/* Start article bulk */}
            <section className='project-sections-wrapper'>
                {/* Section 1 */}
                <Fade keyframes={fadeInPushDown} duration={375} triggerOnce delay={100} cascade damping={0.1}>
                    <MainSection_Solution num='1'/>
                </Fade>

                {/* Section 2 - comparisons*/}
                <Fade keyframes={fadeInPushDown} duration={375} triggerOnce delay={100}>
                    <MainSection_Comparisons num='2'/>
                </Fade>

                {/* Section 3 */}
                <Fade keyframes={fadeInPushDown} duration={375} triggerOnce delay={100}>
                    <MainSection_Research num='3'/>
                </Fade>


                <Fade keyframes={fadeInPushDown} duration={375} triggerOnce delay={100}>
                    <MainSection_Grad num='4'/>
                </Fade>

                {/* Section 5 */}
                <Fade keyframes={fadeInPushDown} duration={375} triggerOnce delay={100}>
                    <MainSection_Skills num='5'/>
                </Fade>
            </section>
            {/* End article bulk */}
            
        </div>
        </>
    )
}

function Projects_Sunstop( ) {
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate(-1);
    };
    // Extract dispensing template from Dispense page using useLocation
    const location = useLocation();
    //const project = location.state.props;
    //console.log(project);

    return (
        <>
        <ProjectOpen_Template article='sunstop' index={0}>
            <Main/>
        </ProjectOpen_Template>
        </>
    )
}

export default Projects_Sunstop