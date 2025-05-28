import { useState, useEffect, useRef } from "react";

/**
 * This tracks which section is active and adds active styling
 */
const useIntersectionObserver = (setActiveId, activeId) => {
  const mainSectionDivsRef = useRef({});
  useEffect(() => {
    const callback = (headings) => {
      mainSectionDivsRef.current = headings.reduce((map, headingElement) => {
        map[headingElement.target.id] = headingElement;
        return map;
      }, mainSectionDivsRef.current);

      // Get all headings that are currently visible on the page
      const visibleHeadings = [];
      Object.keys(mainSectionDivsRef.current).forEach((key) => {
        const headingElement = mainSectionDivsRef.current[key];
        if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
      });
      
      const getIndexFromId = (id) =>
        mainSectionDivs.findIndex((heading) => heading.id === id);

      // If there is only one visible heading, this is our "active" heading
      if (visibleHeadings.length === 1) {
        setActiveId(visibleHeadings[0].target.id);
        // If there is more than one visible heading,
        // choose the one that is closest to the top of the page
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a, b) => getIndexFromId(a.target.id) > getIndexFromId(b.target.id)
        );

        setActiveId(sortedVisibleHeadings[0].target.id);
      }

      // If there are no visible headings, and we are scrolling back up, we want to make sure
      // the correct header is highlighted.
      // Shoutout to Heisman2 for this addition, and Ky Wildermuth for originally suggesting it!
      if (visibleHeadings.length === 0) {
        const activeElement = mainSectionDivs.find((el) => el.id === activeId);
        const activeIndex = mainSectionDivs.findIndex(
          (el) => el.id === activeId
        );

        const activeIdYcoord = activeElement?.getBoundingClientRect().y;
        if (activeIdYcoord && activeIdYcoord > 150 && activeIndex !== 0) {
          setActiveId(mainSectionDivs[activeIndex - 1].id);
        }
      }
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: "-50% 0px -100% 0px"
    });


    const mainSectionDivs = Array.from(document.querySelectorAll("div.main-section"));

    mainSectionDivs.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [setActiveId, activeId]);
};

// Style
import styles from './Nav.module.css';

function Nav ( props ) {
    const [activeId, setActiveId] = useState();
    useIntersectionObserver(setActiveId, activeId);

    // Each nav button reads the 'navOpen' state from the parent, and assigns the 'closed' 
    // if the nav bar is closed (on hamburger button click/unclick)
    return (
        <>
        <nav id={`${styles['body-nav']}`} className={`${props.readNavState ? null : `${styles['closed']} opened`} nav-dialog`}>
            {/* List of nav links for page */}
            <div id={styles['navbox']}>
                {/* UNDONE: Nav button collapsing ${props.navOpen ? null : `closed`} */}
                <ul>
                    <li className={`${'main-intro-container' === activeId ? "active" : ""}`}> 
                        <button 
                        className={`icon-text-btn navbox-btn ${props.readNavState ? null : `closed`}`} 
                        onClick={() => document.querySelector('a#intro')?.scrollIntoView({behavior: 'smooth', block: 'start'})}> 
                            <span className='material-symbols-rounded'> contact_page </span> 
                            <label> Intro </label> 
                        </button> 
                    </li>
                    <li className={`${'main-projects-container' === activeId ? "active" : ""}`}> 
                        <button 
                        className={`icon-text-btn navbox-btn ${props.readNavState ? null : `closed`}`} 
                        onClick={() => document.querySelector('a#works')?.scrollIntoView({behavior: 'smooth', block: 'start'})}> 
                            <span className='material-symbols-rounded'> cases </span> 
                            <label> Works </label> 
                        </button> 
                    </li>
                    <li className={`${'main-contact-container' === activeId ? "active" : ""}`}> 
                        <button 
                        className={`icon-text-btn navbox-btn ${props.readNavState ? null : `closed`}`} 
                        onClick={() => document.querySelector('a#contact')?.scrollIntoView({behavior: 'smooth', block: 'start'})}>
                            <span className='material-symbols-rounded'> send </span> 
                            <label> Contact </label> 
                        </button> 
                    </li>
                </ul>
            </div>
            {/* <div id={styles['navbox-foot']} className={`${props.readNavState ? null : styles['closed']}`}>
                <button title="Toggle margin size" className={`icon-btn outline-btn`} id={styles['nav-expand-btn']} onClick={props.switchNavOpen}> 
                    <span className={`material-symbols-rounded ${styles['nav-expand-btn-icon']}`}> {`${props.readNavState ? `expand` : `compress` }`} </span> 
                    <label>{`${props.readNavState ? `` : `` }`}</label>
                </button>
            </div> */}
        </nav>
        </>
    )
}

export default Nav