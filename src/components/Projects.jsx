import { useNavigate } from 'react-router';
import { Outlet } from 'react-router';


// Styles
import styles from '../scss/modules/Projects.module.scss';

// Get project DB
import { projectData } from '../assets/projects-db.js';
// Glob file paths (https://vite.dev/guide/features#glob-import)
const projectImgs = import.meta.glob('@assets/projects/**/*.jpg');
console.log(projectImgs);


function RenderProjectThumb( props ) {
    console.log(props);

    const navigate = useNavigate();
    const handleThumbClick = () => {
        navigate('/projects/sunstop', { state: { props } }, {viewTransition: 'true' });
    };

    const tagsProps = props.tags;
    const tagsList = tagsProps.map ( (project, index) =>
        RenderProjectThumbTag(tagsProps[index])
    );

    console.log(props);
    return (
        <>
            <div className={styles['projects-card']} key={props.id} onClick={handleThumbClick}> 
                <div className={styles['projects-card-thumb']}>
                    <img className={styles['projects-card-thumb-img']} src={props.thumb}/>
                </div>

                <div className={styles['projects-card-details-container']}> 
                    <div className={styles['projects-card-details-title']}>
                        <p> {props.date} </p> 
                        <h3> {props.title} </h3>                        
                    </div>
                    <p className={styles['projects-card-details-desc']}> {props.desc} </p>
                </div>
            </div>
        </>
    )
}

// Simple tag component
function RenderProjectThumbTag( props ) {
    return (
        <>
        <button className={styles['projects-card-tag']}>
            {props}
        </button>
        </>
    );
}

function Projects() {
    const thumbsList = projectData.map ( (project, index) =>
        RenderProjectThumb(projectData[index])
    );

    return (
        <>
        <div id={styles['main-projects']}>
        {/* Projects big grid, for my best works */}
        <div id={styles['projects-big']}>
            <div id={styles['projects-big-head-container']}>
                <h1 id={styles['projects-big-h1']}> Works </h1>
                <p className='h1-sub' id={styles['projects-big-desc']}> Browse the projects I'm most proud of </p>
            </div>
            {/* Cards carousel */}
            <div id={styles['projects-cardousel']}>
                {thumbsList}
            </div> 
        </div>
        </div>
        </>
    )
}

export default Projects