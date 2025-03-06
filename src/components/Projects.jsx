import { useNavigate } from 'react-router';
import { Outlet } from 'react-router';


// Styles
import styles from '../scss/modules/Projects.module.scss';

// Get project DB
import { projectDataRaw } from "../assets/projects-db.js";
const projectData = projectDataRaw.reverse();
// Glob file paths (https://vite.dev/guide/features#glob-import)
const projectImgs = import.meta.glob('@assets/projects/**/*.jpg');
console.log(projectImgs)

function RenderProjectTaglist( props ) {
    return (
        <>
        </>
    );
}

function RenderProjectThumb( props ) {
    const navigate = useNavigate();
    const handleThumbClick = () => {
        navigate('/projects/sunstop', { state: { props } }, {viewTransition: 'true' });
    };

    console.log(props);
    return (
        <>
            <div className={styles["projects-bigcard"]} key={props.id} onClick={handleThumbClick}> 
                {/* BEN 2024: What?
                Variables for hover/unhover bottom values 
                <style>
                    .projects-bigcard {
                        --idle-bottom: 72px;
                        --hover-bottom: 180px;
                    }
                </style> */}

                <div className={styles["projects-bigcard-thumb"]}>
                    <img className={styles["projects-bigcard-thumb-img"]} src={props.thumb}/>
                </div>
                <div className={styles["projects-bigcard-details-container"]}> 
                    <h3 className={styles["projects-bigcard-details-h3"]}> {props.title} </h3>
                        <div className={styles["projects-bigcard-details-meta"]}> 
                            <p className={styles["projects-bigcard-details-year"]}> {props.date} </p> 
                            <p className={styles["projects-bigcard-details-dot"]}> • </p> 
                            <div className={styles["projects-bigcard-details-taglist"]}> </div> 
                        </div>
                        <p className={styles["projects-bigcard-details-desc"]}> {props.desc} </p>
                </div>

            </div>
        </>
    )
}

function Projects() {
    const thumbsList = projectData.map ( (project, index) =>
        RenderProjectThumb(projectData[index])
    );

    return (
        <>
        <div id={styles["main-projects"]}>
        {/* Projects big grid, for my best works */}
        <div id={styles["projects-big"]}>
            <div id={styles["projects-big-head-container"]}>
                <h1 id={styles["projects-big-h1"]}> Works </h1>
                <p className="h1-sub" id={styles["projects-big-desc"]}> Browse the projects I'm most proud of </p>
            </div>
            {/* Cards carousel */}
            <div id={styles["projects-bigcardousel"]}>
                {thumbsList}
            </div> 
        </div>
        </div>
        </>
    )
}

function initProjectsList() {


}

export default Projects