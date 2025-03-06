// Style
import styles from '../../scss/modules/App/Nav.module.scss';

function Nav ( props ) {

    // Each nav button reads the 'navOpen' state from the parent, and assigns the 'closed' 
    // if the nav bar is closed (on hamburger button click/unclick)
    return (
        <>
        <nav>
            {/* Hamburger menu, persistent, remains on top of header */}
            <button 
            className='iconbtn' 
            id={styles['head-hamburger-btn']} 
            onClick={() => props.switchNavOpen()}> 
                <span className='material-symbols-sharp'> list </span> 
            </button>
            <div id={styles['navbox']}>
                {/* List of nav links for page */}
                <ul>
                    <li id={styles['navbox-btn-intro']}> 
                        <button 
                        className={`navbox-btn ${props.navOpen ? null : `closed` }`} 
                        onClick={() => document.getElementById('intro')?.scrollIntoView({behavior: 'smooth', block: 'start'})}> 
                            <span className='material-symbols-rounded'> contact_page </span> 
                            <p className='navbox-btn-p'> Intro </p> 
                        </button> 
                    </li>
                    <li id={styles['navbox-btn-projects']}> 
                        <button 
                        className={`navbox-btn ${props.navOpen ? null : `closed`}`} 
                        onClick={() => document.getElementById('works')?.scrollIntoView({behavior: 'smooth', block: 'start'})}> 
                            <span className='material-symbols-rounded'> inventory_2 </span> 
                            <p className='navbox-btn-p'> Works </p> 
                        </button> 
                    </li>
                    <li id={styles['navbox-btn-contact']}> 
                        <button 
                        className={`navbox-btn ${props.navOpen ? null : `closed`}`} 
                        onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth', block: 'start'})}>
                            <span className='material-symbols-rounded'> send </span> 
                            <p className='navbox-btn-p'> Contact </p> 
                        </button> 
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Nav