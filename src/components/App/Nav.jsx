// Style
import styles from './Nav.module.css';

function Nav ( props ) {

    // Each nav button reads the 'navOpen' state from the parent, and assigns the 'closed' 
    // if the nav bar is closed (on hamburger button click/unclick)
    return (
        <>
        <nav id={styles['body-nav']} className={`${props.readNavState ? null : styles['closed']}`}>
            {/* List of nav links for page */}
            <div id={styles['navbox']}>
                {/* UNDONE: Nav button collapsing ${props.navOpen ? null : `closed`} */}
                <ul>
                    <li id={styles['navbox-btn-intro']}> 
                        <button 
                        className={`icon-text-btn navbox-btn ${props.readNavState ? null : `closed`}`} 
                        onClick={() => document.getElementById('intro')?.scrollIntoView({behavior: 'smooth', block: 'start'})}> 
                            <span className='material-symbols-rounded'> contact_page </span> 
                            <label> Intro </label> 
                        </button> 
                    </li>
                    <li id={styles['navbox-btn-projects']}> 
                        <button 
                        className={`icon-text-btn navbox-btn ${props.readNavState ? null : `closed`}`} 
                        onClick={() => document.getElementById('works')?.scrollIntoView({behavior: 'smooth', block: 'start'})}> 
                            <span className='material-symbols-rounded'> inventory_2 </span> 
                            <label> Works </label> 
                        </button> 
                    </li>
                    <li id={styles['navbox-btn-contact']}> 
                        <button 
                        className={`icon-text-btn navbox-btn ${props.readNavState ? null : `closed`}`} 
                        onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth', block: 'start'})}>
                            <span className='material-symbols-rounded'> send </span> 
                            <label> Contact </label> 
                        </button> 
                    </li>
                </ul>
            </div>
            <div id={styles['navbox-foot']} className={`${props.readNavState ? null : styles['closed']}`}>
                <button title="Toggle margin size" className={`icon-btn outline-btn`} id={styles['nav-expand-btn']} onClick={() => props.switchNavOpen()}> 
                    <span className={`material-symbols-rounded ${styles['nav-expand-btn-icon']}`}> {`${props.readNavState ? `expand` : `compress` }`} </span> 
                    <label>{`${props.readNavState ? `` : `` }`}</label>
                </button>
            </div>
        </nav>
        </>
    )
}

export default Nav