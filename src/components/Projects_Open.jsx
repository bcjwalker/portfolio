import { useNavigate, useLocation } from 'react-router';


// Styles
import styles from '../scss/modules/ProjectOpen.module.scss';


function Project_Open( ) {
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate(-1);
    };
    // Extract dispensing template from Dispense page using useLocation
    const location = useLocation();
    const project = location.state.props;
    console.log(project);

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
                                
                                <h1 className={styles["header-title"]}>{project.title}</h1>
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
                    {/* Body */}
                    <div className={styles["body-container"]}>
                        {/* Description */}
                        <div className={styles["desc-container"]}>
                            <p className={styles["desc"]}>{project.desc}</p>
                        </div>

                        <a className="anchor" id="open-carousel-1"></a>
                        {/* Carousel 1 */}
                        <h2 className={styles["carousel-1-h2"]}>Final design</h2>
                        <div className={styles["carousel-1"]}>
                            <div className={styles["carousel-1-content-container"]}>
                                <div className={styles["carousel-1-media"]}></div>
                                <div className={styles["carousel-1-info"]}></div>
                            </div>
                            <div className={styles["carousel-1-btns-container"]}>
                                <button className={`stdbtn bronzebtn ${styles["carousel-1-backbtn"]}`}> 
                                    <span className="material-symbols-rounded"> chevron_left </span> 
                                </button>
                                <button className={`stdbtn bronzebtn ${styles["carousel-1-nextbtn"]}`}>
                                    <span className="material-symbols-rounded"> chevron_right </span> 
                                </button>
                            </div>
                        </div>

                        <a className="anchor" id="open-carousel-2"></a>
                        {/* Carousel 2 */}
                        <h2 className={styles["carousel-2-h2"]}>Design process</h2>
                        <div className={styles["carousel-2"]}>
                            {/* Carousel sidebar with list of thumbs */}
                            <div className={styles["carousel-2-sidebar-container"]}>
                                <div className={styles["carousel-2-sidebar-list"]}>
                                    {/* Carousel 2 sidebar entry template */}
                                    <template className={styles["carousel-2-card-template"]}>
                                        {/* Begin card */}
                                        <div className={styles["carousel-2-card-container"]}>
                                            {/* Leading thumb */}
                                            <div className={styles["carousel-2-thumb-container"]}>
                                                <img className="carousel-2-thumb"/>
                                            </div>
                                            {/* Text content */}
                                            <div className={styles["carousel-2-content-container"]}>
                                                {/* Head */}
                                                <div className={styles["carousel-2-card-head-container"]}>
                                                    <h3 className={styles["carousel-2-card-head-h3"]}></h3>
                                                </div>
                                                {/* Desc */}
                                                <div className={styles["carousel-2-card-desc-container"]}>
                                                    <p className={styles["carousel-2-card-desc-p"]}></p>
                                                </div>
                                            </div>
                                        {/* Close card */}
                                        </div>
                                    </template>

                                </div>
                            </div>

                            <div className={styles["carousel-2-content-container"]}>
                                <div className={styles["carousel-2-media"]}>

                                </div>
                                <div className={styles["carousel-2-info"]}>

                                </div>
                            </div>

                        </div>

                        <a className="anchor" id="open-credits"></a>
                        {/* Credits */}
                        <h2 className={styles["credits-h2"]}>Credits</h2>
                        <div className={styles["credits"]}>

                        </div>
                    {/* Close body */}
                    </div>
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

export default Project_Open