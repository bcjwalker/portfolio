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
            <div className={styles['projects-bigcard']} key={props.id} onClick={handleThumbClick}> 
                {/* BEN 2024: What?
                Variables for hover/unhover bottom values 
                <style>
                    .projects-bigcard {
                        --idle-bottom: 72px;
                        --hover-bottom: 180px;
                    }
                </style> */}
                <div className={styles['projects-bicard-header']}> 
                    <p className={styles['projects-bigcard-header-tag']}>  </p> 
                </div>
                <div className={styles['projects-bigcard-content']}>
                    <div className={styles['projects-bigcard-thumb']}>
                        <img className={styles['projects-bigcard-thumb-img']} src={props.thumb}/>
                    </div>
                    <div className={styles['projects-bigcard-details-container']}> 
                        <div className={styles['projects-bicard-details-title']}>
                            <h3 className={styles['projects-bigcard-details-h3']}> {props.title} </h3>
                        </div>
                        <div className={styles['projects-bigcard-details-meta']}> 
                            <p className={styles['projects-bigcard-details-year']}> {props.date} </p> 
                            <div className={styles['projects-bigcard-details-taglist']}> {tagsList} </div> 
                        </div>
                        <p className={styles['projects-bigcard-details-desc']}> {props.desc} </p>

                    </div>
                </div>
            </div>
        </>
    )
}

// Simple tag component
function RenderProjectThumbTag( props ) {
    return (
        <>
        <button className={styles['projects-bigcard-tag']}>
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
            <div id={styles['projects-bigcardousel']}>
                {thumbsList}
            </div> 
        </div>
        </div>
        </>
    )
}

export default Projects