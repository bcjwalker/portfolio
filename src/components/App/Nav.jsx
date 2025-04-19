// Style
import styles from './Nav.module.css';

function Nav ( props ) {

    // Each nav button reads the 'navOpen' state from the parent, and assigns the 'closed' 
    // if the nav bar is closed (on hamburger button click/unclick)
    return (
        <>
        <nav>
            {/* List of nav links for page */}
            <div id={styles['navbox']}>
                {/* Hamburger menu, persistent, remains on top of header */}
                <button className='icon-btn' id={styles['head-hamburger-btn']} onClick={() => props.switchNavOpen()}> 
                    <span className='material-symbols-sharp'> list </span> 
                </button>
                <ul>
                    <li id={styles['navbox-btn-intro']}> 
                        <button 
                        className={`icon-text-btn navbox-btn ${props.navOpen ? null : `closed` }`} 
                        onClick={() => document.getElementById('intro')?.scrollIntoView({behavior: 'smooth', block: 'start'})}> 
                            <span className='material-symbols-rounded'> contact_page </span> 
                            <label> Intro </label> 
                        </button> 
                    </li>
                    <li id={styles['navbox-btn-projects']}> 
                        <button 
                        className={`icon-text-btn navbox-btn ${props.navOpen ? null : `closed`}`} 
                        onClick={() => document.getElementById('works')?.scrollIntoView({behavior: 'smooth', block: 'start'})}> 
                            <span className='material-symbols-rounded'> inventory_2 </span> 
                            <label> Works </label> 
                        </button> 
                    </li>
                    <li id={styles['navbox-btn-contact']}> 
                        <button 
                        className={`icon-text-btn navbox-btn ${props.navOpen ? null : `closed`}`} 
                        onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth', block: 'start'})}>
                            <span className='material-symbols-rounded'> send </span> 
                            <label> Contact </label> 
                        </button> 
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Nav