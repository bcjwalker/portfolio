import { useNavigate, useLocation } from 'react-router';


// Styles
import styles from '../../scss/modules/ProjectOpen.module.scss';
const projectImgs = import.meta.glob(['@assets/projects/sunstop/*.jpg', '@assets/projects/sunstop/*.png']);
console.log(projectImgs)

// Body content
function Body() {
    return (
        <>
        <div className={styles["body-container"]}>
            <img src="/src/assets/projects/sunstop/ipad-landing.png"></img>
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
        {/* Project open template, replaces the projects card grid */}
            <div className={styles["project-big-open"]}>
                {/* Header */}
                <div className={styles["header-container"]}>
                    <div className={styles["header"]}>
                        {/* Content container */}
                        <div className={styles["header-content"]}>
                            <div className={styles["header-topdtls"]}>
                                <button className={`stdbtn icon ${styles["header-backbtn"]}`}
                                onClick={handleBackClick}>
                                    <span className="material-symbols-rounded"> arrow_back </span> 
                                </button>
                                
                                <h1 className={styles["header-title"]}>Sunstop</h1>
                            </div>
                            <div className={styles["header-bottomdtls"]}>
                                <div className={styles["header-taglist"]}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Main wrapper */}
                <div className={styles["main-container"]}> 
                    <Body/>
                </div>
            </div>
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