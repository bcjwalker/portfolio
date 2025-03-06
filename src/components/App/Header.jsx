// Style
import styles from '../../scss/modules/App/Header.module.scss';
import { useState, useEffect } from 'react';

// Imgs
import imgSignHead from '../../assets/img-my-signature-head.png';

function Header ( {switchNavOpen} ) {
    // Lovely scroll tracking from https://stackoverflow.com/questions/62497110/detect-scroll-direction-in-react-js/62497293#62497293
    // Check: can this be cut down?
    const [headerOpen, setHeaderOpen] = useState("scrolling down");
    useEffect(() => {
      const threshold = 0;
      let lastScrollY = window.scrollY;
      let ticking = false;
      console.log(window.scrollY)
    
      const updateHeaderOpen = () => {
        const scrollY = window.scrollY;
    
        if (Math.abs(scrollY - lastScrollY) < threshold) {
          ticking = false;
          return;
        }
        setHeaderOpen(scrollY < 220 ? true : false);
        lastScrollY = scrollY > 0 ? scrollY : 0;
        ticking = false;
      };
    
      const onScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(updateHeaderOpen);
          ticking = true;
        }
      };
    
      window.addEventListener("scroll", onScroll);
      console.log(headerOpen);
    
      return () => window.removeEventListener("scroll", onScroll);
    }, [headerOpen]);

    return (
        <>
            {/* Header, only appears after user has scrolled past signature img */}
            <header className={`${headerOpen ? styles['fade-out'] : styles['fade-in'] }`} >
                <img className={styles['head-icon']} src={imgSignHead} /> 
                <p className={styles['head-text']}> Benjamin Walker </p>
            </header>
        </>
    )
}

export default Header