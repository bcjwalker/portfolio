import { useNavigate, useLocation } from 'react-router';
import {useState, useRef, useEffect} from 'react'
import { ReactCompareSlider, ReactCompareSliderImage, styleFitContainer } from 'react-compare-slider';
import TableOfContents from '../utils/TableOfContents';

// Project info from raw table (not reversed);
// Sunstop id 3, 3rd in table
import { projectData } from '../../assets/projects-db.js';
const currentProj = projectData[0];

// Components
import Projects_Open_Template from './_ProjectOpen_Template.jsx';

// Styles
import styles from './Sunstop.module.css';

// Assets
const projectMedia = import.meta.glob(
    ['@assets/projects/sunstop/*.jpg',
    '@assets/projects/sunstop/*.png',
    '@assets/projects/sunstop/*.mp4', 
    '@assets/projects/sunstop/*/*.png',
    '@assets/software/*.ico']);
console.log(projectMedia)

// LeadCard spits out different kinds of cards for the project overview
function LeadCard(props) {
    // Docket for collab card
    const RenderLeadCard1CollabEntry = (props) => { 
        return (<>
            <div className='collab-wrapper'>
                <div className='lead-icon'>
                    <img src={props.thumb}/>
                </div>
                <label>{props.name}</label>
            </div>
            </>
        )};
        const collabsKeys = Object.entries(currentProj.collabs);
        const collabsList = collabsKeys.map ( (colleague, index) =>
            RenderLeadCard1CollabEntry(collabsKeys[index][1])
        );

    // 1: Important collaborators
    if (props.cardType == 'Collaborators') return (
        <>
        <div className='lead-card'>
            <h4>{props.cardType}</h4>
            <div className='collabs-container'>
                {collabsList}
            </div>
        </div>
        </>);

    // 2: My roles :)
    const rolesList = currentProj.roles.map ( function (colleague, index) {
        return (<span>{currentProj.roles[index]}</span>)
    });
    if (props.cardType == 'My roles') return (
        <>
        <div className='lead-card'>
            <h4>{props.cardType}</h4>
            <div className='roles-container'>
                {rolesList}
            </div>
        </div>
        </>);

    // 3: Project stack
    const softwareList = currentProj.software.map ( function (software, index) {
        return (<>
            <div className='software-wrapper'>
                <img src={`/src/assets/software/${currentProj.software[index]}.ico`}></img>
                <label>{currentProj.software[index]}</label>
            </div>
            </>)
    });
    if (props.cardType == 'Project stack') return (
        <>
        <div className='lead-card'>
            <h4>{props.cardType}</h4>
            <div className='software-container'>
                {softwareList}
            </div>
        </div>
        </>);

    // 4: Timeline
    if (props.cardType == 'Timeline') return (
        <>
        <div className='lead-card'>
            <h4>{props.cardType}</h4>
            <div className='timeline-container'>
                <h5>{currentProj.timeline[0]}</h5>
                <span>{currentProj.timeline[1]}</span>
            </div>
        </div>
        </>);
}

// Details card
function Details( props ) {
    // Card type label
    let cardType = '';
    if (props.colour === 'prmry') {
        cardType = 'Primary insight'
    } 
    else if (props.colour === 'scndry') {
        cardType = 'Secondary insight'
    }

    return (
    <>
    <details className={`details-card ${props.type} ${props.colour}`}>
        <summary>
            <div className='summary-header-wrapper'>
                <span className='summary-label'>{cardType}</span>
                <h5>{props.title}</h5>
            </div>
            <span className='material-symbols-sharp expand-btn'> expand_less </span>
        </summary>
        <div className='details-content-wrapper'>
            {props.children}
        </div>
    </details>
    </>);
}
// Details card static
function Details_Static( props ) {
    // Card type label
    let cardType = '';
    if (props.colour === 'prmry') {
        cardType = 'Primary insight'
    } 
    else if (props.colour === 'scndry') {
        cardType = 'Secondary insight'
    }

    return (
    <>
    <div className={`details-card static ${props.type} ${props.colour}`}>
        <div className='summary-header-wrapper'>
            <span className='summary-label'>{cardType}</span>
            <h5>{props.title}</h5>
        </div>
        <div className='details-content-wrapper'>
            {props.children}
        </div>
    </div>
    </>);
}

// Left nav-TOC column
function Nav() {
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/');
    };
    return (
        <>
        <div className='project-nav-wrapper' id={styles['nav-sunstop']}>
            <div className={`nav-topdtls`} onClick={(e) => e.stopPropagation()}>
                <button title="Go back" className='icon-btn nav-backbtn green-btn'
                onClick={handleBackClick}>
                    <span className='material-symbols-sharp'> arrow_back </span> 
                </button>
            </div>
            <TableOfContents/>
            <div className='nav-btns-wrapper'>
                <label className='projects-nav-label'>External links</label>
                <div className='btns'>
                    <a href='https://nicolexylow.github.io/sunstop/' target='_blank' className='docket med icon prmry-btn metadata-link'>
                        <span className='material-symbols-rounded'> open_in_new </span> 
                        <label>View interface</label> 
                    </a>
                    <a href="/src/assets/projects/sunstop/DECO4200_A4_report.pdf" target='_blank' className='docket outline-btn outline-3 med icon metadata-link'>
                        <span className='material-symbols-rounded'> open_in_new </span> <label>Read case study</label> 
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}

