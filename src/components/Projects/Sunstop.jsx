import { useNavigate, useLocation } from 'react-router';
import { ReactCompareSlider, ReactCompareSliderImage, styleFitContainer } from 'react-compare-slider';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

// Project info from raw table (not reversed);
// Sunstop id 3, 3rd in table
import { projectData } from '../../assets/projects-db.js';
const currentProj = projectData[0];

// Components
import Projects_Open_Template from './_ProjectOpen_Template.jsx';

// Styles
import styles from './Sunstop.module.scss';
const projectMedia = import.meta.glob(['@assets/projects/sunstop/*.jpg', '@assets/projects/sunstop/*.png','@assets/projects/sunstop/*.mp4', '@assets/projects/sunstop/*/*.png']);
console.log(projectMedia)


// LeadCard spits out different kinds of cards for the project overview
function LeadCard(props) {
    
    const collabsKeys = Object.entries(currentProj.collabs);
    const collabsList = collabsKeys.map ( (colleague, index) =>
        RenderLeadCard1CollabEntry(collabsKeys[index][1])
    );
    if (props.cardType == 'Collaborators') return (
        <>
        <div className='lead-card viewFadeUpIn'>
            <h4>{props.cardType}</h4>
            <div className='collabs-container'>
                {collabsList}
            </div>
        </div>
        </>);
    const rolesList = currentProj.roles.map ( function (colleague, index) {
        return (<p>{currentProj.roles[index]}</p>)
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
    const softwareList = currentProj.software.map ( function (software, index) {
        return (<p>{currentProj.software[index]}</p>)
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
    if (props.cardType == 'Timeline') return (
        <>
        <div className='lead-card'>
            <h4>{props.cardType}</h4>
            <div className='timeline-container'>
                <h5>{currentProj.timeline[0]}</h5>
                <p>{currentProj.timeline[1]}</p>
            </div>
        </div>
        </>);
}

function RenderLeadCard1CollabEntry (props) {
    return (
        <>
        <button className='collab-wrapper docket'>
            <div className='lead-icon'>
                <img src={props.thumb}/>
            </div>
            <label>{props.name}</label>
        </button>
        </>
    )
}

// Nav
function Nav() {
    return (
        <>
        {/* Nav (2, adjacent to main nav) */}
        <div className='project-nav-container'>
            <nav className='projects-nav'>
                <ul>
                    <li className='navbox-2-btn'>
                        <a onClick={() => document.getElementById('sunstop-section1')?.scrollIntoView({behavior: 'smooth', block: 'start'})}>
                        Sunscreen-as-a-Service</a>
                    </li>
                    <li className='navbox-2-btn'>
                        <a onClick={() => document.getElementById('sunstop-section2')?.scrollIntoView({behavior: 'smooth', block: 'start'})}>
                        My contribution</a>
                    </li>
                </ul>
            </nav>
        </div>
        </>
    )
}

// Body content
function Main() {
    return (
        <>
        <Nav/>
        <div className='main-container'>               
            {/* Start article bulk */}
            <div className='main'>
                <section className={styles['section0']}>
                    <div className={`text-block overview-text-wrapper`}>
                        {/*<h2 className='text-margins'>Overview</h2>*/}
                        <p className={`text-margins overview-text`}>Sunstop, a Sunscreen-as-a-Service design project, was the final assignment for my University degree. The main product was a colourful sunscreen dispenser kiosk, which motivated users to continue regular sunscreen usage with a variety of rewards. </p>
                        <p className={`text-margins overview-text`}>My personal touch was in pushing for increased visual expression in the use of colour, form and motion in the interface, making countless revisions and putting together most of the visual report.</p>
                    </div>
                    {/* Lead cards */}
                    <div className='main-lead-cards-wrapper'>
                        <LeadCard cardType='Collaborators'/>
                        <LeadCard cardType='My roles'/>
                        <LeadCard cardType='Project stack'/>
                        <LeadCard cardType='Timeline'/>
                    </div>
                </section>
                {/* Body */}
                <section className={styles['section1']}>
                    <a className='projects-anchor' id='sunstop-section1'/>
                    <div className='text-block'>
                        <div className='block-left'>
                            <h2 className='text-margins'>Sunscreen-as-a-Service</h2>
                            <p className='text-margins'>Sunstop was an interesting challenge for me, with two new variables: I had never designed a <strong>tablet interface</strong> before, nor had I touched <strong>React.js</strong> up until that point. These new factors presented a host of coding and design challenges that made this project a memorable one, and it was a pleasure to learn the new constraints and affordances.</p>
                            <p className='text-margins'>We began from a pretty broad remit: "design something based on the UN's Sustainable Development Goals."</p>
                        </div>
                        <div className='block-right'>
                            <blockquote>
                                <span className='quote-glyph'> ❝ </span>
                                <span className='quote-text'>Design something based on the UN's Sustainable Development Goals</span>
                            </blockquote>
                        </div>
                    </div>

                    { /*
                    <img className={`${styles['section1-image']} img-margin media-block`} src='/src/assets/projects/sunstop/ipad-landing.png'/>
                    */ }
                    <div className='video-wrapper ipad media-block'>
                        <video className={`${styles['section1-video']} img-margin`} autoPlay={true} loop muted>
                            <source src="/src/assets/projects/sunstop/vid-home.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </section>

                <section className={styles['section2']}>
                    <a className='projects-anchor' id='sunstop-section2'/>
                    <div className={`${styles['section2-bodytext-wrapper']} text-block`}>
                        <h2 className='text-margins'>My contribution</h2>
                        <p className='text-margins'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                    </div>
                    <div className='video-wrapper ipad media-block'>
                        <ReactCompareSlider style={{ borderRadius: '1.25rem' }}
                            itemOne={<ReactCompareSliderImage src="/src/assets/projects/sunstop/screens/screen-verif-before.png" alt="Image one" />}
                            itemTwo={<video className={`${styles['section2-video']} img-margin`} autoPlay={true} loop muted>
                                <source src="/src/assets/projects/sunstop/vid-verif-loop02.mp4" type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>} 
                        />
                    </div>
                </section>
            </div>
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
        <Projects_Open_Template>
            <Main/>
        </Projects_Open_Template>
        </>
    )
}

function initProjectsList() {
// Glob file paths (https://vite.dev/guide/features#glob-import)
const projectImgs = import.meta.glob('./assets/projects/**/*.jpg', {
    query: '?react',
    eager: true,
  });
console.log(projectImgs)

}

export default Projects_Sunstop