// Body content
function Main() {
    return (
        <>
        {/* Nav with dynamic article TOC */}
        <div className='project-left-container'>
            <Nav/>
        </div>
        {/* Article main */}
        <div className='project-main-container'>
            <h2 className='article-h2 text-margins article-top'  id='sunstop-section0'>(top)</h2>
            {/* 4 info cards */}
            <div className='project-overview-cards-wrapper'>
                <LeadCard cardType='Collaborators'/>
                <LeadCard cardType='My roles'/>
                <LeadCard cardType='Project stack'/>
                <LeadCard cardType='Timeline'/>
            </div>
            
            {/* Start article bulk */}
            {/* Section 1 */}
            <section className={`projects-body-section ${styles['section1']}`}>
                <h2 className='article-h2 text-margins'  id='sunstop-section3'>Designing sunscreen into a service</h2>    
                <h3 className='article-h3 text-margins'>Interactive sunscreen dispenser</h3>
                <p className='text-margins'>The core of Sunstop is the kiosk experience. With bright colours, relevant marketing and an easy sign-up experience, users are encouraged to join, and begin to build toward</p>
                <p className='text-margins'>We did a </p>

                <div className={`${styles['section1a-media']} media-container double extra-margins`}>
                    <figure className={`${styles['lead']} media-wrapper`}>
                        <div className='video-wrapper ipad'>
                            <video className={`${styles['section1-video']} img-margin filter-shadow1`} autoPlay={true} loop muted>
                                <source src="/src/assets/projects/sunstop/vid-signup.mp4" type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <figcaption>Sunstop's login flow, with 2FA verification</figcaption>
                    </figure>
                    <figure className={`${styles['side']} media-wrapper`}>
                        <div className='img-wrapper bordered transparent'>
                            <img className={`${styles['section1-video']} img-margin`} src="/src/assets/projects/sunstop/img-kiosk.png"/>
                        </div>
                        <figcaption>A mockup of the Sunstop kiosk</figcaption>
                    </figure>
                </div>

                {/* UNDONE: I don't think I have enough quality imagery for a gallery, but we will see
                <div className={`media-container gallery-3 extra-margins ${styles['sunstop-section3-gallery']}`}>
                    <figure className='media-wrapper lead'>
                        <div className='img-wrapper bordered'>
                            <img className={`${styles['section1-video']} img-margin`} src="/src/assets/projects/sunstop/insitu/final-build-cropped.jpg"/>
                        </div>
                    </figure>
                    <div className='side-media-wrapper'>
                        <figure className='media-wrapper side-1'>
                            <div className='img-wrapper bordered transparent'>
                                <img className={`${styles['section1-video']} img-margin`} src="/src/assets/projects/sunstop/img-kiosk.png"/>
                            </div>
                        </figure>
                        <figure className='media-wrapper side-2'>
                            <div className='img-wrapper bordered'>
                                <img className={`${styles['section1-video']} img-margin`} src="/src/assets/projects/sunstop/thumb.jpg"/>
                            </div>
                        </figure>
                    </div>
                </div> */}

                <h3 className='article-h3 text-margins'>Motivating users with rewards</h3>
                <h3 className='article-h3 text-margins'>Marketing campaign</h3>
            </section>   

            {/* Section 5 - comparisons*/}
            <section className={`projects-body-section ${styles['section4']}`}>
                <h2 className='article-h2 text-margins' id='sunstop-section4'>Selected contributions</h2>
                <div className={`${styles['section2-bodytext-wrapper']}`}>
                    <p className='text-margins'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                </div>
                
                <figure className='media-wrapper'>
                    <div className='text-margins video-wrapper ipad'>
                        <ReactCompareSlider style={{ borderRadius: '1.25rem' }}
                            itemOne={<ReactCompareSliderImage src="/src/assets/projects/sunstop/screens/screen-verif-before.png" alt="Image one" />}
                            itemTwo={<video className={`${styles['section2-video']} img-margin`} autoPlay={true} loop muted>
                                <source src="/src/assets/projects/sunstop/vid-verif-loop02.mp4" type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>} 
                        />
                    </div>
                </figure>
                <figure className='media-wrapper'>
                    <div className='text-margins video-wrapper ipad'>
                        <video className={`${styles['section1-video']} img-margin`} preload='none' autoPlay={true} loop muted>
                            <source src="/src/assets/projects/sunstop/vid-home.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <figcaption>Sunstop's landing page, with UV index and call to action</figcaption>
                </figure>
            </section>

            {/* Section 2 */}
            <section className={`projects-body-section ${styles['section2']}`}>
                <h2 className='article-h2 text-margins'  id='sunstop-section2'>Background: our national cancer</h2>
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

            <section className={`projects-body-section ${styles['section3']}`}>   
                <h2 className='article-h2' id='sunstop-section3'>The grad show</h2>
            </section>


            {/* Section 6 */}
            <section className={`projects-body-section ${styles['section4']}`}>
                <h2 className='article-h2' id='sunstop-section4'>Updating skills for 2024</h2>
                <p className='text-margins'>Sunstop presented me with two new challenges:</p> 
                <ul className='text-margins'>
                    <li>Designing for a <strong>tablet interface</strong></li>
                    <li>Coding with <strong>React.js</strong></li>
                </ul>
                <p className='text-margins'>Grappling with these two hurdles rapidly brought some of my design skills up to a more modern standard, and despite being new to these new ways of designing content and writing code, I was able to become a leading force in the project.</p>
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
        <Projects_Open_Template article='sunstop'>
            <Main/>
        </Projects_Open_Template>
        </>
    )
}

export default Projects_Sunstop